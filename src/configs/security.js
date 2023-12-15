import pluginSecurity from 'eslint-plugin-security'

export async function security() {
  return {
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
  }
}
