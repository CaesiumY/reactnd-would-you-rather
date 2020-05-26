import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Card, Button } from "antd";
import AvatarInCard from "./AvatarInCard";

export class UnansweredTab extends Component {
  //   static propTypes = {};

  render() {
    return (
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
        title="Unanswered"
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
    );
  }
}

export default UnansweredTab;
