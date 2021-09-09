/* eslint-disable no-console */
import { RecipeCard } from './view/components/recipeCard'

const recipesSection = document.getElementById('recipesSection')

const getData = async () =>
  fetch('./modal/recipes.js', {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log('An error occurs when fetching recipes', err))

const createRecipesCard = (recipesCard) => {
  recipesCard.forEach((recipe) => {
    recipesSection.append(new RecipeCard(recipe).recipeCard)
  })
}

export const init = async () => {
  // eslint-disable-next-line no-shadow
  const { recipes } = await getData()
  createRecipesCard(recipes)
}
