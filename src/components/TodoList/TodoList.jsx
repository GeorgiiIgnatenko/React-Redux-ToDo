import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import "./todoList.css";

const TodoList = () => {
  const tasks = useSelector(state => state.tasksReducer).map(el => {
    const { title, id } = el;
    return <TodoItem
        key={id}
        id={id}
        title={title}
    />;
  });
  return (
    <List
      className="list"
      header={
        <span className="listSpan">Активных задач : {tasks.length} </span>
      }
      bordered
    >
      {tasks}
    </List>
  );
};


export default TodoList
