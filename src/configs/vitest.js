import { GLOBS_TESTS } from '../globs.js'
import { createConfig, interopDefault } from '../utils.js'

export async function vitestConfig({ options = {} }) {
  const [pluginVitest, pluginNoOnlyTests] = await Promise.all([
    interopDefault(import('eslint-plugin-vitest')),
    interopDefault(import('eslint-plugin-no-only-tests')),
  ])

  return createConfig(options, {
    files: [GLOBS_TESTS],
    plugins: {
      'vitest': pluginVitest,
      'no-only-tests': pluginNoOnlyTests,
    },
    languageOptions: {
      globals: {
        ...pluginVitest.environments.env.globals,
      },
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      'vitest/consistent-test-it': 'error',
      'vitest/no-done-callback': 'error',
      'vitest/no-duplicate-hooks': 'error',
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
      'vitest/valid-describe-callback': 'error',

      'no-only-tests/no-only-tests': 'error',
    },
  })
}
