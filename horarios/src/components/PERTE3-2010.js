import React, { Component, Fragment } from "react";
import Ramo from "./RamoP";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Button, Row, Col, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title } = Typography;

export default class Malla2010Extra3 extends Component {
  state = {
    CBM1000: null,
    CBM1001: null,
    CBQ1000: null,
    CIT1000: null,
    FIC1000: null,
    CBM1002: null,
    CBM1003: null,
    CBF1000: null,
    CIT1010: null,
    CFG1: null,
    CBM1005: null,
    CBM1006: null,
    CBF1001: null,
    CIT2000: null,
    CIT2100: null,
    CIT2204: null,
    CBM2000: null,
    CBF1002: null,
    CIT2001: null,
    CFG2: null,
    FIC1001: null,
    CII2750: null,
    CIT2106: null,
    CIT2200: null,
    CIT2002: null,
    CFG3: null,
    FIC1002: null,
    CII2000: null,
    CIT2202: null,
    CIT2101: null,
    CIT2003: null,
    CIT2103: null,
    CII1000: null,
    CIT2005: null,
    CIT2102: null,
    FIC1003: null,
    CIT2104: null,
    CIT2203: null,
    CIT2004: null,
    CIT2105: null,
    CIT2201: null,
    CFG4: null,
    CIT3310: null,
    CIT3410: null,
    CIT3411: null,
    CIT3200: null,
    CIT3311: null,
    CIT3312: null,
    CIT3412: null,
    CIT3413: null,
    CIT3201: null,
    CIT3313: null,
    CIT5001: null,
    CIT5002: null,
  };

  componentDidMount = () => {
    for (let i = 0; i < this.props.ramos.length; i++) {
      const mov = i;
      const mov2 = this.props.ramos[mov].to_asignatura_real.codigo;
      this.setState({
        [mov2]: [
          this.props.ramos[mov].es,
          this.props.ramos[mov].ls,
          this.props.ramos[mov].ef,
          this.props.ramos[mov].lf,
          this.props.ramos[mov].holgura,
        ],
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col xs={24} sm={12} style={{ textAlign: "center" }}>
            <Button
              href="/users/usr/PERT"
              onClick={this.deleteMalla}
              icon={<ArrowLeftOutlined />}
              size="large"
            >
              Volver
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

        <Row>
          <Col span={3} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/PERT/PERTExtra2" }}
              style={{ padding: "0px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
            </Link>
          </Col>
          <Col span={18}>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
              justify="center"
            >
              <Col xs={18} sm={6}>
                <Semestre semestre={"7"} />
                <br />
                <Ramo
                  codigo={"CII1000"}
                  ramo={"Contabilidad y Costos"}
                  state={this.state.CII1000}
                />
                <Ramo
                  codigo={"CIT2005"}
                  ramo={"Ingeniería de Software"}
                  state={this.state.CIT2005}
                />
                <Ramo
                  codigo={"CIT2102"}
                  ramo={"Comunicacio -nes Digitales"}
                  state={this.state.CIT2102}
                />
                <Ramo
                  codigo={"FIC1003"}
                  ramo={"Derecho en Ingeniería"}
                  state={this.state.FIC1003}
                />
                <Ramo
                  codigo={"CIT2104"}
                  ramo={"Arquitectura de Comp."}
                  state={this.state.CIT2104}
                />
              </Col>
              <Col xs={18} sm={6}>
                <Semestre semestre={"8"} />
                <br />
                <Ramo
                  codigo={"CIT2203"}
                  ramo={"Gestión Org."}
                  state={this.state.CIT2203}
                />
                <Ramo
                  codigo={"CIT2004"}
                  ramo={"Arquitectura de Sistemas"}
                  state={this.state.CIT2004}
                />
                <Ramo
                  codigo={"CIT2105"}
                  ramo={"Criptografía y Seg. en Redes"}
                  state={this.state.CIT2105}
                />
                <Ramo
                  codigo={"CIT2201"}
                  ramo={"Proyecto en TICs II"}
                  state={this.state.CIT2201}
                />
                <Ramo
                  codigo={"CFG4"}
                  ramo={"Minor / CFG"}
                  state={this.state.CFG4}
                />
              </Col>
            </Row>
          </Col>
          <Col span={3} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{
                pathname: "/users/usr/PERT/PERTExtra4",
              }}
              style={{ padding: "0px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </Link>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
