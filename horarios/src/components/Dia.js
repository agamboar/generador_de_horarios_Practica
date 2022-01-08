import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default class Dia extends Component {
  render() {
    return (
      <div className="col text-center col-md-2">
        <Title level={2}>{this.props.dia}</Title>
      </div>
    );
  }
}
