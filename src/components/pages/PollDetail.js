import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Radio, Button, Progress, Divider } from "antd";
import CardGridLayout from "../layout/CardGridLayout";

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
    const {
      question,
      users,
      isVoted,
      userVote,
      optionOneCount,
      optionTwoCount,
    } = this.props;
    const { author, optionOne, optionTwo } = question;
    const isDisabled = value === "";
    const totalCount = optionOneCount + optionTwoCount;
    const optionOneRatio = (optionOneCount / totalCount) * 100;
    const optionTwoRatio = (optionTwoCount / totalCount) * 100;

    if (toHome) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <CardGridLayout
        avatarURL={users[author].avatarURL}
        data={question}
        type="detail"
      >
        {isVoted === true ? (
          <>
            <Divider orientation="left">Results</Divider>
            {/* <h1>Results: </h1> */}
            <ul>
              <li
                style={{
                  border: userVote === "optionOne" && "5px solid #2ecc71",
                  borderRadius: "15px",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <h3>{optionOne.text}</h3>
                <Progress
                  status={userVote === "optionOne" ? "active" : "normal"}
                  percent={Math.round(optionOneRatio)}
                  strokeColor={
                    optionOneRatio >= optionTwoRatio ? "#2ecc71" : "grey"
                  }
                />
                <p>
                  {optionOneCount} out of {totalCount} votes
                </p>
              </li>
              <li
                style={{
                  border: userVote === "optionTwo" && "5px solid #2ecc71",
                  borderRadius: "15px",
                  padding: "10px",
                  marginTop: "10px",
                }}
              >
                <h3>{optionTwo.text}</h3>
                <Progress
                  status={userVote === "optionTwo" ? "active" : "normal"}
                  percent={Math.round(optionTwoRatio)}
                  strokeColor={
                    optionTwoRatio >= optionOneRatio ? "#2ecc71" : "grey"
                  }
                />
                <p>
                  {optionTwoCount} out of {totalCount} votes
                </p>
              </li>
            </ul>
          </>
        ) : (
          <>
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
        )}
      </CardGridLayout>
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
