import { GLOBS_DEFAULT_IGNORES } from '../globs.js'
import { createConfig } from '../utils.js'

export async function ignoreConfig({ options = {} }) {
  return createConfig(options, {
    ignores: GLOBS_DEFAULT_IGNORES,
  })
}
