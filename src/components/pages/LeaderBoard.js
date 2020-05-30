import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Divider } from "antd";
import { TrophyTwoTone } from "@ant-design/icons";
import AvatarInCard from "../AvatarInCard";
import { setPage } from "../../actions/currentPage";

export class LeaderBoard extends Component {
  state = {
    colorSet: ["#fbbd08", "#767676", "#f2711c"],
  };

  componentDidMount() {
    this.props.dispatch(setPage("leaderboard"));
  }

  render() {
    return (
      <div style={{ margin: "30px 15px" }}>
        {this.props.leaderBoardData.map((user, index) => (
          <Card
            key={user.id}
            style={{
              width: "100%",
              border: "1px solid #d4d4d5",
              borderTop: `3px solid ${this.state.colorSet[index]}`,
              marginBottom: "20px",
            }}
            headStyle={{
              borderBottom: "1px solid #d4d4d5",
            }}
            title={
              <CardTitle
                colorSet={this.state.colorSet}
                title={user.name}
                rank={index}
              ></CardTitle>
            }
          >
            <AvatarInCard avatarURL={user.avatarURL}></AvatarInCard>

            <Card.Grid
              hoverable={false}
              style={{ width: "50%", boxShadow: "none" }}
            >
              <div style={{ fontSize: "1rem" }}>
                Answered Questions :{" "}
                <span style={{ fontWeight: "bold" }}>{user.answerCount}</span>
              </div>
              <Divider />
              <div style={{ fontSize: "1rem" }}>
                Created Questions :{" "}
                <span style={{ fontWeight: "bold" }}>{user.questionCount}</span>
              </div>
            </Card.Grid>
            <h2
              style={{
                textAlign: "center",
                margin: "10px 0 0 0",
              }}
            >
              Total
            </h2>
            <Card.Grid
              hoverable={false}
              style={{
                width: "25%",
                boxShadow: "none",
                textAlign: "center",
                padding: 0,
              }}
            >
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: this.state.colorSet[index],
                }}
              >
                {user.totalCount}
              </span>
            </Card.Grid>
          </Card>
        ))}
      </div>
    );
  }
}

function CardTitle(props) {
  return (
    <>
      <TrophyTwoTone
        twoToneColor={props.colorSet[props.rank]}
        style={{ fontSize: "2rem" }}
      />
      <h2 style={{ margin: "0 1rem", display: "inline" }}>{props.title}</h2>
    </>
  );
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
