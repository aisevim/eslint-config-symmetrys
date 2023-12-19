import { createConfig, interopDefault } from '../utils.js'

export async function securityConfig({ options = {} }) {
  const pluginSecurity = await interopDefault(import('eslint-plugin-security'))

  return createConfig(options, {
    name: 'main:security',
    plugins: {
      security: pluginSecurity,
    },
    rules: {
      'security/detect-bidi-characters': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-new-buffer': 'error',
    },
  })
}
