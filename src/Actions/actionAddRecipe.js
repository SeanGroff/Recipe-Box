const addRecipe = (recipe, ingredients) => {
  return {
    type: 'ADD_RECIPE',
    recipe,
    ingredients
  }
}

export default addRecipe