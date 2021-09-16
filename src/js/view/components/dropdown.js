/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { createDom } from '../helpers'

export function DropdownOptions(data) {
  this.data = data
}

DropdownOptions.prototype.dropdownListItems = function () {
  const listItem = createDom('li', `${this.data}`, { class: 'text-white' })
  return listItem
}

export function dropdownListener(selector) {
  selector.addEventListener(
    'focus',
    (event) => {
      if (selector.parentElement.classList.contains('col-md-2')) {
        selector.parentElement.classList.replace('col-md-2', 'col-md-6')
      } else {
        selector.parentElement.classList.replace('col-md-6', 'col-md-2')
      }
    },
    true
  )
}
