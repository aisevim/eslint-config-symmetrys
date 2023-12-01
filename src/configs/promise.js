import promisePlugin from 'eslint-plugin-promise'

import { JS_GLOB, TS_GLOB } from '../constants.js'

export async function promise({ ts }) {
  const files = [JS_GLOB]

  if (ts) {
    files.push(TS_GLOB)
  }

  return {
    files,
    plugins: {
      promise: promisePlugin,
    },
    rules: {
      'promise/no-callback-in-promise': 'error',
      'promise/no-multiple-resolved': 'error',
      'promise/no-nesting': 'error',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/no-return-wrap': 'error',
      'promise/prefer-await-to-then': 'error',
      'promise/valid-params': 'error',
    },
  }
}
