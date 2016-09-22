const openModal = () => {
  console.log('action open modal dispatched')
  return {
    type: 'OPEN_MODAL',
    show: true
  }
}

export default openModal