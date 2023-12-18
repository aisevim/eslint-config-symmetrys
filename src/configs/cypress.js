import { GLOB_CYPRESS } from '../globs.js'
import { createConfig, interopDefault } from '../utils.js'

export async function cypressConfig({ options = {} }) {
  const pluginCypress = await interopDefault(import('eslint-plugin-cypress'))

  return [
    {
      plugins: {
        cypress: pluginCypress,
      },
    },
    createConfig(options, {
      files: [GLOB_CYPRESS],
      rules: {
        'no-undef': 'off',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/no-async-tests': 'error',
        'cypress/unsafe-to-chain-command': 'error',
        'cypress/assertion-before-screenshot': 'error',
        'cypress/no-pause': 'error',
      },
    }),
  ]
}
