import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';


const compat = new FlatCompat({
  baseDirectory: __dirname, 
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['node_modules'],
  },

  ...compat.extends('eslint:recommended'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
