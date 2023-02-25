import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

export type Env = {
	ENVIRONMENT: string
	USER: string
	PASSWORD: string
}

const app = new Hono<{Bindings: Env}>();

const places = {
	hirakue: {
		lon: 140.40252931112,
		lat: 36.403112011215,
	},
	numata: {
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

app.get('/api/now/:place', (c) => {
	const place = c.req.param("place");
	return c.text(`called, ${place}(${c.env.ENVIRONMENT})`);
})

export default app;