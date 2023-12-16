import parserTs from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'

import { GLOB_VUE } from '../globs.js'
import { configIsEnabled, createConfig } from '../utils.js'

export async function vueConfig({ options = {}, ts }) {
  return [
    {
      plugins: {
        vue: pluginVue,
      },
    },
    createConfig(options, {
      files: [GLOB_VUE],
      processor: pluginVue.processors['.vue'],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          parser: {
            js: 'espree',
            jsx: 'espree',
            cjs: 'espree',
            mjs: 'espree',

            ...(configIsEnabled(ts) ?
              {
                ts: parserTs,
                tsx: parserTs,
                cts: parserTs,
                mts: parserTs,
              } :
              {}),
          },
          extraFileExtensions: ['.vue'],
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...pluginVue.configs['vue3-essential'].rules,
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        ...pluginVue.configs['vue3-recommended'].rules,

        'vue/multi-word-component-names': 'off',
        'vue/require-toggle-inside-transition': 'off',
        'vue/max-attributes-per-line': [
          'error', {
            singleline: {
              max: 2,
            },
            multiline: {
              max: 1,
            },
          },
        ],
        'vue/require-default-prop': 'off',
        'vue/no-lone-template': [
          'error', {
            ignoreAccessible: true,
          },
        ],
        'vue/block-order': [
          'error', {
            order: ['script[setup]', 'script:not([setup])', 'template', 'style'],
          },
        ],
        'vue/block-tag-newline': [
          'error', {
            multiline: 'always',
            singleline: 'always',
            maxEmptyLines: 1,
          },
        ],
        'vue/component-api-style': [
          'error',
          ['script-setup', 'composition'],
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-emits-declaration': 'error',
        'vue/define-macros-order': [
          'error',
          { order: [
            'defineOptions',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ] },
        ],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/html-button-has-type': 'error',
        'vue/html-comment-content-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'always',
          },
        ],
        'vue/html-comment-content-spacing': ['error', 'always'],
        'vue/html-comment-indent': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/no-unused-emit-declarations': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-use-v-else-with-v-for': 'error',
        'vue/no-useless-mustaches': [
          'error', {
            ignoreIncludesComment: true,
            ignoreStringEscape: true,
          },
        ],
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-text': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-true-attribute-shorthand': ['error', 'never'],
        'vue/eqeqeq': 'error',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'vue/no-sparse-arrays': 'error',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'vue/prefer-template': 'error',
      },
    }),
  ]
}
