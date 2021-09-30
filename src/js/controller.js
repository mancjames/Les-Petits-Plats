/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// View imports
import { RecipeCard } from './view/components/recipeCard'
// eslint-disable-next-line max-len
import { Dropdown } from './view/components/dropdown'
// Modal imports
import { recipes } from './modal/recipes'
// eslint-disable-next-line max-len
import { listWithNoDuplicates } from './modal/optionsFromData'
// ID selectors
const recipesSection = document.getElementById('recipesSection')
const ingredientDropdown = document.getElementById('ingredientDropdown')
const utensilDropdown = document.getElementById('utensilDropdown')
const deviceDropdown = document.getElementById('deviceDropdown')
const dropdownIdSelectors = [
  ingredientDropdown,
  deviceDropdown,
  utensilDropdown,
]
// Class selectors
const dropdownSelector = document.getElementsByClassName('dropdownListener')

const dropdown = new Dropdown()
const recipeCard = new RecipeCard(recipes)

export const init = () => {
  recipeCard.createRecipesCard(recipes, recipesSection)
  for (let i = 0; i < dropdownSelector.length; i++) {
    dropdown.dropdownListener(dropdownSelector[i])
    dropdown.createDropdown(dropdownIdSelectors[i], listWithNoDuplicates[i])
    dropdown.dropdownSearch(dropdownSelector[i], listWithNoDuplicates[i])
  }
}
