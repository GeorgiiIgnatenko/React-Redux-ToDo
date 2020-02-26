import React, {Component} from "react";
import Header from "./components/header";
import TodoBody from "./components/todoBody";
import TodoList from "./components/todoList";

class App extends Component {
    state = {
        tasks: [
            { id: 0, title: "Drink Coffee", checked: false },
            { id: 1, title: "Write code", checked: false },
            { id: 2, title: "Go to shop", checked: false },
            { id: 3, title: "Do homework", checked: false }
        ]
    };

  updateData = (id) => {
      this.setState(({ tasks }) =>{
          const idx = tasks.findIndex((task) => task.id === id);
          tasks[idx].checked = !tasks[idx].checked;
          return tasks;
      });
  };

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
        <TodoList updateData={this.updateData} tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
