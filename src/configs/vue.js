import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

import { VUE_GLOB } from '../constants.js'
import { getTsConfigOptions } from './typescript.js'

export async function vue({ ts }) {
  const tsConfigFileOptions = getTsConfigOptions(ts?.project)
  const inParserPlugins = ts ? tsParser : 'espree'

  return [
    {
      files: [VUE_GLOB],
      plugins: {
        vue: vuePlugin,
      },
      processor: vuePlugin.processors['.vue'],
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          parser: {
            'js': inParserPlugins,
            'ts': inParserPlugins,
            '<template>': 'espree',
            'vue': vueParser,
          },
          extraFileExtensions: ['.vue'],
          ecmaVersion: 2022,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
          ...tsConfigFileOptions.parserOptions,
        },
      },
      rules: {
        ...vuePlugin.configs['vue3-essential'].rules,
        ...vuePlugin.configs['vue3-strongly-recommended'].rules,
        ...vuePlugin.configs['vue3-recommended'].rules,

        ...tsConfigFileOptions?.rules,
      },
    },
  ]
}
