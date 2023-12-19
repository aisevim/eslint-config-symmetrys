import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      name: 'Root Tests',
      include: ['tests/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    root: './fixutres/auto-detect-packages',
    test: {
      name: 'Packages Auto Detected',
      include: ['fixtures/auto-detect-packages/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    root: './fixutres/ts-type-information-auto',
    test: {
      name: 'Typescript type information auto activated',
      include: ['fixtures/ts-type-information-auto/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    root: `./fixtures/setting-add-config`,
    test: {
      name: 'Setting addConfig',
      environment: 'node',
    },
  },
  {
    root: `./fixtures/disable-configs`,
    test: {
      name: 'Disabled all configs',
      environment: 'node',
    },
  },
  {
    root: `./fixtures/options-merge`,
    test: {
      name: 'Options Merge',
      environment: 'node',
    },
  },
  {
    root: `./fixtures/options-erase`,
    test: {
      name: 'Options Erase',
      environment: 'node',
    },
  },
])
