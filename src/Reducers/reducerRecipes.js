const recipes = (state = [], action) => {
  console.log('recipes reducer fired');
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, {
        id: action.id,
        recipe: action.recipe,
        ingredients: action.ingredients
      }]
    default:
      return state
  }
}

export default recipes