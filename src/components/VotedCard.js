import React, { Component } from "react";
import PropTypes from "prop-types";
import { Divider, Progress } from "antd";

export class VotedCard extends Component {
  static propTypes = {
    userVote: PropTypes.string.isRequired,
    optionOne: PropTypes.object.isRequired,
    optionTwo: PropTypes.object.isRequired,
  };

  render() {
    const { userVote, optionOne, optionTwo } = this.props;
    const optionOneCount = optionOne.votes.length;
    const optionTwoCount = optionTwo.votes.length;
    const totalCount = optionOneCount + optionTwoCount;
    const optionOneRatio = (optionOneCount / totalCount) * 100;
    const optionTwoRatio = (optionTwoCount / totalCount) * 100;
    return (
      <>
        <Divider orientation="left">Results</Divider>
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
    );
  }
}

export default VotedCard;
