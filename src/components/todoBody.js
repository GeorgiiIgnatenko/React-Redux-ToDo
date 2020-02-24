import React from "react";
import { Button , Input } from "antd";
import 'antd/dist/antd.css';

const TodoBody = () => {
    return(
        <section style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Input
                style={{
                    width: '500px',
                    marginRight: '10px'
                }}
            />
            <Button type='primary'>Добавить задачу</Button>
        </section>
    )
}

export default TodoBody;