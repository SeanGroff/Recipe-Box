/**
 * Looks in local storage by key
 * Retreive a String
 * Parse it as JSON
 *
 * Returns undefined because when undefined runs through the reducer
 * ...the reducer will return the current state
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    //  ignore write errors
  }
}