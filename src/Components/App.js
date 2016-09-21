import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addRecipe from '../Actions/actionAddRecipe'
import removeRecipe from '../Actions/actionRemoveRecipe'
import Main from './Main'

// Takes State from the Store as a param and returns the State as Props on the Component 
const mapStateToProps = (state) => {
  return {
    recipes: state
  }
}

// Takes dispatch as a param which is the dispatch method from Store ( store.dispatch() )
// returns the bindActionCreators function which takes all your Action Creators as an object and dispatch 
const mapDispatchToProps = (dispatch) => {
  // bindActionCreators turns an object whose values are action creators, into an object with the same keys, 
  // but with every action creator wrapped into a dispatch call so they may be invoked directly.
  return bindActionCreators({ addRecipe, removeRecipe }, dispatch)
}

// injects the data directly into the specified component as Props (Main)
// Takes 2 params, mapStateToProps and mapDispatchToProps
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
