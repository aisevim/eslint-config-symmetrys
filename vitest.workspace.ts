import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      name: 'default - format',
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
      name: 'Typescript type information auto activated',
      include: ['fixtures/ts-type-information-auto/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Typescript type information activated with tsproject setting',
      include: ['fixtures/ts-type-information-tsproject-setting/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Typescript type information not allowed when is manually setted',
      include: ['fixtures/ts-type-information-auto-ignore/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Lint Not Enabled on configs when false or nil',
      include: ['fixtures/not-enabled/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Options Merge',
      include: ['fixtures/options-merge/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Options Erase',
      include: ['fixtures/options-erase/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
])
