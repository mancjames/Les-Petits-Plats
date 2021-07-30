/* eslint-disable max-len */
import { createElement, singleContainer, singleRow } from '../helpers'

export const filter = createElement(singleContainer)

const filterRow = createElement(singleRow)

const filterCol = createElement({
  name: 'div',
  attrs: ['col'],
  content: '',
})

const filterButton = createElement({
  name: 'div',
  attrs: [
    'rounded',
    'col-1',
    'text-white',
    'align-middle',
    'text-nowrap',
    'btn-group',
  ],
  content: `
  <span class="bg-secondary rounded-start px-2 py-2" id="filterText">Dark Chocolate</span>
    <button type="button" 
        class="btn close text-white rounded-end bg-secondary float-right" 
        aria-label="close"
        id="filterButton">
        <i aria-hidden="true" class="far fa-times-circle"></i>
    </button>
    `,
})

filter.appendChild(filterRow)
filterRow.appendChild(filterCol)
filterCol.append(filterButton)
