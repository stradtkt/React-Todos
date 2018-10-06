import React, { Component } from 'react'
import TodoList from './TodoList';
class Main extends Component {
  render() {
    return (
      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList/>
      </section>
    )
  }
}
export default Main;