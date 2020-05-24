import React, { Component } from "react";
import { Card, Input, Divider, Button } from "antd";
import { FormOutlined } from "@ant-design/icons";

export class NewQuestion extends Component {
  state = {
    option1: "",
    option2: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <div style={{ margin: "30px 15px" }}>
        <Card
          title="Create a New Poll"
          style={{
            width: "100%",
            border: "1px solid #d4d4d5",
            marginBottom: "20px",
          }}
          headStyle={{
            backgroundColor: "#f3f4f5",
            borderBottom: "1px solid #d4d4d5",
            fontSize: "1.5rem",
          }}
        >
          <h3>Complete the Question: </h3>
          <h1>Would you rather...</h1>
          <Input
            name="option1"
            size="large"
            placeholder="Enter Option One"
            allowClear
            onChange={this.handleChange}
          />
          <Divider>OR</Divider>
          <Input
            name="option2"
            size="large"
            placeholder="Enter Option Two"
            allowClear
            onChange={this.handleChange}
          />

          <Button
            type="primary"
            block
            icon={<FormOutlined />}
            size="large"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </Card>
      </div>
    );
  }
}

export default NewQuestion;
