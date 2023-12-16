import pluginUnicorn from 'eslint-plugin-unicorn'

import { createConfig } from '../utils.js'

export async function unicornConfig({ options = {} }) {
  return createConfig(options, {
    plugins: {
      unicorn: pluginUnicorn,
    },
    rules: {
      'unicorn/no-await-expression-member': ['error'],
      'unicorn/no-instanceof-array': ['error'],
      'unicorn/no-unnecessary-await': ['error'],
      'unicorn/prefer-dom-node-append': ['error'],
      'unicorn/prefer-dom-node-dataset': ['error'],
      'unicorn/prefer-dom-node-remove': ['error'],
      'unicorn/prefer-dom-node-text-content': ['error'],
      'unicorn/prefer-export-from': ['error'],
      'unicorn/prefer-keyboard-event-key': ['error'],
      'unicorn/prefer-node-protocol': ['error'],
      'unicorn/throw-new-error': ['error'],
    },
  })
}
