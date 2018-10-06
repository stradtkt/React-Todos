import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        <li className="completed">
            <div className="view">
                <input type="checkbox" className="toggle" checked/>
                <label htmlFor="placeholder">Placeholder Item</label>
                <button className="destroy"></button>
            </div>
            <input value="Created a TodoMVC template" className="edit"/>
        </li>
        <li>
            <div className="view">
                <input type="checkbox" className="toggle"/>
                <label htmlFor="placeholder">Placeholder Item</label>
                <button className="destroy"></button>
            </div>
            <input value="Rule the web" className="edit"/>
        </li>
      </ul>
    )
  }
}

export default TodoList;