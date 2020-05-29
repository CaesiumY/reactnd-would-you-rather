import React, { Component } from "react";
import { connect } from "react-redux";
import CardGridLayout from "../layout/CardGridLayout";
import VotedCard from "../VotedCard";
import UnvotedCard from "../UnvotedCard";

export class PollDetail extends Component {
  render() {
    const { question, users, isVoted, userVote, qid } = this.props;
    const { author, optionOne, optionTwo } = question;

    return (
      <CardGridLayout
        avatarURL={users[author].avatarURL}
        data={question}
        type="detail"
      >
        {isVoted === true ? (
          <VotedCard
            userVote={userVote}
            optionOne={optionOne}
            optionTwo={optionTwo}
          ></VotedCard>
        ) : (
          <UnvotedCard
            optionOne={optionOne}
            optionTwo={optionTwo}
            qid={qid}
          ></UnvotedCard>
        )}
      </CardGridLayout>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { location }) {
  const qid = location.pathname.split("/")[2];
  const question = questions[qid];
  const isVoted = Object.keys(users[authedUser].answers).includes(qid);

  const userVote = users[authedUser].answers[qid];
  return {
    qid,
    question,
    users,
    isVoted,
    userVote,
  };
}

export default connect(mapStateToProps)(PollDetail);
