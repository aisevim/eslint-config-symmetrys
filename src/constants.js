export const DEFAULT_IGNORES = [
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

export const JS_GLOB = '**/*.?([cm])js'
export const JSX_GLOB = '**/*.?([cm])jsx'

export const TS_GLOB = '**/*.?([cm])ts'
export const TSX_GLOB = '**/*.?([cm])tsx'

export const JSX_TSX_GLOB = '**/*.?([cm])[jt]s?(x)'
export const JSX_TSX_EXT_GLOB = '?([cm])[jt]s?(x)'

export const JSON_GLOB = '**/*.json'
export const JSON5_GLOB = '**/*.json5'
export const JSONC_GLOB = '**/*.jsonc'

export const YAML_GLOB = '**/*.y?(a)ml'
export const VUE_GLOB = '**/*.vue'
export const MARKDOWN_GLOB = '**/*.{md,mkdn,mdown,markdown}'
export const LANGS_IN_MARKDOWN_GLOB = `${ MARKDOWN_GLOB }/${ JSX_TSX_GLOB }`

export const TESTS_GLOB = [
  `**/__tests__/**/*.${ JSX_TSX_EXT_GLOB }`,
  `**/*.spec.${ JSX_TSX_EXT_GLOB }`,
  `**/*.test.${ JSX_TSX_EXT_GLOB }`,
]

export const ROOT_TS_CONFIG_GLOB = ['tsconfig.json', 'tsconfig.*.json']
