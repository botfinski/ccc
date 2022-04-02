module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    indent: ['warn', 2],
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': ['error', 'unix'],
    "quotes": [2, "single", { "avoidEscape": true }],
    'object-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'no-multi-spaces': ['error'],
    'prettier/prettier': [
      0,
      { singleQuote: true, semi: true, useTabs: false, trailingComma: 'none', arrowParens: 'avoid' }
    ]
  }
};
