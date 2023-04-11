import React, { Component, Fragment } from "react";
import { Card } from "antd";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import SelectSearch from "./SelectSearch";
import TablaSecciones from "./TablaSecciones";
import axios from "axios";
import { Button, Typography, Layout, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title, Text } = Typography;
const { Content } = Layout;
//post aqui para saber los ramos disponibles

export default class UserInterface extends Component {
  state = {
    message: "no",
    ramos: null,
  };

  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };

  aux = () => {
    setTimeout(function () {
      window.location.href = "http://127.0.0.1:8000/users/usr/mallas";
    }, 3000);
  };

  componentDidMount = async () => {
    var config = {
      method: "get",
      url: `http://127.0.0.1:8000/get_ramos_disponibles/`,
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    var Ramos = await axios(config);
    console.log(Ramos);
    this.setState({ ramos: Ramos.data });

    // axios(config).then((response) => {
    //   //console.log(response) //verificar como se recibe la info
    //   if (response.data) {
    //     this.setState({ ramos: response.data }); //map de eso y se puede rellenar la tabla
    //   }
    // });
  };
  // deberia hacer todos los post con axios para que se ve mas ordenado

  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <Fragment>
            {console.log(this.state.ramos)}
            {this.state.ramos === "no" ? (
              <Fragment>
                <ATRLayout phase={6}>
                  <Row
                    gutter={[
                      { xs: 8, sm: 16, md: 24, lg: 32 },
                      { xs: 8, sm: 16, md: 24, lg: 32 },
                    ]}
                  >
                    <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                      <Button
                        href="/users/usr/priorizarRamos"
                        icon={<ArrowLeftOutlined />}
                        size="large"
                      >
                        Volver a Priorizar Ramos
                      </Button>
                    </Col>

                    <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                      <Button
                        href="/users/usr/horariosPosibles"
                        type="primary"
                        icon={<ArrowRightOutlined />}
                        size="large"
                      >
                        Ir a Horarios Posibles
                      </Button>
                    </Col>
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
                        Priorizar Secciones (Opcional)
                      </Title>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                      >
                        Escoja un ramo para que pueda priorizar sus secciones.
                      </Text>
                      <br />
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                      >
                        (Solo aparecerán secciones con cupos libres. Además,
                        solo se mostrarán las opciones de las 2 áreas de CFG con
                        más preferencia)
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
                      <Title>No has elegido ninguna malla</Title>
                      <Title level={3} type="secondary">
                        Serás redirigido
                      </Title>
                      {this.aux()}
                      <div className="d-flex justify-content-center">
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                    </Col>
                  </Row>
                </ATRLayout>
              </Fragment>
            ) : (
              <Fragment>
                <ATRLayout phase={6}>
                  <Row
                    gutter={[
                      { xs: 8, sm: 16, md: 24, lg: 32 },
                      { xs: 8, sm: 16, md: 24, lg: 32 },
                    ]}
                  >
                    <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                      <Button
                        href="/users/usr/priorizarRamos"
                        icon={<ArrowLeftOutlined />}
                        size="large"
                      >
                        Volver a Priorizar Ramos
                      </Button>
                    </Col>

                    <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                      <Button
                        href="/users/usr/horariosPosibles"
                        type="primary"
                        icon={<ArrowRightOutlined />}
                        size="large"
                      >
                        Ir a Horarios Posibles
                      </Button>
                    </Col>
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
                        Priorizar Secciones (Opcional)
                      </Title>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                      >
                        Escoja un ramo para que pueda priorizar sus secciones.
                      </Text>
                      <br />
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                      >
                        Solo aparecerán secciones con cupos libres. Además, solo
                        se mostrarán las opciones de las 2 áreas de CFG con más
                        preferencia.
                      </Text>
                    </Col>
                  </Row>
                  <br />
                  {this.state.ramos !== null ? (
                    <Row justify="center">
                      <Col span={24} style={{ textAlign: "center" }}>
                        <SelectSearch
                          ramosDisponibles={
                            this.state.ramos["ramos_disponibles"]
                          }
                          parentCallback={this.callbackFunction}
                        />
                      </Col>
                    </Row>
                  ) : null}

                  {console.log(this.state.message)}
                  {this.state.message !== "no" ? (
                    <Fragment>
                      <Row justify="center">
                        <Col span={24} style={{ textAlign: "center" }}>
                          <Text>
                            Secciones del ramo: {this.state.message["codigo"]}
                          </Text>
                        </Col>
                      </Row>
                      <br />
                      <Row justify="center">
                        <Col span={24}>
                          <TablaSecciones
                            codigo={this.state.message["codigo"]}
                          />
                        </Col>
                      </Row>
                    </Fragment>
                  ) : null}
                </ATRLayout>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
}
