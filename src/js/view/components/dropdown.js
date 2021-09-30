/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { createDom } from '../helpers'

export function Dropdown(data) {
  this.data = data
}

Dropdown.prototype.dropdownListItems = function () {
  const listItem = createDom('li', `${this.data}`, { class: 'text-white' })
  return listItem
}

Dropdown.prototype.createDropdown = function (idSelector, dropdownData) {
  dropdownData.forEach((listItem) => {
    idSelector.append(new Dropdown(listItem).dropdownListItems())
  })
}

Dropdown.prototype.dropdownSearch = function (selector, data) {
  selector.addEventListener('keydown', () => {
    const input = selector.getElementsByTagName('input')[0]
    const ul = selector.getElementsByTagName('ul')[0]
    ul.innerHTML = ''
    if (input.value.length > 1) {
      const query = input.value.toLowerCase()
      const results = data.filter((selection) =>
        selection.toLowerCase().includes(query)
      )
      results.forEach((result) =>
        ul.append(new Dropdown(result).dropdownListItems())
      )
    } else {
      data.forEach((listItem) => {
        ul.append(new Dropdown(listItem).dropdownListItems())
      })
    }
  })
}

Dropdown.prototype.expandDropdown = function (selector) {
  selector.parentElement.classList.replace('col-md-2', 'col-md-6')
  selector
    .getElementsByTagName('i')[0]
    .classList.replace('fa-chevron-down', 'fa-chevron-up')
}

Dropdown.prototype.minimizeDropdown = function (selector) {
  selector.parentElement.classList.replace('col-md-6', 'col-md-2')
  selector
    .getElementsByTagName('i')[0]
    .classList.replace('fa-chevron-up', 'fa-chevron-down')
}

Dropdown.prototype.dropdownListener = function (selector) {
  selector.addEventListener(
    'show.bs.dropdown',
    () => {
      Dropdown.prototype.expandDropdown(selector)
    },
    true
  )
  selector.addEventListener(
    'hide.bs.dropdown',
    () => {
      Dropdown.prototype.minimizeDropdown(selector)
    },
    true
  )
  selector.addEventListener(
    'keydown',
    () => {
      Dropdown.prototype.expandDropdown(selector)
    },
    true
  )
  selector.addEventListener(
    'focusout',
    () => {
      Dropdown.prototype.minimizeDropdown(selector)
    },
    true
  )
}
