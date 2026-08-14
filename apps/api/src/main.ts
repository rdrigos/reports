import { env } from '@reporting/environment/server';
import Fastify from 'fastify';

const app = Fastify({
  logger: true,
});

app.listen({
  host: env.HOST,
  port: env.PORT,
});
