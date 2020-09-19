import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <section class="TodoList__Section">
                <h1 class="Todo-Header">Todo Input</h1>
                <TodoItem/>
                <button class="Clear__List">Clear List</button>
            </section>
        )
    }
}

export default TodoList
