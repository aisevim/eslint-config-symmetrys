import vitestPlugin from 'eslint-plugin-vitest'

import { TESTS_GLOB } from '../constants.js'

export async function vitest() {
  return {
    files: [TESTS_GLOB],
    plugins: {
      vitest: vitestPlugin,
    },
    languageOptions: {
      globals: {
        ...vitestPlugin.environments.env.globals,
      },
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
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
    },
  }
}
