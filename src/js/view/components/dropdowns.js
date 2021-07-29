/* eslint-disable max-len */
import { createElement, singleContainer, singleRow } from '../helpers'

export const dropdown = createElement(singleContainer)

const dropdownRow = createElement(singleRow)

const ingredientDropdown = createElement({
  name: 'div',
  attrs: [
    'btn-group',
    'rounded',
    'col-md-3',
    'col-lg-2',
    'mb-3',
    'mb-lg-0',
    'dropdown',
  ],
  content: `
    <input class="form-control rounded-start bg-primary border-primary py-4 px-2 text-white" 
        type="search" 
        placeholder="Ingredient" 
        aria-label="Search">
        <button type="button" 
        class="btn btn-primary rounded-end text-white" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
        <i class="fas fa-chevron-down"></i>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
    `,
})

const deviceDropdown = createElement({
  name: 'div',
  attrs: [
    'btn-group',
    'rounded',
    'col-md-3',
    'col-lg-2',
    'mb-3',
    'mb-lg-0',
    'dropdown',
  ],
  content: `
      <input class="form-control rounded-start bg-secondary border-secondary py-4 px-2 text-white" 
          type="search" 
          placeholder="Device" 
          aria-label="Search">
          <button type="button" 
          class="btn btn-secondary rounded-end text-white" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          <i class="fas fa-chevron-down"></i>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
      `,
})

const utensilDropdown = createElement({
  name: 'div',
  attrs: [
    'btn-group',
    'rounded',
    'dropdown',
    'col-md-3',
    'col-lg-2',
    'mb-3',
    'mb-lg-0',
  ],
  content: `
      <input class="form-control rounded-start bg-tertiary border-tertiary py-4 px-2 text-white" 
          type="search" 
          placeholder="Utensil" 
          aria-label="Search">
          <button type="button" 
          class="btn btn-tertiary rounded-end text-white" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          <i class="fas fa-chevron-down"></i>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
      `,
})

dropdown.appendChild(dropdownRow)
dropdownRow.append(ingredientDropdown, deviceDropdown, utensilDropdown)
