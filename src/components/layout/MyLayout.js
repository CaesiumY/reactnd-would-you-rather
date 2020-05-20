import React, { Component } from "react";
import { connect } from "react-redux";

import { hadleInitialData } from "../../actions/shared";

class MyLayout extends Component {
  componentDidMount() {
    this.props.dispatch(hadleInitialData());
  }

  render() {
    return <div className="my-layout">{this.props.children}</div>;
  }
}

export default connect()(MyLayout);
