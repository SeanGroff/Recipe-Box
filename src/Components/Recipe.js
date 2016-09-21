import React, { Component } from 'react'

class Recipe extends Component {
  handleClick(e) {
    e.preventDefault()
    this.props.removeRecipe(this.props.index)
  }

  render() {
    console.log('recipe', this.props)
    return (
      <div style={{ 'backgroundColor': 'lightGray', 'border': '1px solid purple' }}>
        <div>Recipe: {this.props.recipe.recipe}</div>
        <div>ingredients: {this.props.recipe.ingredients.map((ingredient, index) => `${ingredient} `) }</div>
        <button
          style={{ 'backgroundColor': 'red' }}
          onClick={this.handleClick.bind(this)}>Remove Recipe</button>  
      </div>
    )
  }
}

export default Recipe