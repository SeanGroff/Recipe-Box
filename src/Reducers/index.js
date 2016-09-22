import { combineReducers } from 'redux'
import recipes from './reducerRecipes'
import showModal from './reducerModal'

const rootReducer = combineReducers({ recipes, showModal })

export default rootReducer