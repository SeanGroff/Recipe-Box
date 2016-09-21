import { createStore } from 'redux'
import { loadState, saveState } from './localStorage'
import rootReducer from './Reducers/index'
import throttle from 'lodash/throttle'

let persistentState = loadState()

const store = createStore(rootReducer, persistentState, window.devToolsExtension && window.devToolsExtension())

/**
 * Saves current state to localStorage anytime the Store changes
 */
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

// Enabled hot reloading for ALL THE THINGS...just copy paste from project to project :)
// However, when in doubt...refresh the browser
if (module.hot) {
  module.hot.accept('./Reducers/', () => {
    const nextRootReducer = require('./Reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store