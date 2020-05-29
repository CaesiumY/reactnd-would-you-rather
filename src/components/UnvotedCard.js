import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Radio, Button } from "antd";
import { handleAddAnswer } from "../actions/questions";

export class UnvotedCard extends Component {
  static propTypes = {
    optionOne: PropTypes.object.isRequired,
    optionTwo: PropTypes.object.isRequired,
  };
  state = {
    value: "",
    toHome: false,
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    const { dispatch, qid } = this.props;

    console.log("value:", value, qid);
    dispatch(handleAddAnswer(qid, value));

    // this.setState({
    //   toHome: true,
    // });
  };

  render() {
    const { optionOne, optionTwo } = this.props;
    const { toHome, value } = this.state;
    const isDisabled = value === "";

    if (toHome) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <>
        <Radio.Group onChange={this.onChange} value={value}>
          <Radio
            value={"optionOne"}
            style={{ display: "block", height: "30px", lineHeight: "30px" }}
          >
            {optionOne.text}
          </Radio>
          <Radio
            value={"optionTwo"}
            style={{ display: "block", height: "30px", lineHeight: "30px" }}
          >
            {optionTwo.text}
          </Radio>
        </Radio.Group>
        <Button
          type="primary"
          block
          shape="round"
          disabled={isDisabled}
          style={{ marginTop: "15px" }}
          onClick={this.handleSubmit}
        >
          Submit Answer
        </Button>
      </>
    );
  }
}

export default connect()(UnvotedCard);
