import React from 'react'
import * as i18n from './config'
import Context from './context'

export const translate = Component => props => (
	<Context.Consumer>
		{ () => <Component {...props} /> }
	</Context.Consumer>
)

export const Translate = ({ render, ...props }) => (
	<Context.Consumer>
		{ () => React.createElement(render, props) }
	</Context.Consumer>
)

export class LocaleProvider extends React.Component {
  constructor() {
    super()
    this.state = { config: i18n.full() }
    i18n.onLocaleChange(config => this.setState({ config }))
  }

  render() {
    const { config } = this.state
    const { children } = this.props
    return (
      <Context.Provider value={config}>
        { children }
      </Context.Provider>
    )
  }
}
