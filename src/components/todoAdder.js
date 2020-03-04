import React, { Component } from "react";
import { Form,Button, Input } from "antd";
import "antd/dist/antd.css";
import './todoAdder.css'

export default class TodoAdder extends Component {
  state = {
    title: ""
  };

  onInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      title: ''
    });
    this.props.addItem(this.state.title);
  };

  render() {
    return (
      <section className="todoAdder">
        <Form
            className="todoAdderForm"
            onSubmit={this.onSubmit}
        >
          <Form.Item
              className="todoAdderInput"
              rules={[
                {
                  required: true,
                  message: 'Введите название задачи!',
                },
              ]}
          >
            <Input
              value={this.state.title}
              onChange={this.onInputChange}
              required
            />
          </Form.Item>
          <Form.Item>
            <Button
                type="primary"
                htmlType="submit"
            >
              Добавить задачу
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}
