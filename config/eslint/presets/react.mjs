import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import base from './base.mjs';

export default defineConfig([
  ...base,
  {
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    extends: [eslintPluginReactHooks.configs.flat.recommended, eslintPluginReactRefresh.configs.vite],
  },
]);
