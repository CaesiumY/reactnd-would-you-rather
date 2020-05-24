import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { setAuthedUser } from "../actions/authedUser";

import { Menu } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  HomeFilled,
  AppstoreAddOutlined,
  FundFilled,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export class NavBar extends Component {
  state = {
    current: "home",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  handleLogout = (e) => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ fontWeight: "bold" }}
      >
        <Menu.Item icon={<HomeFilled />} key="home">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<AppstoreAddOutlined />} key="new">
          <NavLink to="/add" exact>
            New Poll
          </NavLink>
        </Menu.Item>
        <Menu.Item icon={<FundFilled />} key="leaderboard">
          <NavLink to="/leaderboard" exact>
            Leader Board
          </NavLink>
        </Menu.Item>

        <SubMenu icon={<UserOutlined />} title={this.props.username}>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            style={{ marginLeft: "auto" }}
            onClick={this.handleLogout}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    username: users[authedUser].name,
  };
}

export default connect(mapStateToProps)(NavBar);
