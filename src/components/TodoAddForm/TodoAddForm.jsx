import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Input } from "antd";
import "antd/dist/antd.css";
import "./todoAddForm.css";
import { createTask } from "../../redux/actions";

class TodoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  onInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.title.trim()) {
      const newTask = {
        title: this.state.title,
        id: Date.now().toString()
      };
      this.props.createTask(newTask);
    }
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <section className="todoAdder">
        <Form className="todoAdderForm" onSubmit={this.onSubmit}>
          <Form.Item
            className="todoAdderInput"
            rules={[
              {
                required: true,
                message: "Введите название задачи!"
              }
            ]}
          >
            <Input
              value={this.state.title}
              onChange={this.onInputChange}
              required
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Добавить задачу
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}
const mapDispatchToProps = {
  createTask
};

export default connect(null,mapDispatchToProps)(TodoAddForm)
