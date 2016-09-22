const showModal = (state = false, action) => {
  switch (action.type) {
    case 'CLOSE_MODAL':
      console.log('close modal reducer')
      return action.show
    case 'OPEN_MODAL':
      console.log('open modal reducer')
      return action.show
    default:
      return state
  }
}

export default showModal