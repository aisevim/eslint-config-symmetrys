import commentsPlugin from 'eslint-plugin-eslint-comments'

export async function comments() {
  return {
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
