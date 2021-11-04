/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable max-len */
import { createDom } from '../helpers'

export const option = []

export function Filter(item) {
  this.item = item
}

Filter.prototype.createFilterElement = function () {
  const filterRow = document.getElementById('filterRow')
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
        'data-search': 'option',
        class: `rounded-start px-2 py-2 bg-primary`,
      }),
      createDom(
        'button',
        {
          type: 'button',
          'data-search': 'close',
          class: `btn close text-white rounded-end bg-primary float-right filter-close`,
          'aria-label': 'close',
        },
        createDom('i', {
          'aria-hidden': 'true',
          'data-search': 'close',
          class: 'far fa-times-circle filter-close',
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
  const filterRow = document.getElementById('filterRow')
  filterRow.append(element)
}

Filter.prototype.closeFilterElement = function (selector) {
  const filterRow = document.getElementById('filterRow')
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
