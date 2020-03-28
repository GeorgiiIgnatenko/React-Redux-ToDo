import React, { Component } from "react";
import Header from "./components/Header";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  maxId = 100;

  appStyle = {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  render() {
    return (
      <div
          className="app"
          style={this.appStyle}
      >
        <Header />
        <TodoAddForm/>
        <TodoList/>
      </div>
    );
  }
}

