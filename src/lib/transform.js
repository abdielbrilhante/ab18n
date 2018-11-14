function getPhrase (config, path = '', count) {
  const keys = path.split('.')

  let node = config.dictionary
  try {
    for (let i = 0; i < keys.length; i++) {
      node = node[keys[i]]
    }

    if (Array.isArray(node)) {
      return node[Math.min(count || 0, 2)]
    } else {
      return node
    }
  } catch (e) {
    console.error(`[i18n] ${path} not found`)
    return path
  }
}

export function t (config, path, params = {}) {
  let phrase = getPhrase(config, path, params.count)

  const keys = Object.keys(params)
  for (let i = 0; i < keys.length; i++) {
    const regex = new RegExp(`{${keys[i]}}`, 'g')
    phrase = phrase.replace(regex, params[keys[i]])
  }

  return phrase
}

export function c (config, value = 0) {
  const { locale, currency } = config
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
  })
}

export function n (config, value = '') {
  const digits = value.replace(/[^0-9]+/g, '')
  const cutoff = digits.length - 2
  return parseFloat(`${digits.slice(0, cutoff)}.${digits.slice(cutoff)}`)
}
