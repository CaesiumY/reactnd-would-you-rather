import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import AvatarInCard from "./AvatarInCard";

export class UnansweredTab extends Component {
  static propTypes = {
    unansweredData: PropTypes.array.isRequired,
    users: PropTypes.object.isRequired,
  };

  render() {
    return (
      <>
        {this.props.unansweredData.map((data) => (
          <Card
            key={data.id}
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
            title={data.author}
          >
            <AvatarInCard
              avatarURL={this.props.users[data.author].avatarURL}
            ></AvatarInCard>
            <Card.Grid
              hoverable={false}
              style={{ width: "75%", boxShadow: "none" }}
            >
              <h2>Would you rather...</h2>
              <div style={{ fontSize: "1rem" }}>
                {data.optionOne.text} or...
              </div>
              <Link to={`/questions/${data.id}`}>
                <Button
                  type="primary"
                  block
                  shape="round"
                  style={{ marginTop: "15px" }}
                >
                  Answer Poll
                </Button>
              </Link>
            </Card.Grid>
          </Card>
        ))}
      </>
    );
  }
}

export default UnansweredTab;
