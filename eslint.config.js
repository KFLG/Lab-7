import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

// Inicializa compatibilidad
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended, // Configuración recomendada moderna
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['node_modules'],
  },
  // Uso de compatibilidad para extender configuraciones antiguas
  ...compat.extends('eslint:recommended'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
