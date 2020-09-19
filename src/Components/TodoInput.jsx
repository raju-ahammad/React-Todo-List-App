import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        return (
            <div>
                <h1 class="Todo-Header">Todo Input</h1>
                <div class="Input__Section">
                    <div class="Todo__Flex">
                        <i className="fas fa-book Input__Icon"></i>
                        <input
                            placeholder="Add A Todo Item"
                            class="Todo__Input"
                            type="text"
                        />
                    </div>
                    <div class="Button__section">
                        <button class="Btn">Add Item</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoInput
