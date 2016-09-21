import React, { Component } from 'react'
import '../Styles/Main.css'

class Main extends Component {
  handleClick(e) {
    e.preventDefault()
    this.props.addRecipe('pb&j', ['bread', 'peanut butter', 'jelly'])
  }

  render() {
    console.log(this.props);
    return (
      <div className="Main">
        Recipe Box
        <button onClick={this.handleClick.bind(this)}>Add Recipe</button>
      </div>
    );
  }
}

export default Main;
