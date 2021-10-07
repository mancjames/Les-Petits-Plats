/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { createDom } from '../helpers'

export function Dropdown(data, type, color) {
  this.data = data
  this.type = type
  this.color = color
}

Dropdown.prototype.dropdownListItems = function () {
  const listItem = createDom('li', `${this.data}`, {
    class: 'text-white list-item',
  })
  this.dropdownClickItem(listItem)
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
        class: `form-control rounded-start bg-${this.color} border=${this.color} py-4 px-2 text-white`,
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
  this.dropdownListener(element)
  // this.dropdownSearch(element)
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

Dropdown.prototype.dropdownClickItem = function (item) {
  item.addEventListener('click', () => {
    const filterElement = createDom(
      'div',
      {
        class: 'rounded col-1 text-white align-middle text-nowrap btn-group',
      },
      createDom('span', `${item.textContent}`, {
        class: 'rounded-start px-2 py-2',
      }),
      createDom('button', {
        type: 'button',
        class: 'btn close text-white rounded-end bg-secondary float-right',
        'aria-label': 'close',
      }),
      createDom('i', {
        'aria-hidden': 'true',
        class: 'far fa-times-circle',
      })
    )
    const test = document.getElementById('filterRow')
    test.append(filterElement)
    console.log(filterElement)
    // return filterElement
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
