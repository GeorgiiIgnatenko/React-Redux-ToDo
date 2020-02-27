import React from "react";
import { Button , Input } from "antd";
import 'antd/dist/antd.css';

const TodoAdder = ({addItem}) => {

    const addHandler = (titleName) => {
        addItem(titleName)
    }

    return (
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <form
            onSubmit={e =>{
                e.preventDefault()
                console.log(e);
                addHandler();
            }}

        >
          <Input
            style={{
              width: "500px",
              marginRight: "10px"
            }}
            onChange={(e)=>{
                console.log(e.target.value)
            }}

          />
          <Button
            type="primary"
          >
            Добавить задачу
          </Button>
        </form>
      </section>
    );
};

export default TodoAdder;