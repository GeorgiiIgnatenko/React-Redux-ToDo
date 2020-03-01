import React, {Component} from "react";
import { Button , Input } from "antd";
import 'antd/dist/antd.css';

export default class TodoAdder extends Component{

    state = {
       title: ''
    };

    onInputChange = (e) =>{
        this.setState({
            title: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
    };

    render() {
        return (
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <form
                    onSubmit={this.onSubmit}
                >
                    <Input
                        style={{
                            width: "500px",
                            marginRight: "10px"
                        }}
                        onChange={this.onInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.onSubmit}
                    >
                        Добавить задачу
                    </Button>
                </form>
            </section>
        );
    };
    }
