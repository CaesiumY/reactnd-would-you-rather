import React, { Component } from "react";
import { connect } from "react-redux";

export class PollDetail extends Component {
  render() {
    const { location, questions } = this.props;
    const qid = location.pathname.split("/")[2];

    return <div>{qid}</div>;
  }
}

function mapStateToProps({ users, questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(PollDetail);
