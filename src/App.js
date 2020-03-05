import React, { Component } from "react";
import Header from "./components/header";
import TodoAdder from "./components/todoAdder";
import TodoList from "./components/todoList";
import './App.css'

export default class App extends Component {
  maxId = 100;

  state = {
    tasks: [
      { id: 0, title: "Sample task", checked: false, done: false }
    ]
  };

  componentDidMount() {
      window.addEventListener("beforeunload",this.saveData);
      window.addEventListener("DOMContentLoaded", this.loadData);
  }
  saveData = () => {
    localStorage.setItem("tasks",JSON.stringify(this.state.tasks))
  };

  loadData = () => {
      let savedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (savedTasks.length !== 0){
        this.setState(({tasks}) =>{
          return {tasks: savedTasks};
        })
      }
  };


  updateCheck = id => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(task => task.id === id);
      tasks[idx].checked = !tasks[idx].checked;
      return tasks;
    });
  };

  deleteItem = id => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(el => el.id === id);
      const newArray = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
      return { tasks: newArray };
    });
  };

  doneTask = id => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(el => el.id === id);
      tasks[idx].done = !tasks[idx].done;
      return tasks;
    });
  };

  addItem = titleName => {
    const newItem = {
      id: this.maxId++,
      title: titleName,
      checked: false,
      done: false
    };

    this.setState(({ tasks }) => {
      const newArray = [...tasks, newItem];
      return { tasks: newArray };
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <TodoAdder addItem={this.addItem} />
        <TodoList
          deleteItem={this.deleteItem}
          updateCheck={this.updateCheck}
          doneTask={this.doneTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

