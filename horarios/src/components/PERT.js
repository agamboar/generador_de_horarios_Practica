import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import PERTMalla2010 from "./PERTMalla2010";
import PERTMalla2018 from "./PERTMalla2018";
import PERTMalla2020 from "./PERTMalla2020";
import axios from "axios";
import NotAuth from "./NotAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Typography, Row, Col, Card } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title } = Typography;

export default class PERT extends Component {
  aux = () => {
    //console.log("si")
    setTimeout(function () {
      window.location.href =
        "https://asistente-eit.udp.cl/users/usr/crearHorario";
    }, 3000);
  };
  state = {
    malla: null,
    ramos: null,
  };

  componentDidMount = async () => {
    var config = {
      method: "get",
      url: "https://asistente-eit.udp.cl/PERT/",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"), //cambiiar a localStorage
        "Content-Type": "application/json",
      },
    };
    //aqui creo que va un the para setear los stear los state y asi poder decirle al alumno cuando no escogido una malla

    var PERT_j = await axios(config);

    this.setState({
      malla: PERT_j.data.malla,
      ramos: PERT_j.data.PERT,
    });
  };

  onSubmit = () => {
    const notify = (e) => {
      toast.info(e, { position: toast.POSITION.TOP_CENTER });
    };
    setTimeout(function () {
      notify("Seras redirigido para priorizar tus Ramos");
    }, 1000);
    //setTimeout(function () { window.location.href = 'https://asistente-eit.udp.cl/users/usr/priorizarRamos'; }, 4500);
  };

  render() {
    if (localStorage.getItem("token")) {
      if (this.state.malla === 2010) {
        return (
          <Fragment>
            <ATRLayout phase={3}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/mallas/malla2010/AvanceCurricular"
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Avance Curricular
                  </Button>
                </Col>

                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/priorizarAreaCFG"
                    type="primary"
                    icon={<ArrowRightOutlined />}
                    size="large"
                  >
                    Ir a Priorizar CFG
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
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Mis Ramos Críticos
                  </Title>
                </Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Button
                    type="text"
                    href="/users/usr/PERT/PERTExtra1"
                    size="large"
                    icon={<PlusCircleTwoTone />}
                  >
                    Más Detalles
                  </Button>
                </Col>
              </Row>
              <br />
              <PERTMalla2010 ramos={this.state.ramos} />
            </ATRLayout>
          </Fragment>
        );
      } else if (this.state.malla === 2018) {
        return (
          <Fragment>
            <ATRLayout phase={3}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/mallas/malla2018/AvanceCurricular"
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Avance Curricular
                  </Button>
                </Col>

                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/priorizarAreaCFG"
                    type="primary"
                    icon={<ArrowRightOutlined />}
                    size="large"
                  >
                    Ir a Priorizar CFG
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
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Mis Ramos Críticos
                  </Title>
                </Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Button
                    type="text"
                    href="/users/usr/PERT/PERTExtra1"
                    size="large"
                    icon={<PlusCircleTwoTone />}
                  >
                    Más Detalles
                  </Button>
                </Col>
              </Row>
              <br />
              <PERTMalla2018 ramos={this.state.ramos} />
            </ATRLayout>
          </Fragment>
        );
      } else if (this.state.malla === 2020) {
        return (
          <Fragment>
            <ATRLayout phase={3}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/mallas/malla2020/AvanceCurricular"
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Avance Curricular
                  </Button>
                </Col>

                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/priorizarAreaCFG"
                    type="primary"
                    icon={<ArrowRightOutlined />}
                    size="large"
                  >
                    Ir a Priorizar CFG
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
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Mis Ramos Críticos
                  </Title>
                </Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Button
                    type="text"
                    href="/users/usr/PERT/PERTExtra1"
                    size="large"
                    icon={<PlusCircleTwoTone />}
                  >
                    Más Detalles
                  </Button>
                </Col>
              </Row>
              <br />
              <PERTMalla2020 ramos={this.state.ramos} />
            </ATRLayout>
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            {/*aca deberia haber algo que diga que no se escogio una malla*/}
            {this.state.malla === "empty" ? (
              <ATRLayout phase={3}>
                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                  ]}
                >
                  <Col xs={24} sm={12} style={{ textAlign: "center" }}></Col>

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
                        color: "#008cdb",
                        fontSize: "40px",
                      }}
                    >
                      Mis Ramos Críticos
                    </Title>
                  </Col>
                </Row>
                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                  ]}
                >
                  <Col span={24} style={{ textAlign: "center" }}></Col>
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
            ) : (
              <ATRLayout phase={3}>
                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                  ]}
                >
                  <Col xs={24} sm={12} style={{ textAlign: "center" }}></Col>

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
                        color: "#008cdb",
                        fontSize: "40px",
                      }}
                    >
                      Mis Ramos Críticos
                    </Title>
                  </Col>
                </Row>
                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                  ]}
                >
                  <Col span={24} style={{ textAlign: "center" }}></Col>
                </Row>
                <br />
                <Row
                  gutter={[
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                    { xs: 8, sm: 16, md: 24, lg: 32 },
                  ]}
                >
                  <Col span={24} style={{ textAlign: "center" }}>
                    <Title>Se estan obteniendo tus ramos críticos</Title>
                    <Title level={3} type="secondary">
                      Un momento porfavor...
                    </Title>
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
            )}
          </Fragment>
        );
      }
    } else {
      return <NotAuth />;
    }
  }
}
