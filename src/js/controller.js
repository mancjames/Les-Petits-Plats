/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// View imports
import { RecipeCard } from './view/components/recipeCard'
// eslint-disable-next-line max-len
import {
  DropdownOptions,
  dropdownListener,
  dropdownSearch,
} from './view/components/dropdown'
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
// Class selectors
const dropdownSelector = document.getElementsByClassName('dropdownListener')

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

const listWithNoDuplicates = [
  ingredientWithNoDuplicates,
  deviceWithNoDuplicates,
  utensilWithNoDuplicates,
]
export const init = () => {
  createRecipesCard(recipes)
  createDropdown(ingredientWithNoDuplicates, ingredientDropdown)
  createDropdown(utensilWithNoDuplicates, utensilDropdown)
  createDropdown(deviceWithNoDuplicates, deviceDropdown)
  for (let i = 0; i < dropdownSelector.length; i++) {
    // createDropdown(listWithNoDuplicates[i], dropdownSelector[i])
    dropdownListener(dropdownSelector[i])
    dropdownSelector[i].addEventListener('keyup', () => {
      dropdownSearch(dropdownSelector[i], listWithNoDuplicates[i])
    })
  }
}
