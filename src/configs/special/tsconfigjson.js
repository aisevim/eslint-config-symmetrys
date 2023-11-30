import jsoncPlugin from 'eslint-plugin-jsonc'

export function specialTsConfig() {
  return {
    files: ['**/tsconfig.json', '**/tsconfig.*.json'],
    plugins: {
      jsonc: jsoncPlugin,
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
  }
}
