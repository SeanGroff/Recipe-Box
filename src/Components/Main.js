import React, { Component } from 'react'
import Recipe from './Recipe'
import {
  PageHeader, Button, Grid, Row, Col,
  Modal, Header, Title, Body, Footer } from 'react-bootstrap'
import '../Styles/Main.css'

class Main extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.addRecipe('Nachos', ['chips', 'cheese'])
  }

  close() {
    this.props.closeModal()
  }

  open() {
    this.props.openModal()
  }

  render() {
    console.log(this.props);
    let recipes = this.props.recipes
    return (
      <div className="Main">
        <PageHeader style={{ 'textAlign': 'center' }}>
          Recipe Box       
        </PageHeader>
        <Grid>
          <Row>
            <Col xs={8} xsOffset={2}>
              {
                recipes.map((recipe, index) => <Recipe
                  key={index}
                  index={index}
                  recipe={recipes[index]}
                  removeRecipe={this.props.removeRecipe} />)
              }
            </Col>
          </Row>
        </Grid>
        <Button
          bsStyle="success"
          style={{ 'margin': '15px', 'padding': '10px 15px' }}
          onClick={this.open.bind(this) }>Add Recipe</Button>    
        <Modal show={this.props.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text"></input>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="success"
              onClick={this.handleSubmit.bind(this) }>Add</Button>
            <Button
              bsStyle="default"
              onClick={this.close.bind(this) }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Main;
