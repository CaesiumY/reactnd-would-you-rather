import React, { Component } from "react";

export default class MyLayout extends Component {
  render() {
    return <div className="my-layout">{this.props.children}</div>;
  }
}
