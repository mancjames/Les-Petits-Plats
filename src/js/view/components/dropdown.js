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
