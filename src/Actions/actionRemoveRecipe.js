const removeRecipe = (index) => {
  console.log('action remove recipe dispatched');
  return {
    type: 'REMOVE_RECIPE',
    index
  }
}

export default removeRecipe