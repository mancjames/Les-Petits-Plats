import { createElement, singleContainer, singleRow } from '../helpers'

import headerLogo from '../../../images/logo.svg'

export const header = createElement({
  name: 'header',
  attrs: [],
  content: '',
})

const headerContainer = createElement(singleContainer)

const headerRow = createElement(singleRow)

const headerCol = createElement({
  name: 'div',
  attrs: [
    'col',
    'd-flex',
    'justify-content-center',
    'align-items-center',
    'flex-column',
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

header.appendChild(headerContainer)
headerContainer.appendChild(headerRow)
headerRow.appendChild(headerCol)
headerCol.append(headerImg, headerText)
