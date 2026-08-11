import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTurbo from 'eslint-plugin-turbo';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/.turbo', '**/dist', '**/node_modules']),
  {
    files: ['**/*{js,mjs,ts,tsx}'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier],
    plugins: {
      prettier: eslintPluginPrettier,
      turbo: eslintPluginTurbo,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
