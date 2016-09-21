import React, { Component } from 'react'
import Recipe from './Recipe'
import '../Styles/Main.css'

class Main extends Component {
  handleClick(e) {
    e.preventDefault()
    this.props.addRecipe('nachos', ['chips', 'cheese'])
  }

  render() {
    let recipes = this.props.recipes.recipes
    return (
      <div className="Main">
        Recipe Box
        { recipes.map((recipe, index) => <Recipe
          key={index}
          index={index}
          recipe={recipes[index]}
          removeRecipe={this.props.removeRecipe} />) }
        <button onClick={this.handleClick.bind(this) }>Add Recipe</button>      
      </div>
    );
  }
}

export default Main;
