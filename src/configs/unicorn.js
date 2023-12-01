import unicornPlugin from 'eslint-plugin-unicorn'

import { JS_GLOB, TS_GLOB } from '../constants.js'

export async function unicorn({ ts }) {
  const files = [JS_GLOB]

  if (ts) {
    files.push(TS_GLOB)
  }

  return {
    files: [JS_GLOB],
    plugins: {
      unicorn: unicornPlugin,
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
  }
}
