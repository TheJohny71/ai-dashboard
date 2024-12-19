import { coreConfig } from '@eslint/js';

export default [
  {
    ignores: ['.next/*', 'node_modules/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off'
    }
  },
  coreConfig
];
