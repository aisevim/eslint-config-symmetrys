export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_JSX_TSX = '**/*.?([cm])[jt]s?(x)'
export const GLOB_JSX_TSX_EXT = '?([cm])[jt]s?(x)'

export const GLOB_JSON = '**/*.json'
export const GLOB_JSON5 = '**/*.json5'
export const GLOB_JSONC = '**/*.jsonc'

export const GLOB_YAML = '**/*.y?(a)ml'
export const GLOB_VUE = '**/*.vue'
export const GLOB_MARKDOWN = '**/*.{md,mkdn,mdown,markdown}'
export const GLOB_PACKAGE_JSON = '**/package.json'
export const GLOB_RELEASE_IT_JSON = '**/.release-it.json'
export const GLOB_STORYBOOK_MAINFILE = `**/.storybook/main.${ GLOB_JSX_TSX_EXT }`

export const GLOB_LANGS_IN_MARKDOWN = `${ GLOB_MARKDOWN }/${ GLOB_JSX_TSX }`

export const GLOBS_TS_CONFIGS_ROOT = ['tsconfig.json', 'tsconfig.*.json']
export const GLOBS_TS_CONFIGS = GLOBS_TS_CONFIGS_ROOT.map(glob => `**/${ glob }`)

export const GLOBS_STORIES = [
  `**/*.stories.${ GLOB_JSX_TSX_EXT }`,
  `**/*.story.${ GLOB_JSX_TSX_EXT }`,
]

export const GLOBS_TESTS = [
  `**/__tests__/**/*.${ GLOB_JSX_TSX_EXT }`,
  `**/*.spec.${ GLOB_JSX_TSX_EXT }`,
  `**/*.test.${ GLOB_JSX_TSX_EXT }`,
]

export const GLOBS_DEFAULT_IGNORES = [
  '.git/',
  '.vscode/',
  '.idea/',

  '**/dist/',
  '**/build/',

  '**/__snapshots__',
  '**/.cache',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/node_modules/',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/.next/',
  '**/.nuxt/',
  'vendor/',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
]
