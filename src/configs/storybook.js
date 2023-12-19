import { GLOBS_STORIES, GLOB_STORYBOOK_MAINFILE } from '../globs.js'
import { createConfig, interopDefault } from '../utils.js'

export async function storybookConfig({ options = {} }) {
  const pluginStorybook = await interopDefault(import('eslint-plugin-storybook'))

  return [
    {
      name: 'setup:storybook',
      plugins: {
        storybook: pluginStorybook,
      },
    },
    {
      name: 'main:storybook-mainfile',
      files: [GLOB_STORYBOOK_MAINFILE],
      rules: {
        'storybook/no-uninstalled-addons': 'error',
      },
    },
    createConfig(options, {
      name: 'main:storybook-stories',
      files: GLOBS_STORIES,
      rules: {
        'import/no-anonymous-default-export': 'off',
        'storybook/await-interactions': 'error',
        'storybook/context-in-play-function': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'error',
        'storybook/no-redundant-story-name': 'error',
        'storybook/prefer-pascal-case': 'error',
        'storybook/story-exports': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',
      },
    }),
  ]
}
