import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Divider } from "antd";
import { TrophyTwoTone } from "@ant-design/icons";

export class LeaderBoard extends Component {
  state = {
    colorSet: ["#fbbd08", "#767676", "#f2711c"],
  };

  render() {
    return (
      <div style={{ margin: "30px 15px" }}>
        <Card
          style={{ width: "100%", border: "1px solid #d4d4d5" }}
          headStyle={{
            borderBottom: "1px solid #d4d4d5",
          }}
          title={
            <CardTitle
              colorSet={this.state.colorSet}
              title="sample"
            ></CardTitle>
          }
        >
          <Card.Grid
            hoverable={false}
            style={{ width: "25%", boxShadow: "none" }}
          >
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              size={84}
              style={{ margin: "0 auto" }}
            />
          </Card.Grid>

          <Card.Grid
            hoverable={false}
            style={{ width: "50%", boxShadow: "none" }}
          >
            <div>
              Answered Questions : <span>5</span>
            </div>
            <Divider />
            <div>
              Created Questions : <span>5</span>
            </div>
          </Card.Grid>
          <h2 style={{ textAlign: "center" }}>Score</h2>
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
              }}
            >
              6
            </span>
          </Card.Grid>
        </Card>
      </div>
    );
  }
}

function CardTitle(props) {
  return (
    <>
      <TrophyTwoTone
        twoToneColor={props.colorSet[0]}
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
