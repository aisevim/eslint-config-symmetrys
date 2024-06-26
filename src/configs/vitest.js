import { GLOBS_TESTS } from '../globs.js'
import { createConfig, interopDefault } from '../utils.js'

export async function vitestConfig({ options = {} }) {
  const [pluginVitest, pluginNoOnlyTests] = await Promise.all([
    interopDefault(import('eslint-plugin-vitest')),
    interopDefault(import('eslint-plugin-no-only-tests')),
  ])

  return [
    {
      name: 'setup:vitest',
      plugins: {
        'vitest': pluginVitest,
        'no-only-tests': pluginNoOnlyTests,
      },
    },
    createConfig(options, {
      name: 'main:vitest',
      files: [GLOBS_TESTS],
      languageOptions: {
        globals: {
          ...pluginVitest.environments.env.globals,
        },
      },
      rules: {
        ...pluginVitest.configs.recommended.rules,
        'vitest/expect-expect': 'error',
        'vitest/consistent-test-it': 'error',
        'vitest/no-commented-out-tests': 'error',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-identical-title': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/no-standalone-expect': {
          additionalTestBlockFunctions: ['test'],
        },
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-comparison-matcher': 'error',
        'vitest/prefer-expect-resolves': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-hooks-on-top': 'error',
        'vitest/prefer-to-be-falsy': 'error',
        'vitest/prefer-to-be-object': 'error',
        'vitest/prefer-to-be-truthy': 'error',
        'vitest/prefer-to-contain': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
        'vitest/valid-describe-callback': 'error',

        'no-only-tests/no-only-tests': 'error',
      },
    }),
  ]
}
