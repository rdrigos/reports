import { z } from 'zod';

const server = z.object({
  VITE_API_URL: z.url(),
});

export const env = server.parse(import.meta.env);
