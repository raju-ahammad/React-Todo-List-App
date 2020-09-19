import React from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import "./todo.css"

const App = () => {
  return (
    <div className="Container">
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default App
