import React from "react";
import { List, Checkbox, Button } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import {useDispatch,useSelector} from "react-redux";
import "antd/dist/antd.css";
import "./todoItem.css"
import {markTask, deleteTask, doneTask} from "../../redux/actions";

const TodoItem = ({title,id}) => {
  const checkSelector = useSelector(state => state.tasksReducer.find(el => el.id === id).marked);
  const doneSelector = useSelector(state => state.tasksReducer.find(el => el.id === id).done);
  const dispatch = useDispatch();

  const checkboxHandler = () => {
    dispatch(markTask(id))
  };
  const delBtnHandler = () => {
    dispatch(deleteTask(id))
  };
  const doneBtnHandler = () => {
    dispatch(doneTask(id))
  };
  return (
    <div>
      <List.Item>
        <Checkbox
            style={{ marginRight: "15px" }}
            onClick={() => checkboxHandler()}
        />
        <p
            className='listItemLabel'
          style={{
            fontWeight: checkSelector ? "bold" : "normal",
            textDecoration: doneSelector ? "line-through" : "none",
          }}
        >
          {title}
        </p>
        <div>
          <Button
            type="danger"
            style={{ marginRight: "10px" }}
            onClick={() => delBtnHandler()}
          >
            <DeleteOutlined />
          </Button>
          <Button
              type="primary"
              onClick={() => doneBtnHandler()}
          >
            <CheckOutlined />
          </Button>
        </div>
      </List.Item>
    </div>
  );
};

export default TodoItem;
