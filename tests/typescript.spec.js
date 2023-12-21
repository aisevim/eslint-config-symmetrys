import { describe, it } from 'vitest'

import symmetrys from '../src/index.js'

describe.concurrent('settings `tsproject`', () => {
  describe('Configure Type Information for Typescript Config', () => {
    it.concurrent('Should create in `parserOptions` 2 properties, the first should be `project` equal to `tsproject` and the second is `tsConfigRootDir`', async ({ expect }) => {
      const customisedConfig = await symmetrys({
        settings: {
          tsproject: './tsconfig.web.json',
        },
      })
      const tsMainConfig = customisedConfig.find(config => config.name === 'main:typescript')

      expect(tsMainConfig.languageOptions.parserOptions).toHaveProperty('project', './tsconfig.web.json')
      expect(tsMainConfig.languageOptions.parserOptions).toHaveProperty('tsConfigRootDir', process.cwd())
    })

    it.concurrent('Should add Type Information rules, so check if 1 of these rules exist in Typescript Config', async ({ expect }) => {
      const customisedConfig = await symmetrys({
        settings: {
          tsproject: './tsconfig.web.json',
        },
      })
      const tsMainConfig = customisedConfig.find(config => config.name === 'main:typescript')

      expect(tsMainConfig.rules).toHaveProperty('ts/await-thenable')
    })
  })
})

describe.concurrent('Disable auto addition of Type Information rules in Typescript Config', () => {
  it.concurrent('Should not add Type Information rules in Typescript Config', async ({ expect }) => {
    const customisedConfig = await symmetrys({
      ts: {
        merge: {
          languageOptions: {
            parserOptions: {
              project: './tsconfig.web.json',
              tsConfigRootDir: process.cwd(),
            },
          },
        },
      },
    })
    const tsMainConfig = customisedConfig.find(config => config.name === 'main:typescript')

    expect(tsMainConfig.rules).not.toHaveProperty('ts/await-thenable')
  })

  it.concurrent('Should not add Type Information rules in Typescript Config, ignore `settings.tsproject`', async ({ expect }) => {
    const customisedConfig = await symmetrys({
      ts: {
        merge: {
          languageOptions: {
            parserOptions: {
              project: './tsconfig.web.json',
              tsConfigRootDir: process.cwd(),
            },
          },
        },
      },
      settings: {
        tsproject: './tsconfig.app.json',
      },
    })
    const tsMainConfig = customisedConfig.find(config => config.name === 'main:typescript')

    expect(tsMainConfig.languageOptions.parserOptions).toHaveProperty('project', './tsconfig.web.json')
    expect(tsMainConfig.rules).not.toHaveProperty('ts/await-thenable')
  })
})
