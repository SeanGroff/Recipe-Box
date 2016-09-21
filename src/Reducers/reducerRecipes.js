const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, {
        recipe: action.recipe,
        ingredients: action.ingredients
      }]
    case 'REMOVE_RECIPE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)]
    default:
      return state
  }
}

export default recipes