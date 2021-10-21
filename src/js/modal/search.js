/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable func-names */
import { RecipeCard } from '../view/components/recipeCard'

export function Search(data) {
  this.data = data
}

Search.prototype.search = function (search) {
  const recipesSection = document.getElementById('recipesSection')
  recipesSection.innerHTML = ''
  if (search.length > 0) {
    for (let i = 0; i < search.length; i++) {
      const results = this.data.filter(
        (recipe) =>
          recipe.appliance.toLowerCase().includes(search[i]) ||
          recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(search[i])
          ) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(search[i])
          )
      )
      results.forEach((result) =>
        recipesSection.append(new RecipeCard(result).recipeCard())
      )
    }
  } else {
    this.data.forEach((recipe) => {
      recipesSection.append(new RecipeCard(recipe).recipeCard())
    })
  }
}
