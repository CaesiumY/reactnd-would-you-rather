import React, { Component } from "react";
import PropTypes from "prop-types";

import CardGridLayout from "./layout/CardGridLayout";

export class UnansweredTab extends Component {
  static propTypes = {
    unansweredData: PropTypes.array.isRequired,
    users: PropTypes.object.isRequired,
  };

  render() {
    const { users } = this.props;
    return (
      <>
        {this.props.unansweredData.map((data) => (
          <CardGridLayout
            key={data.id}
            avatarURL={users[data.author].avatarURL}
            data={data}
            type="unanswered"
          ></CardGridLayout>
        ))}
      </>
    );
  }
}

export default UnansweredTab;
