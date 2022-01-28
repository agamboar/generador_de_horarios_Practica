import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Horarios from "./Horarios";
import axios from "axios";
import NotAuth from "./NotAuth";
import { Typography, Button, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title, Text } = Typography;

export default class HPosibles extends Component {
  aux = () => {
    //console.log("si")

    setTimeout(function () {
      window.location.href = "http://127.0.0.1:8000/users/usr/PERT";
    }, 3000);
  };
  state = {
    Horarios: null,
  };

  componentDidMount = async () => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/clique/",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    axios(config).then((response) => {
      this.setState({ Horarios: response.data });
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      console.log(this.state.Horarios);
      if (this.state.Horarios === null) {
        return (
          <Fragment>
            <ATRLayout phase={7}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/priorizarSeccion"
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Priorizar Secciones
                  </Button>
                </Col>

                <Col xs={24} sm={12} style={{ textAlign: "center" }}></Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Title
                    style={{
                      textAlign: "center",
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Horarios Posibles
                  </Title>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    A continuación veras los horarios que le recomendamos tomar
                    para su próximo semestre. ¡Esperamos haberle ayudado!
                  </Text>
                </Col>
              </Row>

              <br />
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Title>Se estan obteniendo tus horarios posibles</Title>
                  <Title level={3} type="secondary">
                    Un momento porfavor...
                  </Title>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </Col>
              </Row>
            </ATRLayout>
          </Fragment>
        );
      } else if (this.state.Horarios === "n") {
        return (
          <Fragment>
            <ATRLayout phase={7}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/priorizarSeccion"
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Priorizar Secciones
                  </Button>
                </Col>

                <Col xs={24} sm={12} style={{ textAlign: "center" }}></Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Title
                    style={{
                      textAlign: "center",
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Horarios Posibles
                  </Title>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    A continuación veras los horarios que le recomendamos tomar
                    para su próximo semestre. ¡Esperamos haberle ayudado!
                  </Text>
                </Col>
              </Row>
              <br />
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Title>
                    Te has saltado un paso o no hay horarios posibles
                  </Title>
                  <Title level={3} type="secondary">
                    Serás redirigido
                  </Title>
                  {this.aux()}
                  <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="spinner-grow text-primary" role="status" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </Col>
              </Row>
            </ATRLayout>
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            <ATRLayout phase={7}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/priorizarSeccion"
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Priorizar Secciones
                  </Button>
                </Col>

                <Col xs={24} sm={12} style={{ textAlign: "center" }}></Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Title
                    style={{
                      textAlign: "center",
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Horarios Posibles
                  </Title>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                  >
                    A continuación veras los horarios que le recomendamos tomar
                    para su próximo semestre. ¡Esperamos haberle ayudado!
                  </Text>
                </Col>
              </Row>
              <br />
              <Row justify="center" style={{ overflowX: "auto" }}>
                <Col span={24}>
                  <Horarios horarios={this.state.Horarios} />
                </Col>
              </Row>
            </ATRLayout>
          </Fragment>
        );
      }
    } else {
      return <NotAuth />;
    }
  }
}
