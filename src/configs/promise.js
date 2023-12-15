import pluginPromise from 'eslint-plugin-promise'

export async function promise() {
  return {
    plugins: {
      promise: pluginPromise,
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
