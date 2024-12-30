import Fastify from 'fastify'
const app = Fastify({ logger: true });

// Главный маршрут
app.get('/', async (request, response) => {
  return { message: 'Привет, мир!' };
});

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Сервер запущен на http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
