/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable func-names */
import { createDom } from '../helpers'

const filterRow = document.getElementById('filterRow')

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
  this.appendFilterElement(filterElement)
  this.closeFilterElement(filterElement)
  return filterElement
}

Filter.prototype.appendFilterElement = function (element) {
  filterRow.append(element)
}

Filter.prototype.closeFilterElement = function (selector) {
  const close = selector.getElementsByTagName('button')[0]
  close.addEventListener('click', () => {
    close.parentElement.parentElement.remove()
    if (!filterRow.hasChildNodes()) {
      filterRow.classList.add('d-none')
    }
  })
}
