import React, { Component, Fragment } from "react";
import ARamo from "./ARamo";
import Semestre from "./Semestre";
import NotAuth from "./NotAuth";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Typography, Row, Col, Card, message } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";
import "../assets/css/Form.css";
import "../assets/css/message.css";

const { Title, Text } = Typography;

toast.configure();

export default class AvanceManual2020 extends Component {
  state = {
    malla: "2020",
    show: false,
    CBM1000: false,
    CBM1001: false,
    CBQ1000: false,
    CIT1000: false,
    FIC1000: false,
    CBM1002: false,
    CBM1003: false,
    CBF1000: false,
    CIT1010: false,
    CFG1: false,
    CBM1005: false,
    CBM1006: false,
    CBF1001: false,
    CIT2006: false,
    CIT2114: false,
    CIT2204: false,
    CIT2107: false,
    CBF1002: false,
    CIT2007: false,
    CIT2008: false,
    CIG1012: false,
    CII2750: false,
    CIT2108: false,
    CIT2205: false,
    CIT2009: false,
    CFG2: false,
    CIG1013: false,
    CII1000: false,
    CIT2109: false,
    CIT2110: false,
    CIT2010: false,
    CFG3: false,
    CIG1014: false,
    CIT2206: false,
    CIT2011: false,
    CIT2111: false,
    CIT2012: false,
    CFG4: false,
    CII2100: false,
    CIT2112: false,
    CIT2113: false,
    CIT2013: false,
    CIT2207: false,
    CITOPTINF1: false,
    CIT3100: false,
    CITOPTTEL1: false,
    CIT3000: false,
    CIT3202: false,
    CITOPTINF2: false,
    CITOPTTEL2: false,
    CITOPTTEL3: false,
    CITOPTINF3: false,
    CIT3203: false,
    CIT4000: false,
    CIT4001: false,
  };
  componentDidMount = () => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/asignaturasCursadas/",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"), //cambiiar a localStorage
        "Content-Type": "application/json",
      },
    };

    axios(config).then((response) => {
      console.log(response);
      if (response.data) {
        for (let i = 0; i < response.data.length; i++) {
          const mov = i;
          const mov2 = response.data[mov].codigo;
          this.setState({ [mov2]: true });
        }
      }
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();

    // const notify = (e) => {
    //   toast.info(e, { position: toast.POSITION.TOP_CENTER });
    // };
    // const err = (e) => {
    //   toast.error(e, { position: toast.POSITION.TOP_CENTER });
    // };

    const success_message = (msgcontent) => {
      message.success({
        key: "msgKey",
        content: msgcontent,
        duration: 3,
        onClick: () => message.destroy("msgKey"),
      });
    };

    const error_message = (msgcontent) => {
      message.error({
        key: "msgKey2",
        content: msgcontent,
        duration: 3,
        onClick: () => message.destroy("msgKey2"),
      });
    };

    const Avance = { state: this.state };
    const payload = Avance.state;
    //console.log(Avance)

    var data = JSON.stringify(payload);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/mimallamanual/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.status === 201) {
          setTimeout(function () {
            success_message("Ahora puedes obtener tus ramos críticos");
          }, 1000); //cambia esto por toast
          localStorage.setItem("malla", this.state.malla); //se borra cuando apreto un boton
          //setTimeout(function () { window.location.href = 'http://127.0.0.1:8000/users/usr/PERT'; }, 4500);
          setTimeout(function () {
            window.location.href = "http://127.0.0.1:8000/users/usr/PERT";
          }, 4000);
        } else {
          error_message("Error, verifica los ramos seleccionados");
        }
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.data.error) {
            error_message(`${error.response.data.error}`);
          }
        }
      });
  };

  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <Fragment>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
            >
              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Button
                  href="/users/usr/mallas/malla2020"
                  onClick={this.deleteMalla}
                  icon={<ArrowLeftOutlined />}
                  size="large"
                >
                  Volver a Malla 2020
                </Button>
              </Col>

              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  size="large"
                  htmlType="submit"
                  key={"submit"}
                  form="myForm"
                >
                  Guardar
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
                  Avance Curricular Malla 2020
                </Title>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  Asegurese de marcar todos los ramos que haya aprobado.
                </Text>
              </Col>
            </Row>
            <br />
            <form id="myForm" onSubmit={this.onSubmit} className="Form">
              <Row
                gutter={[
                  { xs: 2, sm: 4, md: 6, lg: 12 },
                  { xs: 2, sm: 4, md: 6, lg: 12 },
                ]}
                justify="center"
              >
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"1"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange1_5}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CBM-1000"}
                    ramo={"Álgebra y Geometría"}
                    show={this.state.CBM1000}
                    onChange1={this.onChange1}
                  />
                  <ARamo
                    codigo={"CBM-1001"}
                    ramo={"Cálculo I"}
                    show={this.state.CBM1001}
                    onChange1={this.onChange2}
                  />
                  <ARamo
                    codigo={"CBQ-1000"}
                    ramo={"Química"}
                    show={this.state.CBQ1000}
                    onChange1={this.onChange3}
                  />
                  <ARamo
                    codigo={"CIT-1000"}
                    ramo={"Programación"}
                    show={this.state.CIT1000}
                    onChange1={this.onChange4}
                  />
                  <ARamo
                    codigo={"FIC-1000"}
                    ramo={"Comunicación para la Ing."}
                    show={this.state.FIC1000}
                    onChange1={this.onChange5}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"2"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange6_10}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CBM-1002"}
                    ramo={"Álgebra Lineal"}
                    show={this.state.CBM1002}
                    onChange1={this.onChange6}
                  />
                  <ARamo
                    codigo={"CBM-1003"}
                    ramo={"Cálculo II"}
                    show={this.state.CBM1003}
                    onChange1={this.onChange7}
                  />
                  <ARamo
                    codigo={"CBF-1000"}
                    ramo={"Mecánica"}
                    show={this.state.CBF1000}
                    onChange1={this.onChange8}
                  />
                  <ARamo
                    codigo={"CIT-1010"}
                    ramo={"Programación Avanzada"}
                    show={this.state.CIT1010}
                    onChange1={this.onChange9}
                  />
                  <ARamo
                    codigo={""}
                    ramo={"CFG"}
                    show={this.state.CFG1}
                    onChange1={this.onChange10}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"3"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange11_15}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CBM-1005"}
                    ramo={"Ecuaciones Diferenciales"}
                    show={this.state.CBM1005}
                    onChange1={this.onChange11}
                  />
                  <ARamo
                    codigo={"CBM-1006"}
                    ramo={"Cálculo III"}
                    show={this.state.CBM1006}
                    onChange1={this.onChange12}
                  />
                  <ARamo
                    codigo={"CBF-1001"}
                    ramo={"Calor y Ondas"}
                    show={this.state.CBF1001}
                    onChange1={this.onChange13}
                  />
                  <ARamo
                    codigo={"CIT-2006"}
                    ramo={"Estructura de Datos y Alg."}
                    show={this.state.CIT2006}
                    onChange1={this.onChange14}
                  />
                  <ARamo
                    codigo={"CIT-2114"}
                    ramo={"Redes de Datos"}
                    show={this.state.CIT2114}
                    onChange1={this.onChange15}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"4"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange16_21}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CIT-2204"}
                    ramo={"Probabilidades y Estadística"}
                    show={this.state.CIT2204}
                    onChange1={this.onChange16}
                  />
                  <ARamo
                    codigo={"CIT-2107"}
                    ramo={"Electrónica y Electrotecnia"}
                    show={this.state.CIT2107}
                    onChange1={this.onChange17}
                  />
                  <ARamo
                    codigo={"CBF-1002"}
                    ramo={"Electricidad y Magnetismo"}
                    show={this.state.CBF1002}
                    onChange1={this.onChange18}
                  />
                  <ARamo
                    codigo={"CIT-2007"}
                    ramo={"Bases de Datos"}
                    show={this.state.CIT2007}
                    onChange1={this.onChange19}
                  />
                  <ARamo
                    codigo={"CIT-2008"}
                    ramo={"Desarrollo Web y Móvil"}
                    show={this.state.CIT2008}
                    onChange1={this.onChange20}
                  />
                  <ARamo
                    codigo={"CIG-1012"}
                    ramo={"Inglés I"}
                    show={this.state.CIG1012}
                    onChange1={this.onChange21}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"5"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange22_27}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CII-2750"}
                    ramo={"Optimización"}
                    show={this.state.CII2750}
                    onChange1={this.onChange22}
                  />
                  <ARamo
                    codigo={"CIT-2108"}
                    ramo={"Taller de Redes y Servicios"}
                    show={this.state.CIT2108}
                    onChange1={this.onChange23}
                  />
                  <ARamo
                    codigo={"CIT-2205"}
                    ramo={"Proyecto en TICs I"}
                    show={this.state.CIT2205}
                    onChange1={this.onChange24}
                  />
                  <ARamo
                    codigo={"CIT-2009"}
                    ramo={"Bases de Datos Avanzadas"}
                    show={this.state.CIT2009}
                    onChange1={this.onChange25}
                  />
                  <ARamo
                    codigo={""}
                    ramo={"CFG"}
                    show={this.state.CFG2}
                    onChange1={this.onChange26}
                  />
                  <ARamo
                    codigo={"CIG-1013"}
                    ramo={"Inglés II"}
                    show={this.state.CIG1013}
                    onChange1={this.onChange27}
                  />
                  <ARamo
                    codigo={"CIT-4000"}
                    ramo={"Práctica I"}
                    show={this.state.CIT4000}
                    onChange1={this.onChangePR1}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"6"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange28_33}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CII-1000"}
                    ramo={"Contabilidad y Costos"}
                    show={this.state.CII1000}
                    onChange1={this.onChange28}
                  />
                  <ARamo
                    codigo={"CIT-2109"}
                    ramo={"Arq. y Org. de Computadores"}
                    show={this.state.CIT2109}
                    onChange1={this.onChange29}
                  />
                  <ARamo
                    codigo={"CIT-2110"}
                    ramo={"Señales y Sistemas"}
                    show={this.state.CIT2110}
                    onChange1={this.onChange30}
                  />
                  <ARamo
                    codigo={"CIT-2010"}
                    ramo={"Sistemas Operativos"}
                    show={this.state.CIT2010}
                    onChange1={this.onChange31}
                  />
                  <ARamo
                    codigo={""}
                    ramo={"CFG"}
                    show={this.state.CFG3}
                    onChange1={this.onChange32}
                  />
                  <ARamo
                    codigo={"CIG-1014"}
                    ramo={"Inglés III"}
                    show={this.state.CIG1014}
                    onChange1={this.onChange33}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"7"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange34_38}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CIT-2203"}
                    ramo={"Gestión Organizacional"}
                    show={this.state.CIT2206}
                    onChange1={this.onChange34}
                  />
                  <ARamo
                    codigo={"CIT-2011"}
                    ramo={"Sistemas Distribuidos"}
                    show={this.state.CIT2011}
                    onChange1={this.onChange35}
                  />
                  <ARamo
                    codigo={"CIT-2111"}
                    ramo={"Comunicaciones Digitales"}
                    show={this.state.CIT2111}
                    onChange1={this.onChange36}
                  />
                  <ARamo
                    codigo={"CIT-2012"}
                    ramo={"Ingeniería de Software"}
                    show={this.state.CIT2012}
                    onChange1={this.onChange37}
                  />
                  <ARamo
                    codigo={""}
                    ramo={"CFG"}
                    show={this.state.CFG4}
                    onChange1={this.onChange38}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"8"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange39_43}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CII-2100"}
                    ramo={"Introducción a la Economía"}
                    show={this.state.CII2100}
                    onChange1={this.onChange39}
                  />
                  <ARamo
                    codigo={"CIT-2112"}
                    ramo={"Tecnologías Inalámbricas"}
                    show={this.state.CIT2112}
                    onChange1={this.onChange40}
                  />
                  <ARamo
                    codigo={"CIT-2113"}
                    ramo={"Criptografía y Seg. en Redes"}
                    show={this.state.CIT2113}
                    onChange1={this.onChange41}
                  />
                  <ARamo
                    codigo={"CIT-2013"}
                    ramo={"Inteligencia Artifical"}
                    show={this.state.CIT2013}
                    onChange1={this.onChange42}
                  />
                  <ARamo
                    codigo={"CIT-2207"}
                    ramo={"Evaluación de Proyectos TIC"}
                    show={this.state.CIT2207}
                    onChange1={this.onChange43}
                  />
                </Col>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"9"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange44_48}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CIT-33XX"}
                    ramo={"Electivo Profesional"}
                    show={this.state.CITOPTINF1}
                    onChange1={this.onChange44}
                  />
                  <ARamo
                    codigo={"CIT-3100"}
                    ramo={"Arquitecturas Emergentes"}
                    show={this.state.CIT3100}
                    onChange1={this.onChange45}
                  />
                  <ARamo
                    codigo={"CIT-34XX"}
                    ramo={"Electivo Profesional"}
                    show={this.state.CITOPTTEL1}
                    onChange1={this.onChange46}
                  />
                  <ARamo
                    codigo={"CIT-3000"}
                    ramo={"Arquitectura de Software"}
                    show={this.state.CIT3000}
                    onChange1={this.onChange47}
                  />
                  <ARamo
                    codigo={"CIT-3202"}
                    ramo={"Data Science"}
                    show={this.state.CIT3202}
                    onChange1={this.onChange48}
                  />
                  <ARamo
                    codigo={"CIT-4001"}
                    ramo={"Práctica II"}
                    show={this.state.CIT4001}
                    onChange1={this.onChangePR2}
                  />
                </Col>

                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                  <Semestre semestre={"10"} />
                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-success d-inline-block text-truncate border-0"
                    onClick={this.onChange49_53}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                  </button>
                  <br />
                  <ARamo
                    codigo={"CIT-33XX"}
                    ramo={"Electivo Profesional"}
                    show={this.state.CITOPTINF2}
                    onChange1={this.onChange49}
                  />
                  <ARamo
                    codigo={"CIT-34XX"}
                    ramo={"Electivo Profesional"}
                    show={this.state.CITOPTTEL2}
                    onChange1={this.onChange50}
                  />
                  <ARamo
                    codigo={"CIT-34XX"}
                    ramo={"Electivo Profesional"}
                    show={this.state.CITOPTTEL3}
                    onChange1={this.onChange51}
                  />
                  <ARamo
                    codigo={"CIT-33XX"}
                    ramo={"Electivo Profesional"}
                    show={this.state.CITOPTINF3}
                    onChange1={this.onChange52}
                  />
                  <ARamo
                    codigo={"CIT-3203"}
                    ramo={"Proyecto en TICs II"}
                    show={this.state.CIT3203}
                    onChange1={this.onChange53}
                  />
                </Col>
              </Row>
            </form>
          </Fragment>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
  onChange1_5 = (e) => {
    this.setState((prevState) => ({
      CBM1000: !this.state.CBM1000,
      CBM1001: !this.state.CBM1001,
      CBQ1000: !this.state.CBQ1000,
      CIT1000: !this.state.CIT1000,
      FIC1000: !this.state.FIC1000,
    }));
  };
  onChange6_10 = (e) => {
    this.setState((prevState) => ({
      CBM1002: !this.state.CBM1002,
      CBM1003: !this.state.CBM1003,
      CBF1000: !this.state.CBF1000,
      CIT1010: !this.state.CIT1010,
      CFG1: !this.state.CFG1,
    }));
  };
  onChange11_15 = (e) => {
    this.setState((prevState) => ({
      CBM1005: !this.state.CBM1005,
      CBM1006: !this.state.CBM1006,
      CBF1001: !this.state.CBF1001,
      CIT2006: !this.state.CIT2006,
      CIT2114: !this.state.CIT2114,
    }));
  };
  onChange16_21 = (e) => {
    this.setState((prevState) => ({
      CIT2204: !this.state.CIT2204,
      CIT2107: !this.state.CIT2107,
      CBF1002: !this.state.CBF1002,
      CIT2007: !this.state.CIT2007,
      CIT2008: !this.state.CIT2008,
      CIG1012: !this.state.CIG1012,
    }));
  };
  onChange22_27 = (e) => {
    this.setState((prevState) => ({
      CII2750: !this.state.CII2750,
      CIT2108: !this.state.CIT2108,
      CIT2205: !this.state.CIT2205,
      CIT2009: !this.state.CIT2009,
      CFG2: !this.state.CFG2,
      CIG1013: !this.state.CIG1013,
    }));
  };
  onChange28_33 = (e) => {
    this.setState((prevState) => ({
      CII1000: !this.state.CII1000,
      CIT2109: !this.state.CIT2109,
      CIT2110: !this.state.CIT2110,
      CIT2010: !this.state.CIT2010,
      CFG3: !this.state.CFG3,
      CIG1014: !this.state.CIG1014,
    }));
  };
  onChange34_38 = (e) => {
    this.setState((prevState) => ({
      CIT2206: !this.state.CIT2206,
      CIT2011: !this.state.CIT2011,
      CIT2111: !this.state.CIT2111,
      CIT2012: !this.state.CIT2012,
      CFG4: !this.state.CFG4,
    }));
  };
  v;
  onChange39_43 = (e) => {
    this.setState((prevState) => ({
      CII2100: !this.state.CII2100,
      CIT2112: !this.state.CIT2112,
      CIT2113: !this.state.CIT2113,
      CIT2013: !this.state.CIT2013,
      CIT2207: !this.state.CIT2207,
    }));
  };
  onChange44_48 = (e) => {
    this.setState((prevState) => ({
      CITOPTINF1: !this.state.CITOPTINF1,
      CIT3100: !this.state.CIT3100,
      CITOPTTEL1: !this.state.CITOPTTEL1,
      CIT3000: !this.state.CIT3000,
      CIT3202: !this.state.CIT3202,
    }));
  };
  onChange49_53 = (e) => {
    this.setState((prevState) => ({
      CITOPTINF2: !this.state.CITOPTINF2,
      CITOPTTEL2: !this.state.CITOPTTEL2,
      CITOPTTEL3: !this.state.CITOPTTEL3,
      CITOPTINF3: !this.state.CITOPTINF3,
      CIT3203: !this.state.CIT3203,
    }));
  };

  onChange1 = (e) => {
    this.setState((prevState) => ({
      CBM1000: !prevState.CBM1000,
    }));
  };
  onChange2 = (e) => {
    this.setState((prevState) => ({
      CBM1001: !prevState.CBM1001,
    }));
  };
  onChange3 = (e) => {
    this.setState((prevState) => ({
      CBQ1000: !prevState.CBQ1000,
    }));
  };
  onChange4 = (e) => {
    this.setState((prevState) => ({
      CIT1000: !prevState.CIT1000,
    }));
  };
  onChange5 = (e) => {
    this.setState((prevState) => ({
      FIC1000: !prevState.FIC1000,
    }));
  };
  onChange6 = (e) => {
    this.setState((prevState) => ({
      CBM1002: !prevState.CBM1002,
    }));
  };
  onChange7 = (e) => {
    this.setState((prevState) => ({
      CBM1003: !prevState.CBM1003,
    }));
  };
  onChange8 = (e) => {
    this.setState((prevState) => ({
      CBF1000: !prevState.CBF1000,
    }));
  };
  onChange9 = (e) => {
    this.setState((prevState) => ({
      CIT1010: !prevState.CIT1010,
    }));
  };

  onChange10 = (e) => {
    this.setState((prevState) => ({
      CFG1: !prevState.CFG1,
    }));
  };

  onChange11 = (e) => {
    this.setState((prevState) => ({
      CBM1005: !prevState.CBM1005,
    }));
  };
  onChange12 = (e) => {
    this.setState((prevState) => ({
      CBM1006: !prevState.CBM1006,
    }));
  };
  onChange13 = (e) => {
    this.setState((prevState) => ({
      CBF1001: !prevState.CBF1001,
    }));
  };
  onChange14 = (e) => {
    this.setState((prevState) => ({
      CIT2006: !prevState.CIT2006,
    }));
  };
  onChange15 = (e) => {
    this.setState((prevState) => ({
      CIT2114: !prevState.CIT2114,
    }));
  };
  onChange16 = (e) => {
    this.setState((prevState) => ({
      CIT2204: !prevState.CIT2204,
    }));
  };
  onChange17 = (e) => {
    this.setState((prevState) => ({
      CIT2107: !prevState.CIT2107,
    }));
  };
  onChange18 = (e) => {
    this.setState((prevState) => ({
      CBF1002: !prevState.CBF1002,
    }));
  };
  onChange19 = (e) => {
    this.setState((prevState) => ({
      CIT2007: !prevState.CIT2007,
    }));
  };

  onChange20 = (e) => {
    this.setState((prevState) => ({
      CIT2008: !prevState.CIT2008,
    }));
  };
  onChange21 = (e) => {
    this.setState((prevState) => ({
      CIG1012: !prevState.CIG1012,
    }));
  };
  onChange22 = (e) => {
    this.setState((prevState) => ({
      CII2750: !prevState.CII2750,
    }));
  };
  onChange23 = (e) => {
    this.setState((prevState) => ({
      CIT2108: !prevState.CIT2108,
    }));
  };
  onChange24 = (e) => {
    this.setState((prevState) => ({
      CIT2205: !prevState.CIT2205,
    }));
  };
  onChange25 = (e) => {
    this.setState((prevState) => ({
      CIT2009: !prevState.CIT2009,
    }));
  };
  onChange26 = (e) => {
    this.setState((prevState) => ({
      CFG2: !prevState.CFG2,
    }));
  };
  onChange27 = (e) => {
    this.setState((prevState) => ({
      CIG1013: !prevState.CIG1013,
    }));
  };
  onChange28 = (e) => {
    this.setState((prevState) => ({
      CII1000: !prevState.CII1000,
    }));
  };
  onChange29 = (e) => {
    this.setState((prevState) => ({
      CIT2109: !prevState.CIT2109,
    }));
  };

  onChange30 = (e) => {
    this.setState((prevState) => ({
      CIT2110: !prevState.CIT2110,
    }));
  };
  onChange31 = (e) => {
    this.setState((prevState) => ({
      CIT2010: !prevState.CIT2010,
    }));
  };
  onChange32 = (e) => {
    this.setState((prevState) => ({
      CFG3: !prevState.CFG3,
    }));
  };
  onChange33 = (e) => {
    this.setState((prevState) => ({
      CIG1014: !prevState.CIG1014,
    }));
  };
  onChange34 = (e) => {
    this.setState((prevState) => ({
      CIT2206: !prevState.CIT2206,
    }));
  };
  onChange35 = (e) => {
    this.setState((prevState) => ({
      CIT2011: !prevState.CIT2011,
    }));
  };
  onChange36 = (e) => {
    this.setState((prevState) => ({
      CIT2111: !prevState.CIT2111,
    }));
  };
  onChange37 = (e) => {
    this.setState((prevState) => ({
      CIT2012: !prevState.CIT2012,
    }));
  };
  onChange38 = (e) => {
    this.setState((prevState) => ({
      CFG4: !prevState.CFG4,
    }));
  };
  onChange39 = (e) => {
    this.setState((prevState) => ({
      CII2100: !prevState.CII2100,
    }));
  };
  onChange40 = (e) => {
    this.setState((prevState) => ({
      CIT2112: !prevState.CIT2112,
    }));
  };
  onChange41 = (e) => {
    this.setState((prevState) => ({
      CIT2113: !prevState.CIT2113,
    }));
  };
  onChange42 = (e) => {
    this.setState((prevState) => ({
      CIT2013: !prevState.CIT2013,
    }));
  };
  onChange43 = (e) => {
    this.setState((prevState) => ({
      CIT2207: !prevState.CIT2207,
    }));
  };
  onChange44 = (e) => {
    this.setState((prevState) => ({
      CITOPTINF1: !prevState.CITOPTINF1,
    }));
  };
  onChange45 = (e) => {
    this.setState((prevState) => ({
      CIT3100: !prevState.CIT3100,
    }));
  };
  onChange46 = (e) => {
    this.setState((prevState) => ({
      CITOPTTEL1: !prevState.CITOPTTEL1,
    }));
  };
  onChange47 = (e) => {
    this.setState((prevState) => ({
      CIT3000: !prevState.CIT3000,
    }));
  };
  onChange48 = (e) => {
    this.setState((prevState) => ({
      CIT3202: !prevState.CIT3202,
    }));
  };
  onChange49 = (e) => {
    this.setState((prevState) => ({
      CITOPTINF2: !prevState.CITOPTINF2,
    }));
  };

  onChange50 = (e) => {
    this.setState((prevState) => ({
      CITOPTTEL2: !prevState.CITOPTTEL2,
    }));
  };
  onChange51 = (e) => {
    this.setState((prevState) => ({
      CITOPTTEL3: !prevState.CITOPTTEL3,
    }));
  };
  onChange52 = (e) => {
    this.setState((prevState) => ({
      CITOPTINF3: !prevState.CITOPTINF3,
    }));
  };
  onChange53 = (e) => {
    this.setState((prevState) => ({
      CIT3203: !prevState.CIT3203,
    }));
  };
  onChangePR1 = (e) => {
    this.setState((prevState) => ({
      CIT4000: !prevState.CIT4000,
    }));
  };
  onChangePR2 = (e) => {
    this.setState((prevState) => ({
      CIT4001: !prevState.CIT4001,
    }));
  };
}
