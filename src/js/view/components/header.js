import { createElement } from '../functions'

import headerLogo from '../../../images/logo.svg'

export const header = createElement({
  name: 'header',
  attrs: [
    'container',
    'd-flex',
    'justify-content-center',
    'align-items-center',
    'flex-column',
    'my-3',
  ],
  content: '',
})

const headerText = createElement({
  name: 'h2',
  attrs: ['display-6'],
  content: 'Les petit plats',
})

const headerImg = createElement({
  name: 'img',
  attrs: ['d-block'],
  content: '',
})
headerImg.src = headerLogo

header.appendChild(headerImg)
header.appendChild(headerText)
