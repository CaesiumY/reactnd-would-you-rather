import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import AvatarInCard from "../AvatarInCard";

function CardGridLayout({ data, avatarURL, type, children }) {
  return (
    <Card
      style={{
        marginTop: 16,
        border: "1px solid #d4d4d5",
        borderTop: type === "answered" ? "3px solid grey" : "3px solid skyblue",
      }}
      type="inner"
      headStyle={{
        backgroundColor: "#f3f4f5",
        borderBottom: "1px solid #d4d4d5",
      }}
      title={data.author}
    >
      <AvatarInCard avatarURL={avatarURL}></AvatarInCard>
      <Card.Grid hoverable={false} style={{ width: "75%", boxShadow: "none" }}>
        <h2>Would you rather...</h2>
        <div style={{ fontSize: "1rem" }}>{data.optionOne.text} or...</div>
        {type === "unanswered" || type === "answered" ? (
          <Link to={`/questions/${data.id}`}>
            <Button
              type={type === "unanswered" ? "primary" : "ghost"}
              block
              shape="round"
              style={{ marginTop: "15px" }}
            >
              {type === "unanswered" ? "Answer Poll" : "Results"}
            </Button>
          </Link>
        ) : (
          children
        )}
      </Card.Grid>
    </Card>
  );
}

export default CardGridLayout;
