import React, { Component, Fragment } from "react";
import { Typography, Col, Row, Card, Divider } from "antd";
import "../assets/css/Cards.css";

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
            textAlign: "-webkit-center",
          }}
        >
          <Row align="middle" justify="center" style={{ padding: "5px" }}>
            <Col span={24}>
              <Text strong>{this.props.codigo}</Text>
            </Col>
          </Row>
          <Row align="middle" justify="center" style={{ padding: "5px" }}>
            <Col span={24}>
              <Text>{this.props.ramo}</Text>
            </Col>
          </Row>

          <Row
            justify="center"
            align="middle"
            style={{ position: "absolute", bottom: 0, width: 110 }}
          >
            <Divider
              style={{
                "background-color": "black",
                height: "1px",
                margin: "0px",
                right: 0,
              }}
            />
            <Col
              span={6}
              style={{
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              <Text>{this.props.id}</Text>
            </Col>
            <Divider
              style={{ "background-color": "black", height: "30px" }}
              type="vertical"
            />
            <Col
              span={13}
              style={{
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
