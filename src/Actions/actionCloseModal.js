const closeModal = () => {
  console.log('action close modal dispatched')
  return {
    type: 'CLOSE_MODAL',
    show: false
  }
}

export default closeModal