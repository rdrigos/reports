import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/main.ts',
  format: ['esm'],
  platform: 'node',
  clean: true,
  treeshake: true,
  deps: {
    alwaysBundle: ['@reporting/environment/server'],
  },
});
