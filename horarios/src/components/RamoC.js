import React, { Component, Fragment } from "react";
import { Typography, Col, Row, Card } from "antd";

const { Text } = Typography;

export default class Ramo extends Component {
  render() {
    if (this.props.state === null) {
      return (
        <Fragment>
          <Card
            bodyStyle={{
              backgroundColor: "#28B463",
              padding: "0px",
              width: 112,
              height: 120,
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "10px",
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
          </Card>
        </Fragment>
      );
    } else if (this.props.state[0] === true) {
      return (
        <Fragment>
          <Card
            bodyStyle={{
              backgroundColor: "#ff6242",
              padding: "0px",
              width: 112,
              height: 120,
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "10px",
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
          </Card>
        </Fragment>
      );
    } else if (this.props.state[0] === false) {
      if (this.props.state[1] === 1) {
        return (
          <Fragment>
            <Card
              bodyStyle={{
                backgroundColor: "#FFD44F",
                padding: "0px",
                width: 112,
                height: 120,
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "10px",
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
            </Card>
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            <Card
              bodyStyle={{
                padding: "0px",
                width: 112,
                height: 120,
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "10px",
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
            </Card>
          </Fragment>
        );
      }
    }
  }
}

/*
     verde #28B463     rojo #FF3E17      
     
*/
