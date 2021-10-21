/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { createDom } from '../helpers'
import { Filter } from './filters'

export function Dropdown(data, type, color) {
  this.data = data
  this.type = type
  this.color = color
}

Dropdown.prototype.dropdownListItems = function () {
  const listItem = createDom('li', `${this.data}`, {
    class: 'text-white list-item',
    'data-search': 'searchOption',
  })
  listItem.addEventListener('click', () => {
    const filterElement = new Filter(`${this.data}`)
    filterElement.createFilterElement()
  })
  return listItem
}

Dropdown.prototype.createDropdownElement = function () {
  const element = createDom(
    'div',
    { class: 'col-sm-12 col-md-2 mb-3 mb-lg-0 custom-animation' },
    createDom(
      'div',
      { class: 'btn-group rounded d-flex dropdownDiv' },
      createDom('input', {
        class: `form-control rounded-start bg-${this.color} border-${this.color} py-4 px-2 text-white`,
        type: 'search',
        placeholder: `${
          this.type.charAt(0).toUpperCase() + this.type.slice(1)
        }`,
        'aria-label': 'search',
        'data-bs-toggle': 'dropdown',
      }),
      createDom(
        'button',
        {
          class: `btn btn-${this.color} rounded-end text-white dropdown-toggle-split`,
          'data-bs-toggle': 'dropdown',
          'data-bs-reference': 'parent',
          'aria-haspopup': 'true',
          'aria-expanded': 'false',
          id: `dropdownMenuButton${
            this.type.charAt(0).toUpperCase() + this.type.slice(1)
          }`,
        },
        createDom('i', {
          class: 'fas fa-chevron-down',
          'aria-hidden': 'true',
        }),
        createDom('span', 'Toggle Dropdown', {
          class: 'sr-only',
        })
      ),
      createDom(
        'ul',
        {
          class: `bg-${this.color} custom-column-count dropdown-menu border-0 rounded-bottom col-12 mt-n1 p-3`,
          'aria-labelledby': `dropdownMenuButton${
            this.type.charAt(0).toUpperCase() + this.type.slice(1)
          }`,
        },
        ...this.data.map((listItem) =>
          new Dropdown(listItem).dropdownListItems()
        )
      )
    )
  )
  return element
}

Dropdown.prototype.dropdownSearch = function (selector) {
  selector.addEventListener('keydown', () => {
    const input = selector.getElementsByTagName('input')[0]
    const ul = selector.getElementsByTagName('ul')[0]
    ul.innerHTML = ''
    if (input.value.length > 1) {
      const query = input.value.toLowerCase()
      const results = this.data.filter((selection) =>
        selection.toLowerCase().includes(query)
      )
      results.forEach((result) =>
        ul.append(new Dropdown(result).dropdownListItems())
      )
    } else {
      this.data.forEach((listItem) => {
        ul.append(new Dropdown(listItem).dropdownListItems())
      })
    }
  })
}

Dropdown.prototype.expandDropdown = function (selector) {
  selector.classList.replace('col-md-2', 'col-md-6')
  selector
    .getElementsByTagName('i')[0]
    .classList.replace('fa-chevron-down', 'fa-chevron-up')
}

Dropdown.prototype.minimizeDropdown = function (selector) {
  selector.classList.replace('col-md-6', 'col-md-2')
  selector
    .getElementsByTagName('i')[0]
    .classList.replace('fa-chevron-up', 'fa-chevron-down')
}

Dropdown.prototype.dropdownListener = function (selector) {
  selector.addEventListener(
    'show.bs.dropdown',
    () => {
      this.expandDropdown(selector)
    },
    true
  )
  selector.addEventListener(
    'hide.bs.dropdown',
    () => {
      this.minimizeDropdown(selector)
    },
    true
  )
  // selector.addEventListener(
  //   'focusin',
  //   () => {
  //     this.expandDropdown(selector)
  //   },
  //   true
  // )
  // selector.addEventListener(
  //   'focusout',
  //   () => {
  //     this.minimizeDropdown(selector)
  //   },
  //   true
  // )
}
