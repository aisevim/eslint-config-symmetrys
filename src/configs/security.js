import pluginSecurity from 'eslint-plugin-security'

import { createConfig } from '../utils.js'

export async function securityConfig({ options = {} }) {
  return createConfig(options, {
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
