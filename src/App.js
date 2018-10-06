import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
            <h1>Todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
        </header>
        <Main/>
        <Footer/>
      </section>
    );
  }
}

export default App;
