import { isPackageExists } from 'local-pkg'

export function moduleExists(importPath) {
  try {
    const isExist = isPackageExists(importPath)

    return !!isExist
  } catch (e) {
    return false
  }
}

export async function toFlatConfigs(configs) {
  const resolvedConfigs = await Promise.all(configs)
  return resolvedConfigs.flat(Infinity)
}
