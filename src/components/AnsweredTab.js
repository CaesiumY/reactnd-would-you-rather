import React, { Component } from "react";
import PropTypes from "prop-types";
import CardGridLayout from "./layout/CardGridLayout";

export class AnsweredTab extends Component {
  static propTypes = {
    answeredData: PropTypes.array.isRequired,
    users: PropTypes.object.isRequired,
  };

  render() {
    const { users } = this.props;

    return (
      <>
        {this.props.answeredData.map((data) => (
          <CardGridLayout
            key={data.id}
            avatarURL={users[data.author].avatarURL}
            data={data}
            type="answered"
          ></CardGridLayout>
        ))}
      </>
    );
  }
}

export default AnsweredTab;
