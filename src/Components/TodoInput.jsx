
import React from 'react';

const TodoInput = ({ item, handleChange, handleSubmit }) => {
    return (
        <div>
            <h1 className="Todo-Header">Todo Input</h1>
            <div className="Input__Section">
                <form onSubmit={handleSubmit}>
                    <div className="Todo__Flex">
                        <i className="fas fa-book Input__Icon"></i>
                        <input
                            placeholder="Add A Todo Item"
                            className="Todo__Input"
                            type="text"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="Button__section">
                        <button type="submit" className="Btn">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoInput;
