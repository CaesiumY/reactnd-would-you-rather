import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AvatarInCard from "../AvatarInCard";
import { Card, Radio, Button } from "antd";

export class PollDetail extends Component {
  state = {
    value: "",
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { question, users } = this.props;
    const { author, optionOne, optionTwo } = question;

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
            <Radio.Group onChange={this.onChange} value={this.state.value}>
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
          <Link to={`/`}>
            <Button
              type="primary"
              block
              shape="round"
              style={{ marginTop: "15px" }}
            >
              Answer
            </Button>
          </Link>
        </Card.Grid>
      </Card>
    );
  }
}

function mapStateToProps({ users, questions }, { location }) {
  const qid = location.pathname.split("/")[2];
  const question = questions[qid];
  return {
    qid,
    question,
    users,
  };
}

export default connect(mapStateToProps)(PollDetail);
