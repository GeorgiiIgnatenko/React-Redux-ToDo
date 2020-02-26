import React from "react";
import TodoItem from "./todoItem";
import { List } from 'antd';
import 'antd/dist/antd.css';

const TodoList = ({updateData, tasks }) =>{

    let elements = tasks.map(( item ) => {
        const {id, ...taskProps } = item;

        return (
            <TodoItem
                checkHandler={()=>{
                    updateData(id);
                }}
                key={id} {...taskProps}
            />)
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