export const parser = '@babel/eslint-parser';
export const parserOptions = {
  ecmaVersion: 12,
  sourceType: 'module',
  requireConfigFile: false,
};
export const ignorePatterns = ['node_modules', 'test.js'];
export const plugins = ['@babel', 'prettier'];
export const extenders = ['eslint:recommended', 'plugin:prettier/recommended'];
export const root = true;
export const env = {
  es2021: true,
  node: true,
};
export const rules = {
  quotes: ['error', 'single'],
  'comma-dangle': ['error', 'only-multiline'],
  'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
  'eol-last': ['error', 'always'],
  'space-before-function-paren': ['error', { named: 'never' }],
  'prettier/prettier': ['error'],
};
