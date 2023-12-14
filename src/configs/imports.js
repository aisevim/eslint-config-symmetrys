import importsPlugin from 'eslint-plugin-i'

export async function imports() {
  return {
    plugins: {
      import: importsPlugin,
    },
    rules: {
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': [
        'error', {
          noUselessIndex: false,
        },
      ],
      'import/consistent-type-specifier-style': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
    },
  }
}
