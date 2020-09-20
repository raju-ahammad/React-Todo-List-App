
import React from 'react'
import TodoItem from './TodoItem'



const TodoList = ({ items, clearList }) => {
    return (
        <section className="TodoList__Section">
            <h1 className="Todo-Header">Todo Input</h1>
            {
                items.map(item=>{
                   return  <TodoItem key={item.id} title={item.title} />
                })
            }
            <button className="Clear__List"  onClick={clearList}>Clear List</button>
        </section>
    )
}

export default TodoList

