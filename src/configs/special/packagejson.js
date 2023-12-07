import jsoncPlugin from 'eslint-plugin-jsonc'

export async function specialPackageJson() {
  return {
    files: ['**/package.json'],
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'name',
            'version',
            'publisher',
            'displayName',
            'description',
            'private',
            'license',
            'homepage',
            'funding',
            'author',
            'sponsor',

            'cpu',
            'os',
            'volta',
            'engines',
            'packageManager',

            'bugs',
            'repository',
            'keywords',

            'type',
            'man',
            'bin',
            'main',
            'module',
            'types',
            'typesVersions',
            'exports',
            'files',

            'config',
            'scripts',
            'flat',
            'dependencies',
            'devDependencies',
            'overrides',
            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'resolutions',

            'galleryBanner',
            'icon',
            'preview',
            'pricing',
            'badges',
            'markdown',
            'qna',
            'capabilities',
            'categories',
            'sideEffects',
            'activationEvents',
            'contributes',
            'extensionDependencies',
            'extensionPack',
            'extensionKind',

            'pnpm',
            'husky',
            'lint-staged',
            'prettier',
            'eslintConfig',
            'stylelint',
            'jest',
            'babel',
            'workspaces',
          ],
        },
        {
          pathPattern: '^((?:dev|peer|optional|bundled)?[Dd]ependencies)|resolutions|pnpm.overrides$',
          order: { type: 'asc' },
        },
        {
          pathPattern: '^engines$',
          order: [
            'node',
            'npm',
            'yarn',
            'pnpm',
          ],
        },
      ],
    },
  }
}
