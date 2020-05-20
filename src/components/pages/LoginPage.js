import React, { Component } from "react";
import { Card, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <Card
          title={<CardTitle />}
          style={{ textAlign: "center", margin: "15px" }}
          headStyle={{ backgroundColor: "#f3f4f5" }}
        >
          <img src="/logo192.png" alt="logo" />
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
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
