import React from "react";
import TodoItem from "./todoItem";
import { List } from "antd";
import "antd/dist/antd.css";
import "./todoList.css"

const TodoList = ({ updateCheck, deleteItem, doneTask, tasks }) => {
  let elements = tasks.map(item => {
    const { id, ...taskProps } = item;

    return (
      <TodoItem
        checkHandler={() => updateCheck(id)}
        deleteHandler={() => {
          deleteItem(id);
        }}
        taskDone={() => {
          doneTask(id);
        }}
        key={id}
        {...taskProps}
      />
    );
  });

  return (
    <List
        className='list'
      header={<span className='listSpan'>Активных задач : {tasks.length} </span>}
      bordered
    >
      {elements}
    </List>
  );
};


export default TodoList;