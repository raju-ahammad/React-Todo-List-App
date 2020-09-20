
import React, { Component } from 'react'
import uuid from "react-uuid"
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import "./todo.css"

class App extends Component {

  state = {
    items: [],
    item: "",
    id: uuid(),
    editItem: false
  }
  
  
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    console.log(newItem);
    const updatetdItems = [...this.state.items, newItem]
    console.log(updatetdItems);
    
    this.setState({
      items: updatetdItems,
      item: "",
      id: uuid(),
      editItem: false
    })
  };

  clearList = () => {
    this.setState({
      items: []
    });
  }

  render() {
    return (
      <div className="Container">
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TodoList items={this.state.items}  clearList = { this.clearList }/>
      </div>
    )
  }
}

export default App
