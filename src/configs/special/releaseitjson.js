import jsoncPlugin from 'eslint-plugin-jsonc'

export async function specialReleaseIt() {
  return {
    files: ['**/.release-it.json'],
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'hooks',
            'git',
            'github',
            'gitlab',
            'npm',
          ],
        },
        {
          pathPattern: '^git|npm|github|gitlab$',
          order: { type: 'asc' },
        },
      ],
      'jsonc/sort-array-values': [
        'error',
        {
          pathPattern: '^hooks$',
          order: [
            'before:init',
            'after:my-plugin:bump',
            'after:bump',
            'after:git:release',
            'after:release',
          ],
        },
      ],
    },
  }
}
