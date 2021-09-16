// View imports
import { RecipeCard } from './view/components/recipeCard'
import { DropdownOptions } from './view/components/dropdown'
// Modal imports
import { recipes } from './modal/recipes'
import { ingredientWithNoDuplicates } from './modal/optionsFromData'

const recipesSection = document.getElementById('recipesSection')
const ingredientDropdown = document.getElementById('ingredientDropdown')

const createRecipesCard = (recipesCard) => {
  recipesCard.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).recipeCard())
  })
}

const createIngredientDropdown = (ingredientList) => {
  ingredientList.forEach((listItem) => {
    ingredientDropdown.append(new DropdownOptions(listItem).dropdownListItems())
  })
}

export const init = () => {
  createRecipesCard(recipes)
  createIngredientDropdown(ingredientWithNoDuplicates)
}
