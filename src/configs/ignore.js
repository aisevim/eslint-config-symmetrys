import { GLOBS_DEFAULT_IGNORES } from '../globs.js'

export async function ignore() {
  return {
    ignores: GLOBS_DEFAULT_IGNORES,
  }
}
