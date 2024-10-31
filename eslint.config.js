import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

// Inicializar compatibilidad con configuraciones antiguas
const compat = new FlatCompat({
  baseDirectory: __dirname, // Establece el directorio base para buscar las configuraciones heredadas.
  recommendedConfig: js.configs.recommended, // Importar configuraciones recomendadas modernas
});

export default [
  {
    ignores: ['node_modules'],  // Ignorar la carpeta node_modules
  },
  // Agregar compatibilidad para configuraciones heredadas
  ...compat.extends('eslint:recommended'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
