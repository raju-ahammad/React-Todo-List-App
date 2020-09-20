import React from 'react'

const TodoItem = ({ title }) => {
    return (
        <div className="TodoList__Box">
            <p className="">{ title }</p>
            <div className="TodoList__Icon">
                <span className="Pen__Icon"><i className="fas fa-pen"></i></span>
                <span className="Trash__Icon"><i className="fas fa-trash"></i></span>
            </div>
        </div>
    )
}

export default TodoItem
