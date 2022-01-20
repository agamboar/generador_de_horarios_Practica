import React, { Component, Fragment } from "react";
import ARamo from "./RamoP";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Button, Row, Col, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title } = Typography;

export default class Malla2020Extra3 extends Component {
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
    CIT2006: null,
    CIT2114: null,
    CIT2204: null,
    CIT2107: null,
    CBF1002: null,
    CIT2007: null,
    CIT2008: null,
    CIG1012: null,
    CII2750: null,
    CIT2108: null,
    CIT2205: null,
    CIT2009: null,
    CFG2: null,
    CIG1013: null,
    CII1000: null,
    CIT2109: null,
    CIT2110: null,
    CIT2010: null,
    CFG3: null,
    CIG1014: null,
    CIT2206: null,
    CIT2011: null,
    CIT2111: null,
    CIT2012: null,
    CFG4: null,
    CII2100: null,
    CIT2112: null,
    CIT2113: null,
    CIT2013: null,
    CIT2207: null,
    CITOPTINF1: null,
    CIT3100: null,
    CITOPTTEL1: null,
    CIT3000: null,
    CIT3202: null,
    CITOPTINF2: null,
    CITOPTTEL2: null,
    CITOPTTEL3: null,
    CITOPTINF3: null,
    CIT3203: null,
    CIT4000: null,
    CIT4001: null,
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
                <ARamo
                  codigo={"CIT2206"}
                  ramo={"Gestión Org."}
                  state={this.state.CIT2206}
                />
                <ARamo
                  codigo={"CIT2011"}
                  ramo={"Sistemas Distribuidos"}
                  state={this.state.CIT2011}
                />
                <ARamo
                  codigo={"CIT2111"}
                  ramo={"Comunicacio- nes Digitales"}
                  state={this.state.CIT2111}
                />
                <ARamo
                  codigo={"CIT2012"}
                  ramo={"Ingeniería de Software"}
                  state={this.state.CIT2012}
                />
                <ARamo
                  codigo={"CFG4"}
                  ramo={"Minor / CFG"}
                  state={this.state.CFG4}
                />
              </Col>
              <Col xs={18} sm={6}>
                <Semestre semestre={"8"} />
                <br />
                <ARamo
                  codigo={"CII2100"}
                  ramo={"Introducción a la Economía"}
                  state={this.state.CII2100}
                />
                <ARamo
                  codigo={"CIT2112"}
                  ramo={"Tecnologías Inalámbricas"}
                  state={this.state.CIT2112}
                />
                <ARamo
                  codigo={"CIT2113"}
                  ramo={"Criptografía y Seg. en Redes"}
                  state={this.state.CIT2113}
                />
                <ARamo
                  codigo={"CIT2013"}
                  ramo={"Inteligencia Artifical"}
                  state={this.state.CIT2013}
                />
                <ARamo
                  codigo={"CIT2207"}
                  ramo={"Evaluación de Proy. TIC"}
                  state={this.state.CIT2207}
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
