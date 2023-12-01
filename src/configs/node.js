import nodePlugin from 'eslint-plugin-n'

import { JS_GLOB, TS_GLOB } from '../constants.js'

export async function node({ ts }) {
  const files = [JS_GLOB]

  if (ts) {
    files.push(TS_GLOB)
  }

  return {
    files,
    plugins: {
      node: nodePlugin,
    },
    rules: {
      'node/handle-callback-err': ['error', '^(err|error)$'],
      'node/no-deprecated-api': 'error',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/prefer-promises/fs': 'error',
      'node/process-exit-as-throw': 'error',
    },
  }
}
