import { createElement } from './helpers'

// Import of styles
import '@/styles/index.scss'

// Import of bootstrap
import 'bootstrap'

// javascript imports

import { header } from './components/header'
import { search } from './components/search'
import { dropdown } from './components/dropdowns'

// Creating Element for main tag
const main = createElement({
  name: 'main',
  attrs: [],
  content: '',
})

export const view = document.body.append(header, main)

main.append(search, dropdown)
