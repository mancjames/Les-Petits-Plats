/* eslint-disable max-len */
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
    'show.bs.dropdown',
    () => {
      selector.parentElement.classList.replace('col-md-2', 'col-md-6')
      selector
        .getElementsByTagName('i')[0]
        .classList.replace('fa-chevron-down', 'fa-chevron-up')
    },
    true
  )
  selector.addEventListener(
    'hide.bs.dropdown',
    () => {
      selector.parentElement.classList.replace('col-md-6', 'col-md-2')
      selector
        .getElementsByTagName('i')[0]
        .classList.replace('fa-chevron-up', 'fa-chevron-down')
    },
    true
  )
}

export function dropdownSearch(selector, data) {
  selector.addEventListener('keyup', (e) => {
    const input = selector.getElementsByTagName('input')[0]
    const ul = selector.getElementsByTagName('ul')[0]
    ul.innerHTML = ''
    if (input.value.length > 3) {
      const query = input.value.toLowerCase()
      console.log(query)
      const results = data.filter((selection) =>
        selection.toLowerCase().includes(query)
      )
      console.log(results)
      results.forEach((result) =>
        ul.append(createDom('li', `${result}`, { class: 'text-white' }))
      )
    }
  })
}
