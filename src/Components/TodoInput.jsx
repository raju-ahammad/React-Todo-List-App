
import className from "classnames";
import React from 'react';

const TodoInput = ({ item, handleChange, handleSubmit, editItem }) => {
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
                    <div className={className("Button__section")}>
                        <button type="submit" className={ editItem ? className("Btn_Green"): className("Btn_Success") }> { editItem ? "edit item": "add item" } </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoInput;
