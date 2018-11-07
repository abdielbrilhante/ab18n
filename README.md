# ab18n

> Minimal i18n library for React and JavaScript

[![NPM](https://img.shields.io/npm/v/ab18n.svg)](https://www.npmjs.com/package/ab18n) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add ab18n # or npm install --save ab18n
```

## Run examples

- Run `yarn` or `npm install` inside both the root and `example` folder and link.

- Run lib build in root folder:

  ```bash
  yarn start
  ```

- Run React app inside `./examples`:

  ```bash
  cd examples
  yarn start
  ```

## Basic (non-reactive) usage

You can readily use `ab18n` via the transform functions, `t`, `c` and `n`,
all of which work similarly to other i18n libraries. You need only to provide
`ab18n` with a list of available locales and set the locale:

```javascript
import * as ab18n from 'ab18n'

const { t, c, n } = ab18n

ab18n.config({
  'br': {
    locale: 'pt-BR',
    country: 'br',
    currency: 'BRL',
    dictionary: {
      group: {
        key: 'Valor'
      }
    }
  }
})

ab18n.set('pt-BR')

console.log(t('group.key')) // => 'Valor'
console.log(c(10.2)) // => R$ 10,20
console.log(n('R$ 10,20')) // => 10.2
```

Also available is a function to register a callback for locale changes:

```javascript
ab18n.onLocaleChange(data => {
  // ex.: set moment locale
})
```

## Usage with React

There are a couple of ways to have your React app, well *react* to locale changes.
There is a `LocaleProvider` and a couple of options to connect it to other components down the tree, a HOC and a render prop-based component:

```jsx
import { LocaleProvider, translate, Translate, t } from 'ab18n'

const Child = () => <h1>{ t('term1.term2') }</h1>

// HOC, can be used as a decorator
const DecoratedChild = translate(Child)

const App = () => (
  <LocaleProvider>
    <div>
      <DecoratedChild />
      <Translate render={Child} />
    </div>
  </LocaleProvider>
)

```

Keep in mind that, if your app makes heavy usage of external (API), already translated data,
this reactiveness may not be necessary or even desired, since you'd need to re-request all
of that data.

## License

MIT © [abdielbrilhante](https://github.com/abdielbrilhante)
