import React, { Component, Fragment } from "react";
import { Typography, Col, Row, Card } from "antd";

const { Text } = Typography;

export default class Ramo extends Component {
  render() {
    return (
      <Fragment>
        {/*<div className="col" >  
                <div className="card border-primary text-center" style={{background: this.props.color}} id='bordes' >                  
                    <h6 className="card-title"><font size="2">{this.props.codigo}</font></h6>
                    <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                </div>
        </div>    */}
        <Card
          bodyStyle={{
            backgroundColor: this.props.color,
            padding: "0px",
            width: 112,
            height: 120,
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "10px",
          }}
        >
          <Row align="middle" justify="left" style={{ padding: "5px" }}>
            <Col span={24}>
              <Text strong>{this.props.codigo}</Text>
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ padding: "5px" }}>
            <Col align="middle" justify="left" span={24}>
              <Text>{this.props.ramo}</Text>
            </Col>
          </Row>
          <Row style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
            <Col
              align="middle"
              justify="center"
              span={9}
              style={{
                borderStyle: "solid",
                borderWidth: "1px 1px 0px 0px",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              <Text>{this.props.id}</Text>
            </Col>
            <Col
              align="middle"
              justify="center"
              span={15}
              style={{
                borderStyle: "solid",
                borderWidth: "1px 0px 0px 0px",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              <Text>{this.props.req}</Text>
            </Col>
          </Row>
        </Card>
      </Fragment>
    );
  }
}
/*
    style={{background: '#81C53D'}}
    Amarillo    <div className="card border-primary text-center bg-warning" >
    Azul        <div className="card border-primary text-center bg-info" >  


*/
