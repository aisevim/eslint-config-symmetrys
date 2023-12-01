import commentsPlugin from 'eslint-plugin-eslint-comments'

import { JS_GLOB, TS_GLOB } from '../constants.js'

export async function comments({ ts }) {
  const files = [JS_GLOB]

  if (ts) {
    files.push(TS_GLOB)
  }

  return {
    files,
    plugins: {
      comments: commentsPlugin,
    },
    rules: {
      'comments/no-duplicate-disable': 'error',
      'comments/no-unlimited-disable': 'error',
      'comments/no-unused-disable': 'error',
      'comments/no-unused-enable': 'error',
      'comments/no-restricted-disable': 'error',
    },
  }
}
