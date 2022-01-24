module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'max-len': ['error', 120],
    'semi': 'error',
    'comma-spacing': 'error',
    'object-curly-spacing': 'error',
    'no-unused-vars': ['warn', {args: 'none', ignoreRestSiblings: true}],
    'no-multi-spaces': 'error',
    'quotes': ['error', 'single'],
    'eol-last': 'error',
    'no-warning-comments': 'warn',
    'no-console': 'warn',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-closing-bracket-location': [
      'error',
      {
        'nonEmpty': 'after-props',
        'selfClosing': 'line-aligned'
      }
    ],
    'react/jsx-sort-props': ['error', {'callbacksLast': true, 'shorthandFirst': true, 'reservedFirst': true}],
    'react/jsx-max-props-per-line': ['error', {'when': 'multiline'}],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2, {'indentLogicalExpressions': true}],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': ['error', {'newlines-between': 'always'}],
    'import/newline-after-import': ['error', {'count': 2}], 
  },
  overrides: [
    {
      'files': ['**/*.ts?(x)'],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': ['error', {}],
        '@typescript-eslint/no-unused-vars': ['warn', {args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
      },
    },
  ],
};
