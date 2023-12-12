import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      name: 'default - default-format - vue-ts - vue-ts-format',
      include: ['tests/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Packages Auto Detected',
      include: ['fixtures/auto-detect-packages/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Typescript type information activated',
      include: ['fixtures/ts-type-information/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
])
