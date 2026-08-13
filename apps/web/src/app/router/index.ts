import { routeTree } from '@/app/router/route-tree.gen';
import { createRouter } from '@tanstack/react-router';

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});
