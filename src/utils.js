import { isPackageExists } from 'local-pkg'
import _assign from 'lodash.assign'
import _mergewith from 'lodash.mergewith'

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

export function renameRules(rules, from, newPrefix) {
  if (!rules) return {}

  return Object.fromEntries(Object.entries(rules)
    .map(([key, value]) => {
      if (key.startsWith(from)) {
        return [newPrefix + key.slice(from.length), value]
      }

      return [key, value]
    }))
}

export function configIsEnabled(configOptions) {
  if (typeof configOptions === 'boolean') {
    return configOptions
  } else if (typeof configOptions === 'object') {
    return !!Object.values(configOptions).length
  }

  return false
}

export function createConfig(options, config) {
  const {
    merge = {},
    erase = {},
  } = options

  const mergedConfig = _mergewith({}, config, merge, customizer)
  const erasedConfig = _assign({}, mergedConfig, erase)

  return erasedConfig
}

function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}
