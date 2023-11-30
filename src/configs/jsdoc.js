import jsDocPlugin from 'eslint-plugin-jsdoc'

import { JS_GLOB } from '../constants.js'

export async function jsDoc() {
  return {
    files: [JS_GLOB],
    plugins: {
      jsdoc: jsDocPlugin,
    },
    rules: {
      'jsdoc/check-access': 'warn',
      'jsdoc/check-param-names': 'warn',
      'jsdoc/check-property-names': 'warn',
      'jsdoc/check-types': 'warn',
      'jsdoc/empty-tags': 'warn',
      'jsdoc/implements-on-classes': 'warn',
      'jsdoc/no-defaults': 'warn',
      'jsdoc/no-multi-asterisks': 'warn',
      'jsdoc/require-param-name': 'warn',
      'jsdoc/require-property': 'warn',
      'jsdoc/require-property-description': 'warn',
      'jsdoc/require-property-name': 'warn',
      'jsdoc/require-returns-check': 'warn',
      'jsdoc/require-returns-description': 'warn',
      'jsdoc/require-yields-check': 'warn',
      'jsdoc/check-alignment': 'warn',
      'jsdoc/multiline-blocks': 'warn',
    },
  }
}
