/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable func-names */
import { createDom } from '../helpers'
// import { RecipeCard } from './recipeCard'

const filterRow = document.getElementById('filterRow')
export const option = []

export function Filter(item) {
  this.item = item
}

Filter.prototype.createFilterElement = function () {
  const filterElement = createDom(
    'div',
    {
      class: 'col-2 mb-2',
    },
    createDom(
      'div',
      {
        class: 'rounded text-white align-middle text-nowrap btn-group',
      },
      createDom('span', `${this.item}`, {
        class: `rounded-start px-2 py-2 bg-primary`,
      }),
      createDom(
        'button',
        {
          type: 'button',
          class: `btn close text-white rounded-end bg-primary float-right`,
          'aria-label': 'close',
        },
        createDom('i', {
          'aria-hidden': 'true',
          class: 'far fa-times-circle',
        })
      )
    )
  )
  filterRow.classList.remove('d-none')
  option.push(this.item.toLowerCase())
  this.appendFilterElement(filterElement)
  this.closeFilterElement(filterElement)
  return filterElement
}

Filter.prototype.appendFilterElement = function (element) {
  filterRow.append(element)
}

Filter.prototype.closeFilterElement = function (selector) {
  const close = selector.getElementsByTagName('button')[0]
  const value = this.item.toLowerCase()
  close.addEventListener('click', () => {
    for (let i = 0; i < option.length; i++) {
      if (option[i] === value) {
        option.splice(i, 1)
      }
    }
    close.parentElement.parentElement.remove()
    if (!filterRow.hasChildNodes()) {
      filterRow.classList.add('d-none')
    }
  })
}
