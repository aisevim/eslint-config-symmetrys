import { GLOB_VUE } from '../globs.js'
import { createConfig, interopDefault } from '../utils.js'

export async function vueA11yConfig({ options = {} }) {
  const pluginVueA11y = await interopDefault(import('eslint-plugin-vuejs-accessibility'))

  return [
    {
      plugins: {
        'vue-a11y': pluginVueA11y,
      },
    },
    createConfig(options, {
      files: [GLOB_VUE],
      rules: {
        'vue-a11y/alt-text': 'error',
        'vue-a11y/anchor-has-content': 'error',
        'vue-a11y/aria-props': 'error',
        'vue-a11y/aria-role': ['error', { ignoreNonDOM: true }],
        'vue-a11y/aria-unsupported-elements': 'error',
        'vue-a11y/form-control-has-label': 'error',
        'vue-a11y/iframe-has-title': 'error',
        'vue-a11y/label-has-for': 'error',
        'vue-a11y/media-has-caption': [
          'error',
          {
            audio: ['Audio'],
            video: ['Video'],
            track: ['Track'],
          },
        ],
        'vue-a11y/mouse-events-have-key-events': 'error',
        'vue-a11y/no-access-key': 'error',
        'vue-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
        'vue-a11y/no-distracting-elements': [
          'error',
          {
            elements: ['marquee', 'blink'],
          },
        ],
        'vue-a11y/no-redundant-roles': 'error',
        'vue-a11y/no-static-element-interactions': 'error',
        'vue-a11y/role-has-required-aria-props': 'error',
        'vue-a11y/tabindex-no-positive': 'error',
      },
    }),
  ]
}
