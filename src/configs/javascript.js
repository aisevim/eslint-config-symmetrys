import globals from 'globals'

import { createConfig } from '../utils.js'

export async function javascriptConfig({ options = {} }) {
  return createConfig(options, {
    name: 'main:javascript',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'array-callback-return': 'error',
      'constructor-super': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      // 'no-duplicate-imports': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': ['error', { allowEmptyCase: true }],
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      // no-inner-declarations: 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-new-symbol': 'error',
      'no-obj-calls': 'error',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-setter-return': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-private-class-members': 'error',
      'no-unused-vars': [
        'error', {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      'no-use-before-define': ['error', { functions: false, classes: false, variables: true, allowNamedExports: true }],
      'no-useless-backreference': 'error',
      'use-isnan': 'error',
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'accessor-pairs': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      // 'grouped-accessor-pairs': 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-delete-var': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-lone-blocks': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      // 'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-properties': [
        'error',
        { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
        { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
        { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
        { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
        { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
      ],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      // 'no-unused-expressions': ['error', {
      // 	allowShortCircuit: true,
      // 	allowTaggedTemplates: true,
      // 	allowTernary: true,
      // }],
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
          ignoreConstructors: false,
        },
      ],
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': [
        'error', {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'symbol-description': 'error',
      'vars-on-top': 'error',
      'yoda': ['error', 'never'],
    },
  })
}
