import { isPackageExists } from 'local-pkg'
import _assign from 'lodash.assign'
import _mergewith from 'lodash.mergewith'

import { GLOB_VUE } from './globs.js'

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

  const erasedConfig = _assign({}, config, erase)
  const mergedConfig = _mergewith({}, erasedConfig, merge, (objValue, srcValue) => {
    if (Array.isArray(objValue)) {
      return objValue.concat(srcValue)
    }
  })

  return mergedConfig
}


export function getGlobFromExtension(extension) {
  switch (extension) {
    case 'vue':
      return GLOB_VUE
  }
}
