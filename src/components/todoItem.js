import React from "react";
import { List, Checkbox, Button } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./todoItem.css"

const TodoItem = ({ checkHandler, deleteHandler, taskDone, ...taskProps }) => {
  return (
    <div>
      <List.Item>
        <Checkbox style={{ marginRight: "15px" }} onChange={checkHandler} />
        <p
            className='listItemLabel'
          style={{
            fontWeight: taskProps.checked ? "bold" : "normal",
            textDecoration: taskProps.done ? "line-through" : "none",
          }}
        >
          {taskProps.title}
        </p>
        <div>
          <Button
            type="danger"
            style={{ marginRight: "10px" }}
            onClick={deleteHandler}
          >
            <DeleteOutlined />
          </Button>
          <Button type="primary" onClick={taskDone}>
            <CheckOutlined />
          </Button>
        </div>
      </List.Item>
    </div>
  );
};

export default TodoItem;
