// View imports
import { RecipeCard } from './view/components/recipeCard'
import { DropdownOptions } from './view/components/dropdown'
// Modal imports
import { recipes } from './modal/recipes'
// eslint-disable-next-line max-len
import {
  ingredientWithNoDuplicates,
  utensilWithNoDuplicates,
  deviceWithNoDuplicates,
} from './modal/optionsFromData'
// ID selectors
const recipesSection = document.getElementById('recipesSection')
const ingredientDropdown = document.getElementById('ingredientDropdown')
const utensilDropdown = document.getElementById('utensilDropdown')
const deviceDropdown = document.getElementById('deviceDropdown')

const createRecipesCard = (recipesCard) => {
  recipesCard.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).recipeCard())
  })
}

const createDropdown = (dropdownData, idSelector) => {
  dropdownData.forEach((listItem) => {
    idSelector.append(new DropdownOptions(listItem).dropdownListItems())
  })
}

export const init = () => {
  createRecipesCard(recipes)
  createDropdown(ingredientWithNoDuplicates, ingredientDropdown)
  createDropdown(utensilWithNoDuplicates, utensilDropdown)
  createDropdown(deviceWithNoDuplicates, deviceDropdown)
}
