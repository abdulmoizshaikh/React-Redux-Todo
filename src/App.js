import React, { Component } from 'react';
import classes from './App.css';
import Todo from './container/Todo/Todo';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.H1}>ReactJs TodoList <i className="fas fa-clipboard-list"></i></h1>
        <Todo />
      </div>
    );
  }
}

export default App;
