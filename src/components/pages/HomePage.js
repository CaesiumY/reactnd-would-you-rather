import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredTab from "../AnsweredTab";

import { Card } from "antd";
import UnansweredTab from "../UnansweredTab";

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
          {this.state.key === "Unanswered" ? (
            <UnansweredTab
              unansweredData={this.props.unanswered}
            ></UnansweredTab>
          ) : (
            <AnsweredTab answeredData={this.props.answered}></AnsweredTab>
          )}
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
