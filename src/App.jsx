
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
    
    const updatetdItems = [...this.state.items, newItem]
    
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

  handleDelete = (id) => {
    const filterdItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterdItem
    })
    
  }

  handleEdit = id => {
   
    const filterdItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterdItem,
      item:selectedItem.title,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div className="Container">
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
        <TodoList items={this.state.items}  clearList = { this.clearList } handleDelete={this.handleDelete} 
        handleEdit= {this.handleEdit} 
        />
      </div>
    )
  }
}

export default App
