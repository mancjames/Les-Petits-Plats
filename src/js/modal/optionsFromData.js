/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import { recipes } from './recipes'

function removeDuplicates(source) {
  source = source.reduce((result, elem) => {
    if (!result.some((o) => o === elem)) {
      result.push(elem)
    }
    return result
  }, [])
  return source
}

const ingredient = []

for (let i = 0; i < recipes.length; i++) {
  const { ingredients } = recipes[i]
  for (let j = 0; j < ingredients.length; j++) {
    const ingred = ingredients[j].ingredient.toLowerCase()
    const ingredWithFirstCapital =
      ingred.charAt(0).toUpperCase() + ingred.slice(1)
    ingredient.push(ingredWithFirstCapital)
  }
}

export const ingredientWithNoDuplicates = removeDuplicates(ingredient)
