/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// View imports
import { RecipeCard } from './view/components/recipeCard'
import { Dropdown } from './view/components/dropdown'
// Modal imports
import { recipes } from './modal/recipes'
// eslint-disable-next-line max-len
import { listWithNoDuplicates } from './modal/optionsFromData'
// ID selectors
const recipesSection = document.getElementById('recipesSection')
const dropdownSection = document.getElementById('dropdownButtonSection')
const filterRow = document.getElementById('filterRow')

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
    const dropdownElement = dropdown.createDropdownElement()
    dropdown.dropdownSearch(dropdownElement)
    dropdown.dropdownListener(dropdownElement)
    dropdownSection.append(dropdownElement)
  }
  filterRow.append()
}
