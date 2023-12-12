import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { globSync } from 'glob'

import { TS_GLOB } from '../constants.js'

const dirname = process.cwd()

const tsConfigExist = !!globSync(
  ['tsconfig.json', 'tsconfig.*.json'],
  { ignore: ['node_modules/**', '**/node_modules/**'], dot: true },
)?.length

export async function typescript({ options, extensions }) {
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
      rules: typescriptPlugin.configs['strict-type-checked'].rules,
    }
  } else {
    typesInformationOptions = {
      rules: typescriptPlugin.configs.strict.rules,
    }
  }

  return {
    files: [TS_GLOB],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        extraFileExtensions: extensions,
        sourceType: 'module',
        ...typesInformationOptions?.parserOptions,
      },
    },
    rules: {
      ...typescriptPlugin.configs['eslint-recommended'].rules,
      ...typesInformationOptions?.rules,
    },
  }
}
