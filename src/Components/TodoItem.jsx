import React from 'react'

const TodoItem = ({ title, handleDelete, handleEdit }) => {
    return (
        <div className="TodoList__Box">
            <p className="">{ title }</p>
            <div className="TodoList__Icon">
                <span onClick={handleEdit} className="Pen__Icon"><i className="fas fa-pen"></i></span>
                <span onClick={handleDelete} className="Trash__Icon"><i className="fas fa-trash"></i></span>
            </div>
        </div>
    )
}

export default TodoItem
