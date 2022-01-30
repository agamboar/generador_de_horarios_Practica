import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Card, Modal, Button } from "antd";
import "../assets/css/Cards.css";
import "../assets/css/Modals.css";

const { Text } = Typography;

export default class Bloque extends Component {
  state = {
    isModalVisible: false,
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    if (this.props.ramo === null) {
      return (
        <Fragment>
          {/* 
        <div className="col col-md-2">
          <div className="card border-primary text-center">
            <h6 className="card-text d-inline-block text-truncate">
              <font size="2">&nbsp;</font>
            </h6>
            <p className="card-texts">
              <font size="2">&nbsp;</font>
            </p>
          </div>
        </div>
      
      */}
          <Card
            bodyStyle={{
              backgroundColor: "white",
              padding: "0px",
              width: 210,
              height: 110,
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "10px",
              borderColor: "#008cdb",
            }}
          ></Card>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {/* 
          <div className="col col-md-2">
            <div
              className="card border-primary text-center"
              style={{ background: "#008cdb" }}
            >
              <h6 className="card-text d-inline-block text-truncate">
                <font size="2">&nbsp; {this.props.ramo.nombre} </font>
              </h6>
              <p className="card-texts">
                <font size="2">
                  &nbsp; Sección {this.props.ramo.nro_seccion}{" "}
                </font>
              </p>
            </div>
          </div>
          */}
          {console.log(this.props)}
          <Modal
            centered
            title={this.props.ramo.nombre}
            visible={this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="dismiss" type="primary" onClick={this.handleOk}>
                Aceptar
              </Button>,
            ]}
          >
            <Text>Sección {this.props.ramo.nro_seccion}</Text>
            <br />
            <Text>Profesor: {this.props.ramo.eventos[0].profesor}</Text>
            <br />
            <Text>Módulo: {this.props.ramo.horario}</Text>
            <br />
          </Modal>
          <Card
            bodyStyle={{
              backgroundColor: "#008cdb",
              padding: "0px",
              width: 210,
              height: 110,
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "10px",
              borderColor: "#008cdb",
            }}
            onClick={this.showModal}
          >
            <Row align="middle" justify="center" style={{ padding: "5px" }}>
              <Col span={24}>
                <Text strong style={{ color: "white" }}>
                  {this.props.ramo.nombre}
                </Text>
              </Col>
            </Row>
            <Row align="middle" justify="center" style={{ padding: "5px" }}>
              <Col span={24}>
                <Text style={{ color: "white" }}>
                  Sección {this.props.ramo.nro_seccion}
                </Text>
              </Col>
            </Row>
          </Card>
        </Fragment>
      );
    }
  }
}
/*
    style={{background: '#81C53D'}}


*/
