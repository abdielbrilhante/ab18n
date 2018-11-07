import * as i18n from './lib/config'
import { LocaleProvider, Translate, translate } from './lib/translate'

const { config, set, full, onLocaleChange, ...transform } = i18n
export { config, set, full, onLocaleChange }

const { t, c, n } = transform
export { t, c, n }

export { LocaleProvider, Translate, translate }
