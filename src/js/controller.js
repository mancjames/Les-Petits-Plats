/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// View imports
import { RecipeCard } from './view/components/recipeCard'
import { Dropdown } from './view/components/dropdown'
import { option } from './view/components/filters'
import { SearchBar } from './view/components/searchBar'
// Modal imports
import { recipes } from './modal/recipes'
import { Search } from './modal/search'
// eslint-disable-next-line max-len
import {
  ingredientWithNoDuplicates,
  deviceWithNoDuplicates,
  utensilWithNoDuplicates,
} from './modal/optionsFromData'
// ID selectors
const recipesSection = document.getElementById('recipesSection')
const dropdownSection = document.getElementById('dropdownButtonSection')

// Class selectors
const dropdownOptions = [
  {
    dropdownData: ingredientWithNoDuplicates,
    dropdownType: 'ingredient',
    dropdownColor: 'primary',
  },
  {
    dropdownData: deviceWithNoDuplicates,
    dropdownType: 'device',
    dropdownColor: 'secondary',
  },
  {
    dropdownData: utensilWithNoDuplicates,
    dropdownType: 'utensil',
    dropdownColor: 'tertiary',
  },
]

const recipeCard = new RecipeCard(recipes)
const searchFilter = new Search(recipes)

export const init = () => {
  recipeCard.createRecipesCard(recipes, recipesSection)
  for (let i = 0; i < dropdownOptions.length; i++) {
    const dropdown = new Dropdown(
      dropdownOptions[i].dropdownData,
      dropdownOptions[i].dropdownType,
      dropdownOptions[i].dropdownColor
    )
    const dropdownElement = dropdown.createDropdownElement()
    dropdown.dropdownSearch(dropdownElement)
    dropdown.dropdownListener(dropdownElement)
    dropdown.dropdownListenerInput(dropdownElement)
    dropdownSection.append(dropdownElement)
  }
  const searchBar = new SearchBar()
  searchBar.searchListener()
  // event listener for searching when filter appears and close
  document.body.addEventListener('click', (e) => {
    if (e.target.dataset.search != 'undefined') {
      searchFilter.search(option)
    }
  })
}
