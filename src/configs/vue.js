import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

import { VUE_GLOB } from '../constants.js'

export async function vue() {
  return {
    files: [VUE_GLOB],
    plugins: {
      vue: vuePlugin,
    },
    processor: vuePlugin.processors['.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...vuePlugin.configs['vue3-essential'].rules,
      ...vuePlugin.configs['vue3-strongly-recommended'].rules,
      ...vuePlugin.configs['vue3-recommended'].rules,
    },
  }
}
