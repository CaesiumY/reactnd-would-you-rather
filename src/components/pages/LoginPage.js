import React, { Component } from "react";
import { Card, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <Card title="Login Page" style={{ textAlign: "center" }}>
          <img src="/logo192.png" alt="logo" />
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <Button type="primary" block icon={<LoginOutlined />}>
            Login
          </Button>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
