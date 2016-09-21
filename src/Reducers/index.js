import { combineReducers } from 'redux'
import recipes from './reducerRecipes'

const rootReducer = combineReducers({ recipes })

export default rootReducer