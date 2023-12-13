import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { globSync } from 'glob'

import { DEFAULT_IGNORES, TS_GLOB } from '../constants.js'
import { renameRules } from '../utils.js'

export function getTsConfigOptions(project) {
  const dirname = process.cwd()
  const tsConfigExist = !!globSync(
    ['tsconfig.json', 'tsconfig.*.json'],
    { ignore: DEFAULT_IGNORES, dot: true },
  )?.length
  const hasProject = project ?? tsConfigExist

  return hasProject ?
    {
      parserOptions: {
        project: hasProject,
        tsConfigRootDir: dirname,
      },
      rules: typescriptPlugin.configs['strict-type-checked'].rules,
    } :
    {
      rules: typescriptPlugin.configs.strict.rules,
    }
}

export async function typescript({ options }) {
  const tsConfigFileOptions = getTsConfigOptions(options?.project)

  return {
    files: [TS_GLOB],
    plugins: {
      ts: typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
        ...tsConfigFileOptions?.parserOptions,
      },
    },
    rules: {
      ...renameRules(
        typescriptPlugin.configs['eslint-recommended'].rules,
        '@typescript-eslint/',
        'ts/',
      ),
      ...renameRules(
        tsConfigFileOptions.rules,
        '@typescript-eslint/',
        'ts/',
      ),
    },
  }
}
