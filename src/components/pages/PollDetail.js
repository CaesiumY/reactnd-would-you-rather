import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AvatarInCard from "../AvatarInCard";
import { Card, Radio, Button } from "antd";

export class PollDetail extends Component {
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
    console.log("value:", value);
    this.setState({
      toHome: true,
    });
  };

  render() {
    const { value, toHome } = this.state;
    const { question, users } = this.props;
    const { author, optionOne, optionTwo } = question;
    const isDisabled = value === "";

    if (toHome) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <Card
        style={{
          marginTop: 16,
          border: "1px solid #d4d4d5",
          borderTop: "3px solid grey",
        }}
        type="inner"
        headStyle={{
          backgroundColor: "#f3f4f5",
          borderBottom: "1px solid #d4d4d5",
        }}
        title={author}
      >
        <AvatarInCard avatarURL={users[author].avatarURL}></AvatarInCard>
        <Card.Grid
          hoverable={false}
          style={{ width: "75%", boxShadow: "none" }}
        >
          <h2>Would you rather...</h2>
          <div style={{ fontSize: "1rem" }}>
            <Radio.Group onChange={this.onChange} value={value}>
              <Radio
                value={1}
                style={{ display: "block", height: "30px", lineHeight: "30px" }}
              >
                {optionOne.text}
              </Radio>
              <Radio
                value={2}
                style={{ display: "block", height: "30px", lineHeight: "30px" }}
              >
                {optionTwo.text}
              </Radio>
            </Radio.Group>
          </div>
          <Button
            type="primary"
            block
            shape="round"
            disabled={isDisabled}
            style={{ marginTop: "15px" }}
            onClick={this.handleSubmit}
          >
            Answer
          </Button>
        </Card.Grid>
      </Card>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { location }) {
  const qid = location.pathname.split("/")[2];
  const question = questions[qid];
  const isVoted = Object.keys(users[authedUser].answers).includes(qid);
  const optionOneCount = question.optionOne.votes.length;
  const optionTwoCount = question.optionTwo.votes.length;
  const userVote = users[authedUser].answers[qid];
  return {
    question,
    users,
    isVoted,
    optionOneCount,
    optionTwoCount,
    userVote,
  };
}

export default connect(mapStateToProps)(PollDetail);
