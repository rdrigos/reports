import eslint from '@config/eslint/react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...eslint,
  {
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]);
