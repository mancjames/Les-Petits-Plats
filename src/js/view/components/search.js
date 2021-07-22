/* eslint-disable max-len */
import { createElement, singleContainer, singleRow } from '../helpers'

export const search = createElement(singleContainer)

const searchRow = createElement(singleRow)

const searchColumn = createElement({
  name: 'div',
  attrs: ['col-12'],
  content: '',
})

const searchInput = createElement({
  name: 'form',
  attrs: ['d-flex', 'btn-group'],
  content: `
    <input class="form-control rounded-start" 
        type="search" 
        placeholder="Search an ingredient, device, utensil or recipe" 
        aria-label="Search">
    <button class="btn btn-light rounded-end" type="submit">
        <i class="fas fa-search"></i>
    </button>
    `,
})

search.appendChild(searchRow)
searchRow.appendChild(searchColumn)
searchColumn.appendChild(searchInput)
