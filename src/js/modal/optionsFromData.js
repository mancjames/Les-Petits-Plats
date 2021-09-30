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
const device = []
const utensils = []

for (let i = 0; i < recipes.length; i++) {
  const { ingredients } = recipes[i]
  for (let j = 0; j < ingredients.length; j++) {
    const ingred = ingredients[j].ingredient.toLowerCase()
    const ingredWithFirstCapital =
      ingred.charAt(0).toUpperCase() + ingred.slice(1)
    ingredient.push(ingredWithFirstCapital)
  }
}

for (let i = 0; i < recipes.length; i++) {
  const { appliance } = recipes[i]
  const applianceWithFirstCapital =
    appliance.charAt(0).toUpperCase() + appliance.slice(1)
  device.push(applianceWithFirstCapital)
}

for (let i = 0; i < recipes.length; i++) {
  const { ustensils } = recipes[i]
  for (let j = 0; j < ustensils.length; j++) {
    const utensil = ustensils[j].toLowerCase()
    const utensilWithFirstCapital =
      utensil.charAt(0).toUpperCase() + utensil.slice(1)
    utensils.push(utensilWithFirstCapital)
  }
}

const ingredientWithNoDuplicates = removeDuplicates(ingredient)
const deviceWithNoDuplicates = removeDuplicates(device)
const utensilWithNoDuplicates = removeDuplicates(utensils)

export const listWithNoDuplicates = [
  ingredientWithNoDuplicates,
  deviceWithNoDuplicates,
  utensilWithNoDuplicates,
]
