import js from '@eslint/js';

export default [
  {
    ignores: ['node_modules'],
  },
  js.configs.recommended, // Configuración recomendada de ESLint para JS
  {
    rules: {
      'no-unused-vars': 'warn', // Reglas personalizadas
      'no-console': 'off',
    },
  },
];
