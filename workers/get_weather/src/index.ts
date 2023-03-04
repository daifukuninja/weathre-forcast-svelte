import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

export type Env = {
	API_KEY: string
	ENVIRONMENT: string
	USER: string
	PASSWORD: string
	KV_WEATHER_CACHE: KVNamespace
	CACHE_EXPIRATION_TTL: number	// seconds.
}

const app = new Hono<{ Bindings: Env }>();

const geometory = {
	hirakue: {
		lon: 140.40252931112,
		lat: 36.403112011215,
	},
	tanbara: {
		lon: 139.066,
		lat: 36.7298,
	},
	sapporo: {
		lon: 141.35,
		lat: 43.068,
	},
	hitachinaka: {
		lon: 140.5346,
		lat: 36.3966,
	},
};

const getNowWeatherEndpoint = (place: string, key: string) => {
	switch (place) {
		case 'hirakue':
			return `https://api.openweathermap.org/data/2.5/weather?zip=311-4144,JP&appid=${key}&lang=jp`

		case 'tanbara':
			return `https://api.openweathermap.org/data/2.5/weather?lon=${geometory.tanbara.lon}&lat=${geometory.tanbara.lat}&appid=${key}&lang=jp`;

		case 'sapporo':
			return `https://api.openweathermap.org/data/2.5/weather?lon=${geometory.sapporo.lon}&lat=${geometory.sapporo.lat}&appid=${key}&lang=jp`;

		case 'hitachinaka':
			return `https://api.openweathermap.org/data/2.5/weather?lon=${geometory.hitachinaka.lon}&lat=${geometory.hitachinaka.lat}&appid=${key}&lang=jp`;

		default:
			// hirakue
			return `https://api.openweathermap.org/data/2.5/weather?zip=311-4144,JP&appid=${key}&lang=jp`
	}
}

const putResponse2Cache = async (KV: KVNamespace, place: string, response: Response, ttl: number) => {
	let cache = response.clone();
	cache = new Response(cache.body, cache);
	cache.headers.append("x-from-cache", "true");

	const headerObj = Array.from(cache.headers.entries()).reduce(
		(acc, entry) => {
			return {
				...acc,
				[entry[0]]: entry[1],
			};
		},
		{}
	);
	let funcs = [
		await KV.put(`${place}:HEADER`, JSON.stringify(headerObj), { expirationTtl: ttl }),
	]
	if (cache.body != null) {
		funcs.push(
			await KV.put(`${place}:BODY`, cache.body, { expirationTtl: ttl })
		)
	}
	return Promise.all(funcs)
}

app.use(
	'/api/*',
	async (c, next) => {
		const handler = basicAuth({
			username: c.env.USER,
			password: c.env.PASSWORD,
		})
		await handler(c, next)
	}
)

app.get('/api/now/:place', async (c) => {
	const place = c.req.param("place");
	const serviceURL = getNowWeatherEndpoint(place, c.env.API_KEY);

	const cachedHeader = await c.env.KV_WEATHER_CACHE.get(`${place}:HEADER`, { type: "json", });
	const cachedBody = await c.env.KV_WEATHER_CACHE.get(`${place}:BODY`);
	if (cachedHeader && cachedBody) {
		return new Response(cachedBody, {
			headers: cachedHeader,
		});
	}
	
	const response = await fetch(serviceURL, {
		method: "GET",
	});

	await putResponse2Cache(c.env.KV_WEATHER_CACHE, place, response, c.env.CACHE_EXPIRATION_TTL);

	const result = await response.json();
	return c.json(result);
})

app.get('/api/cache/:place', async (c) => {
	const place = c.req.param("place");
	const cachedHeader = await c.env.KV_WEATHER_CACHE.get(`${place}:HEADER`, { type: "json", });
	const cachedBody = await c.env.KV_WEATHER_CACHE.get(`${place}:BODY`);
	if (cachedHeader && cachedBody) {
		return new Response(cachedBody, {
			headers: cachedHeader,
		});
	} else {
		return new Response(null, {
			status: 404,
		})
	}
})

export default app;