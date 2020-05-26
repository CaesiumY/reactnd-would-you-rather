import React from "react";
import PropTypes from "prop-types";
import { Avatar, Card } from "antd";

function AvatarInCard(props) {
  return (
    <Card.Grid
      hoverable={false}
      style={{
        width: "25%",
        boxShadow: "none",
      }}
    >
      <Avatar src={props.avatarURL} size={96} style={{ margin: "0 auto" }} />
    </Card.Grid>
  );
}

AvatarInCard.propTypes = {
  avatarURL: PropTypes.string.isRequired,
};

export default AvatarInCard;
