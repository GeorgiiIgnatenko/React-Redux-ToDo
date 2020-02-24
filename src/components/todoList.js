import React from "react";
import TodoItem from "./todoItem";
import { List } from 'antd';
import 'antd/dist/antd.css';

const TodoList = () =>{
    return(
        <List
            style={{marginTop:'20px',width:'655px',}}
            header={ <h2>Активных задач : {} </h2> }
            bordered
        >
            <TodoItem/>
        </List>
    );
}


export default TodoList;