import React, { Component } from "react";
import { Card, Button, Select, Divider } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const { Option } = Select;

export class LoginPage extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div>
        <Card
          title={<CardTitle />}
          style={{
            textAlign: "center",
            margin: "15px",
            border: "1px solid #d4d4d5",
          }}
          headStyle={{
            backgroundColor: "#f3f4f5",
            borderBottom: "1px solid #d4d4d5",
          }}
        >
          <img src="/logo192.png" alt="logo" />

          <h1>Sign In</h1>
          <Divider />

          <Select
            style={{ width: "100%", marginBottom: "20px" }}
            onChange={this.handleChange}
            placeholder="Select your ID"
            size="large"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>

            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Button
            type="primary"
            block
            icon={<LoginOutlined />}
            style={{ height: "40px", fontSize: "1rem" }}
          >
            Login
          </Button>
        </Card>
      </div>
    );
  }
}

export default LoginPage;

function CardTitle() {
  return (
    <>
      <h3>Welcome to the Would You Rather App!</h3>
      <p style={{ marginBottom: 0 }}>Please sign in to continue</p>
    </>
  );
}
