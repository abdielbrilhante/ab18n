import { on, publish } from './events'
import * as transform from './transform'

let availableLocales = {}

let data = {
  locale: '',
  currency: '',
  dictionary: {},
}

export function config(locales) {
  availableLocales = { ...locales }
  publish('onConfig')
}

export function set(iso) {
  const localeData = availableLocales[iso]

  if (localeData) {
    data = { ...localeData }
    publish('onLocaleChange', data)
  }

  return data
}

export function get() {
  return data
}

const withConfig = fn => (...args) => fn(get(), ...args)

export const t = withConfig(transform.t)
export const c = withConfig(transform.c)
export const n = withConfig(transform.n)

export const onLocaleChange = fn => on('onLocaleChange', fn)
