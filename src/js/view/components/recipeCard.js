/* eslint-disable func-names */
/* eslint-disable max-len */
import { createDom } from '../helpers'

export function RecipeCard(data) {
  this.id = data.id
  this.name = data.name
  this.description = data.description
  this.time = data.time
  this.servings = data.servings
  this.ustensils = data.ustensils
  this.ingredients = data.ingredients
  this.appliance = data.appliance
}

RecipeCard.prototype.recipeCard = function () {
  const card = createDom(
    'div',
    { class: 'col mb-3' },
    createDom(
      'article',
      {
        class:
          'card bg-light h-100 text-black rounded border-0 custom-card-height',
      },
      createDom(
        'div',
        { class: 'card-img-top' },
        createDom('div', { class: 'rectangle rounded-top' })
      ),
      createDom(
        'div',
        { class: 'd-flex px-3 py-2 fw-bold custom-title' },
        createDom('h5', `${this.name}`, {
          class: 'card-title me-auto my-auto col-8',
        }),
        createDom(
          'div',
          {
            class: 'd-flex flex-row align-items-center justify-content-end',
          },
          createDom('i', { class: 'far fa-clock' }),
          createDom('p', { class: 'm-1' }, `${this.time} mins`)
        )
      ),
      createDom(
        'div',
        {
          class: 'card-body d-flex flex-row flex-wrap font-small px-3 py-1',
        },
        createDom(
          'div',
          { class: 'card-text d-flex flex-column w-50' },
          createDom(
            'ul',
            { class: 'list-unstyled' },
            ...this.ingredients.map((ingredient) =>
              createDom(
                'li',
                createDom('strong', `${ingredient.ingredient}`),
                ingredient.quantity ? `: ${ingredient.quantity} ` : '',
                ingredient.unit ? `${ingredient.unit}` : ''
              )
            )
          )
        ),
        createDom(
          'div',
          { class: 'card-text d-flex flex-column w-50' },
          createDom('p', `${this.description}`, {
            class: 'custom-truncate',
          })
        )
      )
    )
  )
  return card
}
