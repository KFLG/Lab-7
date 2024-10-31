import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends('eslint:recommended'),
  {
    ignores: ['node_modules'],
    rules: {
      // Aquí puedes agregar reglas personalizadas
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
