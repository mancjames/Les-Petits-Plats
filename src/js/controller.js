/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// View imports
import { RecipeCard } from './view/components/recipeCard'
import { Dropdown } from './view/components/dropdown'
// eslint-disable-next-line no-unused-vars
import { option } from './view/components/filters'
// Modal imports
import { recipes } from './modal/recipes'
import { Search } from './modal/search'
// eslint-disable-next-line max-len
import { listWithNoDuplicates } from './modal/optionsFromData'
// ID selectors
const recipesSection = document.getElementById('recipesSection')
const dropdownSection = document.getElementById('dropdownButtonSection')

// Class selectors
const dropdownOption = ['ingredient', 'device', 'utensil']
const dropdownColor = ['primary', 'secondary', 'tertiary']

const recipeCard = new RecipeCard(recipes)
const searchFilter = new Search(recipes)

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
    dropdown.dropdownListenerInput(dropdownElement)
    dropdownSection.append(dropdownElement)
  }
  // event listener for searching using dropdown and when you close filter
  document.body.addEventListener('click', (e) => {
    if (e.target.dataset.search != 'undefined') {
      searchFilter.search(option)
    }
  })
  // const dropdowns = document.querySelectorAll('.custom-dropdown')
  // dropdowns.forEach((dropdown) => {
  //   const dropdownOverlay = dropdown.querySelector('.custom-dropdown-overlay')
  //   const dropdownInput = dropdown.querySelector('.custom-dropdown-input')
  //   // const bootstrapDropInput = new bootstrap.Dropdown(dropdownInput, {})

  //   dropdownOverlay.addEventListener('focusin', () => {
  //     if (dropdown.classList.contains('active')) {
  //       dropdown.classList.remove('active')
  //     }
  //   })

  //   // dropdownInput.addEventListener('click', () => {
  //   //   dropdown.classList.toggle('active')
  //   //   bootstrapDropInput.show()
  //   // })

  //   dropdownInput.addEventListener('focusin', () => {
  //     dropdown.classList.toggle('active')
  //     // bootstrapDropInput.show()
  //   })
  // })
}
