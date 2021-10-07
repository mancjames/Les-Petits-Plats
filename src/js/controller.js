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
const dropdownSection = document.getElementById('dropdownButtonSection')

// Class selectors
const dropdownOption = ['ingredient', 'device', 'utensil']
const dropdownColor = ['primary', 'secondary', 'tertiary']

const recipeCard = new RecipeCard(recipes)

export const init = () => {
  recipeCard.createRecipesCard(recipes, recipesSection)
  for (let i = 0; i < dropdownOption.length; i++) {
    const dropdown = new Dropdown(
      listWithNoDuplicates[i],
      dropdownOption[i],
      dropdownColor[i]
    )
    dropdownSection.append(dropdown.createDropdownElement())
    const dropdownDiv = document.getElementsByClassName('dropdownDiv')
    for (let j = 0; j < dropdownDiv.length; j++) {
      dropdown.dropdownSearch(dropdownDiv[i])
    }
  }
}
