import React, { Component } from "react";
import { connect } from "react-redux";
import { TrophyTwoTone } from "@ant-design/icons";

export class LeaderBoard extends Component {
  state = {
    colorSet: ["#fbbd08", "#767676", "#f2711c"],
  };

  render() {
    return (
      <div>
        <TrophyTwoTone
          twoToneColor={this.state.colorSet[2]}
          style={{ fontSize: "3rem" }}
        />
        LeaderBoard
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const leaderBoardData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      totalCount: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.totalCount - a.totalCount);
  return {
    leaderBoardData,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
