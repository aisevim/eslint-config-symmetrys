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
      name: 'Typescript type information activated',
      include: ['fixtures/ts-type-information/**/*.{test,spec}.{ts,js,tsx}'],
      environment: 'node',
    },
  },
  {
    test: {
      name: 'Lint Not Enabled on config when false or nil',
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
