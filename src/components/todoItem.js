import React from "react";
import { List, Checkbox, Button, Icon } from "antd";
import "antd/dist/antd.css";

const TodoItem = ( {checkHandler, ...taskProps} ) => {

  return (
    <div>
      <List.Item>
        <Checkbox style={{ marginRight: "15px" }} onChange={checkHandler} />
        <p
          style={{
            fontWeight: taskProps.checked ? "bold" : "normal",
            fontSize: "15px",
            margin: 0
          }}
        >
          {taskProps.title}
        </p>
        <div>
          <Button type="danger" style={{ marginRight: "10px" }}>
            <Icon type="delete" />
          </Button>
          <Button type="primary">
            <Icon type="edit" />
          </Button>
        </div>
      </List.Item>
    </div>
  );
};

export default TodoItem;
