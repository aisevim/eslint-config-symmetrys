import { GLOBS_TS_CONFIGS, GLOB_PACKAGE_JSON, GLOB_RELEASE_IT_JSON } from '../globs.js'
import { interopDefault } from '../utils.js'

export async function specificConfig() {
  const [pluginJSONC, parserJSONC] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser')),
  ])

  return [
    {
      plugins: {
        jsonc: pluginJSONC,
      },
    },
    {
      files: [GLOB_PACKAGE_JSON],
      languageOptions: {
        parser: parserJSONC,
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
    },
    {
      files: [GLOB_RELEASE_IT_JSON],
      languageOptions: {
        parser: parserJSONC,
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
    },
    {
      files: GLOBS_TS_CONFIGS,
      languageOptions: {
        parser: parserJSONC,
      },
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'extends',
              'compilerOptions',
              'references',
              'files',
              'include',
              'exclude',
            ],
          },
          {
            pathPattern: '^compilerOptions$',
            order: [
            // Type Checking
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'useUnknownInCatchVariables',

              // Modules
              'allowArbitraryExtensions',
              'allowImportingTsExtensions',
              'allowUmdGlobalAccess',
              'baseUrl',
              'customConditions',
              'module',
              'moduleResolution',
              'moduleSuffixes',
              'noResolve',
              'paths',
              'resolveJsonModule',
              'resolvePackageJsonExports',
              'resolvePackageJsonImports',
              'rootDir',
              'rootDirs',
              'typeRoots',
              'types',

              // Emit
              'declaration',
              'declarationDir',
              'declarationMap',
              'downlevelIteration',
              'emitBOM',
              'emitDeclarationOnly',
              'importHelpers',
              'importsNotUsedAsValues',
              'inlineSourceMap',
              'inlineSources',
              'mapRoot',
              'newLine',
              'noEmit',
              'noEmitHelpers',
              'noEmitOnError',
              'outDir',
              'outFile',
              'preserveConstEnums',
              'preserveValueImports',
              'removeComments',
              'sourceMap',
              'sourceRoot',
              'stripInternal',

              // JavaScript Support
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',

              // Editor Support
              'disableSizeLimit',
              'plugins',

              // Interop Constraints
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'forceConsistentCasingInFileNames',
              'isolatedModules',
              'preserveSymlinks',
              'verbatimModuleSyntax',

              // Backwards Compatibility
              'charset',
              'keyofStringsOnly',
              'noImplicitUseStrict',
              'noStrictGenericChecks',
              'out',
              'suppressExcessPropertyErrors',
              'suppressImplicitAnyIndexErrors',

              // Language and Environment
              'emitDecoratorMetadata',
              'experimentalDecorators',
              'jsx',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'lib',
              'moduleDetection',
              'noLib',
              'reactNamespace',
              'target',
              'useDefineForClassFields',

              // Compiler Diagnostics
              'diagnostics',
              'explainFiles',
              'extendedDiagnostics',
              'generateCpuProfile',
              'listEmittedFiles',
              'listFiles',
              'traceResolution',

              // Projects
              'composite',
              'disableReferencedProjectLoad',
              'disableSolutionSearching',
              'disableSourceOfProjectReferenceRedirect',
              'incremental',
              'tsBuildInfoFile',

              // Output Formatting
              'noErrorTruncation',
              'preserveWatchOutput',
              'pretty',

              // Completeness
              'skipDefaultLibCheck',
              'skipLibCheck',
            ],
          },
          {
            pathPattern: '^watchOptions$',
            order: [
              'watchFile',
              'watchDirectory',
              'fallbackPolling',
              'synchronousWatchDirectory',
              'excludeDirectories',
              'excludeFiles',
            ],
          },
          {
            pathPattern: '^typeAcquisition$',
            order: [
              'enable',
              'include',
              'exclude',
              'disableFilenameBasedTypeAcquisition',
            ],
          },
        ],
      },
    },
  ]
}
