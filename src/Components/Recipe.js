import React, { Component } from 'react'
import { Accordion, Panel, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

class Recipe extends Component {
  handleClick(e) {
    e.preventDefault()
    this.props.removeRecipe(this.props.index)
  }

  render() {
    return (
      <Accordion style={{'padding': '15px'}}>
        <Panel
          header={this.props.recipe.recipe}
          eventKey={this.props.index}
          bsStyle="info">
          <ListGroup>
            <h4>Ingredients</h4>
            {this.props.recipe.ingredients.map((ingredient, index) => <ListGroupItem key={index}> {`${ingredient} `}</ListGroupItem> )}
          </ListGroup>
          <Button
            bsStyle="default"
            style={{'margin': '10px 10px 10px 0', 'width': '80px'}}>Edit</Button>
          <Button
            bsStyle="danger"
            style={{'margin': '10px 0', 'width': '80px'}}
            onClick={this.handleClick.bind(this) }>Remove
          </Button>
        </Panel>
      </Accordion>
    )
  }
}

export default Recipe