import React from "react";
import TodoItem from "./todoItem";
import { List } from 'antd';
import 'antd/dist/antd.css';

const TodoList = ({ tasks }) =>{

    let elements = tasks.map(( item ) => {
        const {id, ...itemProps } = item;
        return (
          <TodoItem
            boxChecked={() => {
              console.log(id + " box checked");
            }}
            key={id}
            {...itemProps}
          />
        );
    });

    return(
        <List
            style={{marginTop:'20px',width:'655px',}}
            header={ <h2>Активных задач : { tasks.length } </h2> }
            bordered
        >
            { elements }
        </List>
    )

}


export default TodoList;