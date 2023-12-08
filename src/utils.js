import { resolve } from 'import-meta-resolve'

export function moduleExists(importPath) {
  try {
    const isExist = resolve(importPath, import.meta.url)

    return !!isExist
  } catch (e) {
    return false
  }
}

export async function toFlatConfigs(configs) {
  const resolvedConfigs = await Promise.all(configs)
  return resolvedConfigs.flat(Infinity)
}
