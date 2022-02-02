import React, { Component, Fragment } from "react";
import { Typography, Row, Col, Card } from "antd";

const { Text, Title } = Typography;

export default class BloqueH extends Component {
  render() {
    return (
      <Fragment>
        <Card
          bodyStyle={{
            padding: "0px",
            width: 160,
            height: 110,
          }}
        >
          <Row
            align="middle"
            justify="center"
            style={{ padding: "5px", paddingRight: "10px" }}
          >
            <Col span={24}>
              <Title
                style={{
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                {this.props.bloque}
              </Title>
              <Text
                level={2}
                style={{
                  fontSize: "20px",
                  textAlign: "right",
                }}
              >
                {this.props.hora}
              </Text>
            </Col>
          </Row>
        </Card>
      </Fragment>
    );
  }
}
/*
    style={{background: '#81C53D'}}


*/
