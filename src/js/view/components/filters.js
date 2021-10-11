/* eslint-disable max-len */
/* eslint-disable func-names */
import { createDom } from '../helpers'

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
        class: 'rounded-start px-2 py-2 bg-secondary',
      }),
      createDom(
        'button',
        {
          type: 'button',
          class: 'btn close text-white rounded-end bg-secondary float-right',
          'aria-label': 'close',
        },
        createDom('i', {
          'aria-hidden': 'true',
          class: 'far fa-times-circle',
        })
      )
    )
  )
  this.appendFilterElement(filterElement)
  return filterElement
}

Filter.prototype.appendFilterElement = function (element) {
  const filterRow = document.getElementById('filterRow')
  filterRow.append(element)
}
