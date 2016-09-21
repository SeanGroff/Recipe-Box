let nextId = 0

const addRecipe = (recipe, ingredients) => {
  console.log('adding recipe action');
  return {
    type: 'ADD_RECIPE',
    id: ++nextId,
    recipe,
    ingredients
  }
}

export default addRecipe