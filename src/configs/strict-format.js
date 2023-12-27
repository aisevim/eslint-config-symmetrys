export async function strictFormatConfig({ options = {} }) {
  const {
    scriptFiles = [],
    jsonFiles = [],
  } = options
  const configs = []

  if (scriptFiles.length) {
    configs.push({
      name: 'main:strict-format:js',
      files: scriptFiles,
      rules: {
        'stylistic/array-bracket-newline': ['error', { minItems: 2 }],
        'stylistic/array-bracket-spacing': ['error', 'never'],
        'stylistic/array-element-newline': ['error', 'always'],
        'stylistic/object-curly-newline': ['error', 'always'],
        'stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      },
    })
  }

  if (jsonFiles.length) {
    configs.push({
      name: 'main:strict-format:json',
      files: jsonFiles,
      rules: {
        'jsonc/array-bracket-newline': ['error', { minItems: 2 }],
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/array-element-newline': ['error', 'always'],
        'jsonc/object-curly-newline': ['error', 'always'],
        'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      },
    })
  }

  return configs
}
