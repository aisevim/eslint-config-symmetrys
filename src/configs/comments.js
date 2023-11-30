import commentsPlugin from 'eslint-plugin-eslint-comments'

import { JS_GLOB } from '../constants.js'

export async function comments() {
  return {
    files: [JS_GLOB],
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
