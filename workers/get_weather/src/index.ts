import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

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
  basicAuth({
    username: 'admin',
    password: 'weather',
  })
)

app.get('/api/now/:place', (c) => {
	const place = c.req.param("place");
	return c.text(`called, ${place}`);
})

export default app;