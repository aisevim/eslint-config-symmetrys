import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import { globSync } from 'glob'
import vueParser from 'vue-eslint-parser'

import { VUE_GLOB } from '../constants.js'
import { renameRules } from '../utils.js'

const dirname = process.cwd()

const tsConfigExist = !!globSync(
  ['tsconfig.json', 'tsconfig.*.json'],
  { ignore: ['node_modules/**', '**/node_modules/**'], dot: true },
)?.length

export async function vue({ options }) {
  const {
    project = tsConfigExist,
  } = options
  let typesInformationOptions = {}

  if (project) {
    typesInformationOptions = {
      parserOptions: {
        project,
        tsConfigRootDir: dirname,
      },
      rules: tsPlugin.configs['strict-type-checked'].rules,
    }
  } else {
    typesInformationOptions = {
      rules: tsPlugin.configs.strict.rules,
    }
  }

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
        ...typesInformationOptions?.parserOptions,
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

      ...renameRules(
        tsPlugin.configs['eslint-recommended'].rules,
        '@typescript-eslint/',
        'ts/',
      ),
      ...renameRules(
        typesInformationOptions?.rules,
        '@typescript-eslint/',
        'ts/',
      ),
    },
  }
}
