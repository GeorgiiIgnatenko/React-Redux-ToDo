import React, { Component } from "react";
import Header from "./components/header";
import TodoBody from "./components/todoBody";
import TodoList from "./components/todoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        tasks : [
            { id: 0, title: "Drink Coffee", checked: false },
            { id: 1, title: "Write code", checked: false },
            { id: 2, title: "Go to shop", checked: false },
            { id: 3, title: "Do homework", checked: false }
        ]
    };
  }
  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "960px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Header />
        <TodoBody />
        <TodoList />
      </div>
    );
  }
}
export default App;
