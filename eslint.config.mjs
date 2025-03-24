import { defineConfig, globalIgnores } from 'eslint/config';
import babel from '@babel/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
  globalIgnores(['**/node_modules', '**/test.js']),
  {
    plugins: {
      '@babel': babel,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: babelParser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        requireConfigFile: false,
      },
    },

    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'only-multiline'],

      'no-multiple-empty-lines': [
        'warn',
        {
          max: 1,
          maxEOF: 0,
        },
      ],

      'eol-last': ['error', 'always'],

      'space-before-function-paren': [
        'error',
        {
          named: 'never',
        },
      ],

      'prettier/prettier': ['error'],
    },
  },
]);
