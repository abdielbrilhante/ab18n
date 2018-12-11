import React, { Component } from 'react'

import * as i18n from 'ab18n'
const { LocaleProvider, Translate, translate, t } = i18n

i18n.config({
  'br': {
    locale: 'pt-BR',
    currency: 'BRL',
    dictionary: {
      button: 'Mudar idioma',
      defaultNotice: 'Aviso',
      root: {
        nested: {
          withParams: 'Bagunçando, {name}!'
        },
        ref: {
          notice: '[defaultNotice] sobre algo'
        }
      }
    }
  },
  'en-US': {
    locale: 'en-US',
    currency: 'USD',
    dictionary: {
      button: 'Change locale',
      defaultNotice: 'Notice',
      root: {
        nested: {
          withParams: 'Heeere\'s {name}!'
        },
        ref: {
          notice: '[defaultNotice] about something'
        }
      }
    }
  }
})

const Child = ({ name }) => (
  <div>
    <h2>{ t('root.nested.withParams', { name }) }</h2>
    <h5>{ t('root.ref.notice') }</h5>
  </div>
)

const DecoChild = translate(Child)

export default class App extends Component {
  constructor (props) {
    super(props)
    i18n.set('br')
  }

  changeLocale = () => {
    if (i18n.get().locale === 'en-US') {
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
