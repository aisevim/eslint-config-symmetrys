import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

import { VUE_GLOB } from '../constants.js'
import { renameRules } from '../utils.js'
import { getTsConfigOptions } from './typescript.js'


export async function vue({ options }) {
  const tsConfigFileOptions = getTsConfigOptions(options?.project)

  return {
    files: [VUE_GLOB],
    plugins: {
      vue: vuePlugin,
      ts: tsPlugin,
    },
    processor: vuePlugin.processors['.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        ...tsConfigFileOptions?.parserOptions,
      },
    },
    rules: {
      ...vuePlugin.configs['vue3-essential'].rules,
      ...vuePlugin.configs['vue3-strongly-recommended'].rules,
      ...vuePlugin.configs['vue3-recommended'].rules,

      ...renameRules(
        tsPlugin.configs['eslint-recommended'].rules,
        '@typescript-eslint/',
        'ts/',
      ),
      ...renameRules(
        tsConfigFileOptions?.rules,
        '@typescript-eslint/',
        'ts/',
      ),
    },
  }
}
