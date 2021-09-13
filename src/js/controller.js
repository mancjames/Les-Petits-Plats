import { RecipeCard } from './view/components/recipeCard'
import { recipes } from './modal/recipes'

const recipesSection = document.getElementById('recipesSection')

const createRecipesCard = (recipesCard) => {
  recipesCard.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).recipeCard())
  })
}

export const init = () => {
  createRecipesCard(recipes)
}
