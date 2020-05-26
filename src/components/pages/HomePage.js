import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, Button } from "antd";
import AvatarInCard from "../AvatarInCard";

const tabListNoTitle = [
  {
    key: "Unanswered",
    tab: "Unanswered",
  },
  {
    key: "Answered",
    tab: "Answered",
  },
];
export class HomePage extends Component {
  state = {
    key: "Unanswered",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div style={{ margin: "30px 0" }}>
        <Card
          style={{ width: "100%", border: "1px solid #d4d4d5" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.key}
          onTabChange={(key) => {
            this.onTabChange(key, "key");
          }}
        >
          <Card
            style={{
              marginTop: 16,
              border: "1px solid #d4d4d5",
              borderTop: "3px solid skyblue",
            }}
            type="inner"
            headStyle={{
              backgroundColor: "#f3f4f5",
              borderBottom: "1px solid #d4d4d5",
            }}
            title="Inner Card title"
          >
            <AvatarInCard avatarURL="https://reactnd-would-you-rather.netlify.app/images/avatars/lion.png"></AvatarInCard>
            <Card.Grid
              hoverable={false}
              style={{ width: "75%", boxShadow: "none" }}
            >
              <h2>Would you rather...</h2>
              <div style={{ fontSize: "1rem" }}>write JavaScript or...</div>
              <Button
                type="primary"
                block
                shape="round"
                style={{ marginTop: "15px" }}
              >
                Answer Poll
              </Button>
            </Card.Grid>
          </Card>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const qid = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter((q) => {
      return qid.includes(q.id);
    })
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((q) => {
      return !qid.includes(q.id);
    })
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    qid,
    answered,
    unanswered,
  };
}

export default connect(mapStateToProps)(HomePage);
