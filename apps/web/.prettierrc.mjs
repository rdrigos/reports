import prettier from '@config/prettier';

/** @type { import('prettier').Config } */
export default {
  ...prettier,
  plugins: ['prettier-plugin-tailwindcss'],
};
