import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { globalIgnores } from 'eslint/config';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  globalIgnores(['dist/*']),
  {
    plugins: {
      '@stylistic': stylistic,
    },
    // Global settings and environments
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        // Node globals
        process: 'readonly',
        module: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },

    // Use recommended configurations
    rules: {
      // Core ESLint rules
      ...stylistic.configs.recommended.rules,

      // Line Length
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreRegExpLiterals: true,
          ignorePattern: 'className=["\']([\\s\\S]*?)["\']',
        },
      ],

      // Add JSX-specific text wrapping rules
      '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-wrap-multilines': [
        'error', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      // This rule enforces line breaks within JSX text
      '@stylistic/jsx-one-expression-per-line': 'error',

      // Rules that help with automatic line breaks
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/object-curly-newline': [
        'error', {
          multiline: true,
          consistent: true,
        },
      ],
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

      // Stylistic rules
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/key-spacing': [
        'error',
        { beforeColon: false, afterColon: true },
      ],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',

      // Best practice JS rules
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-constant-condition': 'error',
      'no-unreachable': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-implicit-coercion': 'error',
      'curly': ['error', 'all'],

      // Enforce arrow functions
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': 'error',

      // Disallow function declarations
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead of function declarations',
        },
      ],
    },
  },
];
