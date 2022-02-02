import React, { Component, Fragment } from "react";
import { Typography, Col, Row, Card } from "antd";

const { Text } = Typography;

export default class ARamo extends Component {
  render() {
    if (!this.props.show) {
      return (
        <Fragment>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.props.onChange1}
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              padding: "0px",
              width: 113,
              height: 120,
              fontSize: "13px",
            }}
          >
            <Row align="top" justify="left" style={{ padding: "5px" }}>
              <Col span={24}>
                <Text strong>{this.props.codigo}</Text>
              </Col>
            </Row>
            <Row align="middle" justify="center" style={{ padding: "5px" }}>
              <Col align="middle" justify="left" span={24}>
                <Text>{this.props.ramo}</Text>
              </Col>
            </Row>
          </button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.props.onChange1}
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              padding: "0px",
              width: 113,
              height: 120,
              fontSize: "12px",
            }}
          >
            <Row align="middle" justify="left" style={{ padding: "5px" }}>
              <Col span={24}>
                <Text strong>Aprobé</Text>
              </Col>
            </Row>
            <Row align="middle" justify="center" style={{ padding: "5px" }}>
              <Col align="middle" justify="left" span={24}>
                <Text>{this.props.ramo}</Text>
              </Col>
            </Row>
          </button>
        </Fragment>
      );
    }
  }
}
