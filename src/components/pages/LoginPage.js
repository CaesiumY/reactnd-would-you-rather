import React, { Component } from "react";
import { connect } from "react-redux";

import { setAuthedUser } from "../../actions/authedUser";

import { Card, Button, Select, Divider } from "antd";
import { LoginOutlined } from "@ant-design/icons";
const { Option } = Select;

export class LoginPage extends Component {
  state = {
    isDisabled: true,
    selected: "",
  };

  handleChange = (value) => {
    this.setState({ selected: value }, () => {
      this.setState({ isDisabled: false });
    });
  };

  handleClick = (e) => {
    this.props.dispatch(setAuthedUser(this.state.selected));
  };

  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    const { users } = this.props;
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
            {users.map((user) => (
              <Option key={user} value={user} style={{ fontSize: "1rem" }}>
                {user}
              </Option>
            ))}
          </Select>

          <Button
            type="primary"
            block
            icon={<LoginOutlined />}
            style={{ height: "40px", fontSize: "1rem" }}
            disabled={this.state.isDisabled}
            onClick={this.handleClick}
          >
            Login
          </Button>
        </Card>
      </div>
    );
  }
}

function CardTitle() {
  return (
    <>
      <h3>Welcome to the Would You Rather App!</h3>
      <p style={{ marginBottom: 0 }}>Please sign in to continue</p>
    </>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users),
  };
}

export default connect(mapStateToProps)(LoginPage);
