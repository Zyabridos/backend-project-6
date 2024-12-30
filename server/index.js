import Fastify from 'fastify';

const app = Fastify({ logger: true });

// Главный маршрут
app.get('/', async (request, response) => ({ message: 'Hello, world!' }));

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server runs on http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
