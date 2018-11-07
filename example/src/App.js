import React, { Component } from 'react'

import * as i18n from 'abdi18n'
const { LocaleProvider, Translate, translate, t } = i18n

i18n.config({
  'br': {
    locale: 'pt-BR',
    currency: 'BRL',
    dictionary: {
      button: 'Mudar idioma',
      root: {
        nested: {
          withParams: 'Bagunçando, {name}!'
        }
      }
    }
  },
  'en-US': {
    locale: 'en-US',
    currency: 'USD',
    dictionary: {
      button: 'Change locale',
      root: {
        nested: {
          withParams: 'Heeere\'s {name}!'
        }
      }
    }
  }
})

const Child = ({ name }) => (
  <h2>{ t('root.nested.withParams', { name }) }</h2>
)

const DecoChild = translate(Child)

export default class App extends Component {
  constructor (props) {
    super(props)
    i18n.set('br')
  }

  changeLocale = () => {
    if (i18n.full().locale === 'en-US') {
      i18n.set('br')
    } else {
      i18n.set('en-US')
    }
  }

  render () {
    return (
      <LocaleProvider>
        <DecoChild name="Johnny" />
        <Translate
          render={() => (
            <button onClick={this.changeLocale}>
              { t('button') }
            </button>
          )}
        />
      </LocaleProvider>
    )
  }
}
