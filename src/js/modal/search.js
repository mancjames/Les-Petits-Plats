/* eslint-disable max-len */
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
    const results = []
    for (let i = 0; i < this.data.length; i++) {
      const recipe = this.data[i]
      const searchResult = search.every(
        (option) =>
          recipe.appliance.toLowerCase().includes(option) ||
          recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(option)
          ) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(option)
          )
      )
      if (searchResult) {
        results.push(recipe)
      }
    }
    //   const results = this.data.filter((recipe) =>
    //     search.every(
    //       (option) =>
    //         recipe.appliance.toLowerCase().includes(option) ||
    //         recipe.ustensils.some((ustensil) =>
    //           ustensil.toLowerCase().includes(option)
    //         ) ||
    //         recipe.ingredients.some((ingredient) =>
    //           ingredient.ingredient.toLowerCase().includes(option)
    //         )
    //     )
    //   )
    results.forEach((result) =>
      recipesSection.append(new RecipeCard(result).recipeCard())
    )
  } else {
    this.data.forEach((recipe) => {
      recipesSection.append(new RecipeCard(recipe).recipeCard())
    })
  }
}
