import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import RamoCritico from "./RamoCritico";
import NotAuth from "./NotAuth";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title, Text } = Typography;

toast.configure();

export default class PriorizarRamos extends Component {
  state = {
    ramos: null,
    critico: [null, null, null, null, null, null, null, null, null, null, null],
    p0: [null, null, null, null, null, null, null, null, null, null, null],
    p1: [null, null, null, null, null, null, null, null, null, null, null],
    p2: [null, null, null, null, null, null, null, null, null, null, null],
    p3: [null, null, null, null, null, null, null, null, null, null, null],
    p4: [null, null, null, null, null, null, null, null, null, null, null],
    p5: [null, null, null, null, null, null, null, null, null, null, null],
    p6: [null, null, null, null, null, null, null, null, null, null, null],
    p7: [null, null, null, null, null, null, null, null, null, null, null],
    p8: [null, null, null, null, null, null, null, null, null, null, null],
    p9: [null, null, null, null, null, null, null, null, null, null, null],
    puntaje: [110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
    aux: [null, null, null, null, null, null, null, null, null, null, null],
    bool: "0",
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const notify = (e) => {
      toast.info(e, { position: toast.POSITION.TOP_CENTER });
    };
    const priorizaciones = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.critico.length; i++) {
      this.state.aux[i] = [this.state.critico[i], this.state.puntaje[i]];
    }
    priorizaciones[0] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p0.length; i++) {
      this.state.aux[i] = [this.state.p0[i], this.state.puntaje[i]];
    }
    priorizaciones[1] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p1.length; i++) {
      this.state.aux[i] = [this.state.p1[i], this.state.puntaje[i]];
    }
    priorizaciones[2] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p2.length; i++) {
      this.state.aux[i] = [this.state.p2[i], this.state.puntaje[i]];
    }
    priorizaciones[3] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p3.length; i++) {
      this.state.aux[i] = [this.state.p3[i], this.state.puntaje[i]];
    }
    priorizaciones[4] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p4.length; i++) {
      this.state.aux[i] = [this.state.p4[i], this.state.puntaje[i]];
    }
    priorizaciones[5] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p5.length; i++) {
      this.state.aux[i] = [this.state.p5[i], this.state.puntaje[i]];
    }
    priorizaciones[6] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p6.length; i++) {
      this.state.aux[i] = [this.state.p6[i], this.state.puntaje[i]];
    }
    priorizaciones[7] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p7.length; i++) {
      this.state.aux[i] = [this.state.p7[i], this.state.puntaje[i]];
    }
    priorizaciones[8] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p8.length; i++) {
      this.state.aux[i] = [this.state.p8[i], this.state.puntaje[i]];
    }
    priorizaciones[9] = this.state.aux;
    /////////////////////////////////////////////////////////////////////////////////////////////////
    this.state.aux = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    for (let i = 0; i < this.state.p9.length; i++) {
      this.state.aux[i] = [this.state.p9[i], this.state.puntaje[i]];
    }
    priorizaciones[10] = this.state.aux;

    //console.log(priorizaciones)

    const payload = priorizaciones;

    var data = JSON.stringify(payload);
    console.log(data);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/kk/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
      data: data,
    };

    await axios(config);
    setTimeout(function () {
      notify("Prioridadas guardadas.");
    }, 1000);
    //setTimeout(function () { window.location.href = 'http://127.0.0.1:8000/users/usr/horariosPosibles'; }, 4500);
  };

  aux = () => {
    setTimeout(function () {
      window.location.href = "http://127.0.0.1:8000/users/usr/PERT";
    }, 3000);
  };
  componentDidMount = async () => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/PERT_es1/",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"), //cambiar a localStorage
        "Content-Type": "application/json",
      },
    };

    var PERT_j = await axios(config);
    console.log(PERT_j);

    //console.log(PERT_j)
    this.setState({
      ramos: PERT_j.data,
    });
    for (let i = 0; i < this.state.ramos.length; i++) {
      const mov = i;
      if (this.state.ramos[mov].critico === true) {
        for (let j = 0; j < this.state.critico.length; j++) {
          const mov2 = j;
          if (this.state.critico[mov2] === null) {
            this.state.critico[mov2] = this.state.ramos[mov];
            break;
          }
        }
      } else {
        if (this.state.ramos[mov].holgura === 0) {
          for (let j = 0; j < this.state.p0.length; j++) {
            const mov2 = j;
            if (this.state.p0[mov2] === null) {
              this.state.p0[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 1) {
          for (let j = 0; j < this.state.p1.length; j++) {
            const mov2 = j;
            if (this.state.p1[mov2] === null) {
              this.state.p1[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 2) {
          for (let j = 0; j < this.state.p2.length; j++) {
            const mov2 = j;
            if (this.state.p2[mov2] === null) {
              this.state.p2[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 3) {
          for (let j = 0; j < this.state.p3.length; j++) {
            const mov2 = j;
            if (this.state.p3[mov2] === null) {
              this.state.p3[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 4) {
          for (let j = 0; j < this.state.p4.length; j++) {
            const mov2 = j;
            if (this.state.p4[mov2] === null) {
              this.state.p4[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 5) {
          for (let j = 0; j < this.state.p5.length; j++) {
            const mov2 = j;
            if (this.state.p5[mov2] === null) {
              this.state.p5[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 6) {
          for (let j = 0; j < this.state.p6.length; j++) {
            const mov2 = j;
            if (this.state.p6[mov2] === null) {
              this.state.p6[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 7) {
          for (let j = 0; j < this.state.p7.length; j++) {
            const mov2 = j;
            if (this.state.p7[mov2] === null) {
              this.state.p7[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 8) {
          for (let j = 0; j < this.state.p8.length; j++) {
            const mov2 = j;
            if (this.state.p8[mov2] === null) {
              this.state.p8[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
        if (this.state.ramos[mov].holgura === 9) {
          for (let j = 0; j < this.state.p9.length; j++) {
            const mov2 = j;
            if (this.state.p9[mov2] === null) {
              this.state.p9[mov2] = this.state.ramos[mov];
              break;
            }
          }
        }
      }
    }
    this.setState({
      bool: true,
    });
    console.log(this.state.bool);
  };

  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <Fragment>
            {console.log(this.state.ramos)}
            {this.state.ramos === "no" ? (
              <Fragment>
                <ATRLayout phase={5}>
                  <br />
                  <br />
                  <br />
                  <div className="container">
                    <Button
                      href="/users/usr/priorizarAreaCFG"
                      icon={<ArrowLeftOutlined />}
                      size="large"
                      style={{ textAlign: "left" }}
                    >
                      Volver a Priorizar CFG
                    </Button>
                    <Button
                      href="/users/usr/priorizarSeccion"
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      style={{ float: "right" }}
                      size="large"
                    >
                      Ir a Priorizar Secciones
                    </Button>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Title
                      style={{
                        textAlign: "center",
                        color: "#008cdb",
                        fontSize: "40px",
                      }}
                    >
                      Priorizar Ramos
                    </Title>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    >
                      Ahora deberás elegir que ramos prefieres asignarles una
                      mayor prioridad en tu horario.
                    </Text>
                  </div>
                  <br />
                  <div className="row row-cols-3">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    {/*  <div className="col"><br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarSeccion' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="2">Priorizar Secciones</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                                </div></div>
                                    <div className="col"><br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Generar Horario</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                                </div></div>*/}
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="d-flex justify-content-center">
                    <h2 className="display-6">Te has saltado un paso</h2>
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4 className="display-6">Seras redirigido</h4>
                    {this.aux()}
                  </div>
                  <br />
                  <br />
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
                </ATRLayout>
              </Fragment>
            ) : (
              <Fragment>
                <ATRLayout phase={5}>
                  <br />
                  <br />
                  <br />
                  <div className="container">
                    <Button
                      href="/users/usr/priorizarAreaCFG"
                      icon={<ArrowLeftOutlined />}
                      size="large"
                      style={{ textAlign: "left" }}
                    >
                      Volver a Mis Priorizar CFG
                    </Button>
                    <Button
                      href="/users/usr/priorizarSeccion"
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      style={{ float: "right" }}
                      size="large"
                    >
                      Ir a Priorizar Secciones
                    </Button>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Title
                      style={{
                        textAlign: "center",
                        color: "#008cdb",
                        fontSize: "40px",
                      }}
                    >
                      Priorizar Ramos
                    </Title>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    >
                      Ahora deberás elegir que ramos prefieres asignarles una
                      mayor prioridad en tu horario.
                    </Text>
                  </div>
                  <br />
                  <div className="row row-cols-3">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    {/*<div className="col"><br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarSeccion' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Secciones</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                                </div></div>
                                    <div className="col"><br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Generar Horario</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                              </div></div>*/}
                  </div>

                  <br />
                  <br />
                  {console.log(this.state.critico) /* NO BORRAR */}
                  <RamoCritico
                    name="Críticos"
                    resultado={this.state.critico}
                    onChange0_1={this.criticoonChange0_1}
                    onChange1_2={this.criticoonChange1_2}
                    onChange2_3={this.criticoonChange2_3}
                    onChange3_4={this.criticoonChange3_4}
                    onChange4_5={this.criticoonChange4_5}
                    onChange5_6={this.criticoonChange5_6}
                    onChange6_7={this.criticoonChange6_7}
                    onChange7_8={this.criticoonChange7_8}
                    onChange8_9={this.criticoonChange8_9}
                    onChange9_10={this.criticoonChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 0"
                    resultado={this.state.p0}
                    onChange0_1={this.p0onChange0_1}
                    onChange1_2={this.p0onChange1_2}
                    onChange2_3={this.p0onChange2_3}
                    onChange3_4={this.p0onChange3_4}
                    onChange4_5={this.p0onChange4_5}
                    onChange5_6={this.p0onChange5_6}
                    onChange6_7={this.p0onChange6_7}
                    onChange7_8={this.p0onChange7_8}
                    onChange8_9={this.p0onChange8_9}
                    onChange9_10={this.p0onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 1"
                    resultado={this.state.p1}
                    onChange0_1={this.p1onChange0_1}
                    onChange1_2={this.p1onChange1_2}
                    onChange2_3={this.p1onChange2_3}
                    onChange3_4={this.p1onChange3_4}
                    onChange4_5={this.p1onChange4_5}
                    onChange5_6={this.p1onChange5_6}
                    onChange6_7={this.p1onChange6_7}
                    onChange7_8={this.p1onChange7_8}
                    onChange8_9={this.p1onChange8_9}
                    onChange9_10={this.p1onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 2"
                    resultado={this.state.p2}
                    onChange0_1={this.p2onChange0_1}
                    onChange1_2={this.p2onChange1_2}
                    onChange2_3={this.p2onChange2_3}
                    onChange3_4={this.p2onChange3_4}
                    onChange4_5={this.p2onChange4_5}
                    onChange5_6={this.p2onChange5_6}
                    onChange6_7={this.p2onChange6_7}
                    onChange7_8={this.p2onChange7_8}
                    onChange8_9={this.p2onChange8_9}
                    onChange9_10={this.p2onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 3"
                    resultado={this.state.p3}
                    onChange0_1={this.p3onChange0_1}
                    onChange1_2={this.p3onChange1_2}
                    onChange2_3={this.p3onChange2_3}
                    onChange3_4={this.p3onChange3_4}
                    onChange4_5={this.p3onChange4_5}
                    onChange5_6={this.p3onChange5_6}
                    onChange6_7={this.p3onChange6_7}
                    onChange7_8={this.p3onChange7_8}
                    onChange8_9={this.p3onChange8_9}
                    onChange9_10={this.p3onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 4"
                    resultado={this.state.p4}
                    onChange0_1={this.p4onChange0_1}
                    onChange1_2={this.p4onChange1_2}
                    onChange2_3={this.p4onChange2_3}
                    onChange3_4={this.p4onChange3_4}
                    onChange4_5={this.p4onChange4_5}
                    onChange5_6={this.p4onChange5_6}
                    onChange6_7={this.p4onChange6_7}
                    onChange7_8={this.p4onChange7_8}
                    onChange8_9={this.p4onChange8_9}
                    onChange9_10={this.p4onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 5"
                    resultado={this.state.p5}
                    onChange0_1={this.p5onChange0_1}
                    onChange1_2={this.p5onChange1_2}
                    onChange2_3={this.p5onChange2_3}
                    onChange3_4={this.p5onChange3_4}
                    onChange4_5={this.p5onChange4_5}
                    onChange5_6={this.p5onChange5_6}
                    onChange6_7={this.p5onChange6_7}
                    onChange7_8={this.p5onChange7_8}
                    onChange8_9={this.p5onChange8_9}
                    onChange9_10={this.p5onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 6"
                    resultado={this.state.p6}
                    onChange0_1={this.p6onChange0_1}
                    onChange1_2={this.p6onChange1_2}
                    onChange2_3={this.p6onChange2_3}
                    onChange3_4={this.p6onChange3_4}
                    onChange4_5={this.p6onChange4_5}
                    onChange5_6={this.p6onChange5_6}
                    onChange6_7={this.p6onChange6_7}
                    onChange7_8={this.p6onChange7_8}
                    onChange8_9={this.p6onChange8_9}
                    onChange9_10={this.p6onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 7"
                    resultado={this.state.p7}
                    onChange0_1={this.p7onChange0_1}
                    onChange1_2={this.p7onChange1_2}
                    onChange2_3={this.p7onChange2_3}
                    onChange3_4={this.p7onChange3_4}
                    onChange4_5={this.p7onChange4_5}
                    onChange5_6={this.p7onChange5_6}
                    onChange6_7={this.p7onChange6_7}
                    onChange7_8={this.p7onChange7_8}
                    onChange8_9={this.p7onChange8_9}
                    onChange9_10={this.p7onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 8"
                    resultado={this.state.p8}
                    onChange0_1={this.p8onChange0_1}
                    onChange1_2={this.p8onChange1_2}
                    onChange2_3={this.p8onChange2_3}
                    onChange3_4={this.p8onChange3_4}
                    onChange4_5={this.p8onChange4_5}
                    onChange5_6={this.p8onChange5_6}
                    onChange6_7={this.p8onChange6_7}
                    onChange7_8={this.p8onChange7_8}
                    onChange8_9={this.p8onChange8_9}
                    onChange9_10={this.p8onChange9_10}
                  />
                  <RamoCritico
                    name="Prioridad 9"
                    resultado={this.state.p9}
                    onChange0_1={this.p9onChange0_1}
                    onChange1_2={this.p9onChange1_2}
                    onChange2_3={this.p9onChange2_3}
                    onChange3_4={this.p9onChange3_4}
                    onChange4_5={this.p9onChange4_5}
                    onChange5_6={this.p9onChange5_6}
                    onChange6_7={this.p9onChange6_7}
                    onChange7_8={this.p9onChange7_8}
                    onChange8_9={this.p9onChange8_9}
                    onChange9_10={this.p9onChange9_10}
                  />

                  <form onSubmit={this.onSubmit}>
                    <div className="container">
                      <div className=" align-self-end">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill"
                        >
                          {" "}
                          Guardar Prioridades
                        </button>
                      </div>
                    </div>
                  </form>
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
  ////////////////////////////////////
  p0onChange0_1 = (e) => {
    if (this.state.p0[1] !== null) {
      const aux = this.state.p0[0];
      this.state.p0[0] = this.state.p0[1];
      this.state.p0[1] = aux;
    }
    this.forceUpdate();
  };

  p0onChange1_2 = (e) => {
    if (this.state.p0[2] !== null) {
      const aux = this.state.p0[1];
      this.state.p0[1] = this.state.p0[2];
      this.state.p0[2] = aux;
    }
    this.forceUpdate();
  };

  p0onChange2_3 = (e) => {
    if (this.state.p0[3] !== null) {
      const aux = this.state.p0[2];
      this.state.p0[2] = this.state.p0[3];
      this.state.p0[3] = aux;
    }
    this.forceUpdate();
  };

  p0onChange3_4 = (e) => {
    if (this.state.p0[4] !== null) {
      const aux = this.state.p0[3];
      this.state.p0[3] = this.state.p0[4];
      this.state.p0[4] = aux;
    }
    this.forceUpdate();
  };

  p0onChange4_5 = (e) => {
    if (this.state.p0[5] !== null) {
      const aux = this.state.p0[4];
      this.state.p0[4] = this.state.p0[5];
      this.state.p0[5] = aux;
    }
    this.forceUpdate();
  };

  p0onChange5_6 = (e) => {
    if (this.state.p0[6] !== null) {
      const aux = this.state.p0[5];
      this.state.p0[5] = this.state.p0[6];
      this.state.p0[6] = aux;
    }
    this.forceUpdate();
  };
  p0onChange6_7 = (e) => {
    if (this.state.p0[7] !== null) {
      const aux = this.state.p0[6];
      this.state.p0[6] = this.state.p0[7];
      this.state.p0[7] = aux;
    }
    this.forceUpdate();
  };

  p0onChange7_8 = (e) => {
    if (this.state.p0[8] !== null) {
      const aux = this.state.p0[7];
      this.state.p0[7] = this.state.p0[8];
      this.state.p0[8] = aux;
    }
    this.forceUpdate();
  };

  p0onChange8_9 = (e) => {
    if (this.state.p0[9] !== null) {
      const aux = this.state.p0[8];
      this.state.p0[8] = this.state.p0[9];
      this.state.p0[9] = aux;
    }
    this.forceUpdate();
  };

  p0onChange9_10 = (e) => {
    if (this.state.p0[10] !== null) {
      const aux = this.state.p0[9];
      this.state.p0[9] = this.state.p0[10];
      this.state.p0[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////

  p1onChange0_1 = (e) => {
    if (this.state.p1[1] !== null) {
      const aux = this.state.p1[0];
      this.state.p1[0] = this.state.p1[1];
      this.state.p1[1] = aux;
    }
    this.forceUpdate();
  };

  p1onChange1_2 = (e) => {
    if (this.state.p1[2] !== null) {
      const aux = this.state.p1[1];
      this.state.p1[1] = this.state.p1[2];
      this.state.p1[2] = aux;
    }
    this.forceUpdate();
  };

  p1onChange2_3 = (e) => {
    if (this.state.p1[3] !== null) {
      const aux = this.state.p1[2];
      this.state.p1[2] = this.state.p1[3];
      this.state.p1[3] = aux;
    }
    this.forceUpdate();
  };

  p1onChange3_4 = (e) => {
    if (this.state.p1[4] !== null) {
      const aux = this.state.p1[3];
      this.state.p1[3] = this.state.p1[4];
      this.state.p1[4] = aux;
    }
    this.forceUpdate();
  };

  p1onChange4_5 = (e) => {
    if (this.state.p1[5] !== null) {
      const aux = this.state.p1[4];
      this.state.p1[4] = this.state.p1[5];
      this.state.p1[5] = aux;
    }
    this.forceUpdate();
  };

  p1onChange5_6 = (e) => {
    if (this.state.p1[6] !== null) {
      const aux = this.state.p1[5];
      this.state.p1[5] = this.state.p1[6];
      this.state.p1[6] = aux;
    }
    this.forceUpdate();
  };
  p1onChange6_7 = (e) => {
    if (this.state.p1[7] !== null) {
      const aux = this.state.p1[6];
      this.state.p1[6] = this.state.p1[7];
      this.state.p1[7] = aux;
    }
    this.forceUpdate();
  };

  p1onChange7_8 = (e) => {
    if (this.state.p1[8] !== null) {
      const aux = this.state.p1[7];
      this.state.p1[7] = this.state.p1[8];
      this.state.p1[8] = aux;
    }
    this.forceUpdate();
  };

  p1onChange8_9 = (e) => {
    if (this.state.p1[9] !== null) {
      const aux = this.state.p1[8];
      this.state.p1[8] = this.state.p1[9];
      this.state.p1[9] = aux;
    }
    this.forceUpdate();
  };

  p1onChange9_10 = (e) => {
    if (this.state.p1[10] !== null) {
      const aux = this.state.p1[9];
      this.state.p1[9] = this.state.p1[10];
      this.state.p1[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////

  p2onChange0_1 = (e) => {
    if (this.state.p2[1] !== null) {
      const aux = this.state.p2[0];
      this.state.p2[0] = this.state.p2[1];
      this.state.p2[1] = aux;
    }
    this.forceUpdate();
  };

  p2onChange1_2 = (e) => {
    if (this.state.p2[2] !== null) {
      const aux = this.state.p2[1];
      this.state.p2[1] = this.state.p2[2];
      this.state.p2[2] = aux;
    }
    this.forceUpdate();
  };

  p2onChange2_3 = (e) => {
    if (this.state.p2[3] !== null) {
      const aux = this.state.p2[2];
      this.state.p2[2] = this.state.p2[3];
      this.state.p2[3] = aux;
    }
    this.forceUpdate();
  };

  p2onChange3_4 = (e) => {
    if (this.state.p2[4] !== null) {
      const aux = this.state.p2[3];
      this.state.p2[3] = this.state.p2[4];
      this.state.p2[4] = aux;
    }
    this.forceUpdate();
  };

  p2onChange4_5 = (e) => {
    if (this.state.p2[5] !== null) {
      const aux = this.state.p2[4];
      this.state.p2[4] = this.state.p2[5];
      this.state.p2[5] = aux;
    }
    this.forceUpdate();
  };

  p2onChange5_6 = (e) => {
    if (this.state.p2[6] !== null) {
      const aux = this.state.p2[5];
      this.state.p2[5] = this.state.p2[6];
      this.state.p2[6] = aux;
    }
    this.forceUpdate();
  };
  p2onChange6_7 = (e) => {
    if (this.state.p2[7] !== null) {
      const aux = this.state.p2[6];
      this.state.p2[6] = this.state.p2[7];
      this.state.p2[7] = aux;
    }
    this.forceUpdate();
  };

  p2onChange7_8 = (e) => {
    if (this.state.p2[8] !== null) {
      const aux = this.state.p2[7];
      this.state.p2[7] = this.state.p2[8];
      this.state.p2[8] = aux;
    }
    this.forceUpdate();
  };

  p2onChange8_9 = (e) => {
    if (this.state.p2[9] !== null) {
      const aux = this.state.p2[8];
      this.state.p2[8] = this.state.p2[9];
      this.state.p2[9] = aux;
    }
    this.forceUpdate();
  };

  p2onChange9_10 = (e) => {
    if (this.state.p2[10] !== null) {
      const aux = this.state.p2[9];
      this.state.p2[9] = this.state.p2[10];
      this.state.p2[10] = aux;
    }
    this.forceUpdate();
  };

  ///////////////////////////////////////////////
  p3onChange0_1 = (e) => {
    if (this.state.p3[1] !== null) {
      const aux = this.state.p3[0];
      this.state.p3[0] = this.state.p3[1];
      this.state.p3[1] = aux;
    }
    this.forceUpdate();
  };

  p3onChange1_2 = (e) => {
    if (this.state.p3[2] !== null) {
      const aux = this.state.p3[1];
      this.state.p3[1] = this.state.p3[2];
      this.state.p3[2] = aux;
    }
    this.forceUpdate();
  };

  p3onChange2_3 = (e) => {
    if (this.state.p3[3] !== null) {
      const aux = this.state.p3[2];
      this.state.p3[2] = this.state.p3[3];
      this.state.p3[3] = aux;
    }
    this.forceUpdate();
  };

  p3onChange3_4 = (e) => {
    if (this.state.p3[4] !== null) {
      const aux = this.state.p3[3];
      this.state.p3[3] = this.state.p3[4];
      this.state.p3[4] = aux;
    }
    this.forceUpdate();
  };

  p3onChange4_5 = (e) => {
    if (this.state.p3[5] !== null) {
      const aux = this.state.p3[4];
      this.state.p3[4] = this.state.p3[5];
      this.state.p3[5] = aux;
    }
    this.forceUpdate();
  };

  p3onChange5_6 = (e) => {
    if (this.state.p3[6] !== null) {
      const aux = this.state.p3[5];
      this.state.p3[5] = this.state.p3[6];
      this.state.p3[6] = aux;
    }
    this.forceUpdate();
  };
  p3onChange6_7 = (e) => {
    if (this.state.p3[7] !== null) {
      const aux = this.state.p3[6];
      this.state.p3[6] = this.state.p3[7];
      this.state.p3[7] = aux;
    }
    this.forceUpdate();
  };

  p3onChange7_8 = (e) => {
    if (this.state.p3[8] !== null) {
      const aux = this.state.p3[7];
      this.state.p3[7] = this.state.p3[8];
      this.state.p3[8] = aux;
    }
    this.forceUpdate();
  };

  p3onChange8_9 = (e) => {
    if (this.state.p3[9] !== null) {
      const aux = this.state.p3[8];
      this.state.p3[8] = this.state.p3[9];
      this.state.p3[9] = aux;
    }
    this.forceUpdate();
  };

  p3onChange9_10 = (e) => {
    if (this.state.p3[10] !== null) {
      const aux = this.state.p3[9];
      this.state.p3[9] = this.state.p3[10];
      this.state.p3[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
  p4onChange0_1 = (e) => {
    if (this.state.p4[1] !== null) {
      const aux = this.state.p4[0];
      this.state.p4[0] = this.state.p4[1];
      this.state.p4[1] = aux;
    }
    this.forceUpdate();
  };

  p4onChange1_2 = (e) => {
    if (this.state.p4[2] !== null) {
      const aux = this.state.p4[1];
      this.state.p4[1] = this.state.p4[2];
      this.state.p4[2] = aux;
    }
    this.forceUpdate();
  };

  p4onChange2_3 = (e) => {
    if (this.state.p4[3] !== null) {
      const aux = this.state.p4[2];
      this.state.p4[2] = this.state.p4[3];
      this.state.p4[3] = aux;
    }
    this.forceUpdate();
  };

  p4onChange3_4 = (e) => {
    if (this.state.p4[4] !== null) {
      const aux = this.state.p4[3];
      this.state.p4[3] = this.state.p4[4];
      this.state.p4[4] = aux;
    }
    this.forceUpdate();
  };

  p4onChange4_5 = (e) => {
    if (this.state.p4[5] !== null) {
      const aux = this.state.p4[4];
      this.state.p4[4] = this.state.p4[5];
      this.state.p4[5] = aux;
    }
    this.forceUpdate();
  };

  p4onChange5_6 = (e) => {
    if (this.state.p4[6] !== null) {
      const aux = this.state.p4[5];
      this.state.p4[5] = this.state.p4[6];
      this.state.p4[6] = aux;
    }
    this.forceUpdate();
  };
  p4onChange6_7 = (e) => {
    if (this.state.p4[7] !== null) {
      const aux = this.state.p4[6];
      this.state.p4[6] = this.state.p4[7];
      this.state.p4[7] = aux;
    }
    this.forceUpdate();
  };

  p4onChange7_8 = (e) => {
    if (this.state.p4[8] !== null) {
      const aux = this.state.p4[7];
      this.state.p4[7] = this.state.p4[8];
      this.state.p4[8] = aux;
    }
    this.forceUpdate();
  };

  p4onChange8_9 = (e) => {
    if (this.state.p4[9] !== null) {
      const aux = this.state.p4[8];
      this.state.p4[8] = this.state.p4[9];
      this.state.p4[9] = aux;
    }
    this.forceUpdate();
  };

  p4onChange9_10 = (e) => {
    if (this.state.p4[10] !== null) {
      const aux = this.state.p4[9];
      this.state.p4[9] = this.state.p4[10];
      this.state.p4[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
  p5onChange0_1 = (e) => {
    if (this.state.p5[1] !== null) {
      const aux = this.state.p5[0];
      this.state.p5[0] = this.state.p5[1];
      this.state.p5[1] = aux;
    }
    this.forceUpdate();
  };

  p5onChange1_2 = (e) => {
    if (this.state.p5[2] !== null) {
      const aux = this.state.p5[1];
      this.state.p5[1] = this.state.p5[2];
      this.state.p5[2] = aux;
    }
    this.forceUpdate();
  };

  p5onChange2_3 = (e) => {
    if (this.state.p5[3] !== null) {
      const aux = this.state.p5[2];
      this.state.p5[2] = this.state.p5[3];
      this.state.p5[3] = aux;
    }
    this.forceUpdate();
  };

  p5onChange3_4 = (e) => {
    if (this.state.p5[4] !== null) {
      const aux = this.state.p5[3];
      this.state.p5[3] = this.state.p5[4];
      this.state.p5[4] = aux;
    }
    this.forceUpdate();
  };

  p5onChange4_5 = (e) => {
    if (this.state.p5[5] !== null) {
      const aux = this.state.p5[4];
      this.state.p5[4] = this.state.p5[5];
      this.state.p5[5] = aux;
    }
    this.forceUpdate();
  };

  p5onChange5_6 = (e) => {
    if (this.state.p5[6] !== null) {
      const aux = this.state.p5[5];
      this.state.p5[5] = this.state.p5[6];
      this.state.p5[6] = aux;
    }
    this.forceUpdate();
  };
  p5onChange6_7 = (e) => {
    if (this.state.p5[7] !== null) {
      const aux = this.state.p5[6];
      this.state.p5[6] = this.state.p5[7];
      this.state.p5[7] = aux;
    }
    this.forceUpdate();
  };

  p5onChange7_8 = (e) => {
    if (this.state.p5[8] !== null) {
      const aux = this.state.p5[7];
      this.state.p5[7] = this.state.p5[8];
      this.state.p5[8] = aux;
    }
    this.forceUpdate();
  };

  p5onChange8_9 = (e) => {
    if (this.state.p5[9] !== null) {
      const aux = this.state.p5[8];
      this.state.p5[8] = this.state.p5[9];
      this.state.p5[9] = aux;
    }
    this.forceUpdate();
  };

  p5onChange9_10 = (e) => {
    if (this.state.p5[10] !== null) {
      const aux = this.state.p5[9];
      this.state.p5[9] = this.state.p5[10];
      this.state.p5[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
  p6onChange0_1 = (e) => {
    if (this.state.p6[1] !== null) {
      const aux = this.state.p6[0];
      this.state.p6[0] = this.state.p6[1];
      this.state.p6[1] = aux;
    }
    this.forceUpdate();
  };

  p6onChange1_2 = (e) => {
    if (this.state.p6[2] !== null) {
      const aux = this.state.p6[1];
      this.state.p6[1] = this.state.p6[2];
      this.state.p6[2] = aux;
    }
    this.forceUpdate();
  };

  p6onChange2_3 = (e) => {
    if (this.state.p6[3] !== null) {
      const aux = this.state.p6[2];
      this.state.p6[2] = this.state.p6[3];
      this.state.p6[3] = aux;
    }
    this.forceUpdate();
  };

  p6onChange3_4 = (e) => {
    if (this.state.p6[4] !== null) {
      const aux = this.state.p6[3];
      this.state.p6[3] = this.state.p6[4];
      this.state.p6[4] = aux;
    }
    this.forceUpdate();
  };

  p6onChange4_5 = (e) => {
    if (this.state.p6[5] !== null) {
      const aux = this.state.p6[4];
      this.state.p6[4] = this.state.p6[5];
      this.state.p6[5] = aux;
    }
    this.forceUpdate();
  };

  p6onChange5_6 = (e) => {
    if (this.state.p6[6] !== null) {
      const aux = this.state.p6[5];
      this.state.p6[5] = this.state.p6[6];
      this.state.p6[6] = aux;
    }
    this.forceUpdate();
  };
  p6onChange6_7 = (e) => {
    if (this.state.p6[7] !== null) {
      const aux = this.state.p6[6];
      this.state.p6[6] = this.state.p6[7];
      this.state.p6[7] = aux;
    }
    this.forceUpdate();
  };

  p6onChange7_8 = (e) => {
    if (this.state.p6[8] !== null) {
      const aux = this.state.p6[7];
      this.state.p6[7] = this.state.p6[8];
      this.state.p6[8] = aux;
    }
    this.forceUpdate();
  };

  p6onChange8_9 = (e) => {
    if (this.state.p6[9] !== null) {
      const aux = this.state.p6[8];
      this.state.p6[8] = this.state.p6[9];
      this.state.p6[9] = aux;
    }
    this.forceUpdate();
  };

  p6onChange9_10 = (e) => {
    if (this.state.p6[10] !== null) {
      const aux = this.state.p6[9];
      this.state.p6[9] = this.state.p6[10];
      this.state.p6[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
  p7onChange0_1 = (e) => {
    if (this.state.p7[1] !== null) {
      const aux = this.state.p7[0];
      this.state.p7[0] = this.state.p7[1];
      this.state.p7[1] = aux;
    }
    this.forceUpdate();
  };

  p7onChange1_2 = (e) => {
    if (this.state.p7[2] !== null) {
      const aux = this.state.p7[1];
      this.state.p7[1] = this.state.p7[2];
      this.state.p7[2] = aux;
    }
    this.forceUpdate();
  };

  p7onChange2_3 = (e) => {
    if (this.state.p7[3] !== null) {
      const aux = this.state.p7[2];
      this.state.p7[2] = this.state.p7[3];
      this.state.p7[3] = aux;
    }
    this.forceUpdate();
  };

  p7onChange3_4 = (e) => {
    if (this.state.p7[4] !== null) {
      const aux = this.state.p7[3];
      this.state.p7[3] = this.state.p7[4];
      this.state.p7[4] = aux;
    }
    this.forceUpdate();
  };

  p7onChange4_5 = (e) => {
    if (this.state.p7[5] !== null) {
      const aux = this.state.p7[4];
      this.state.p7[4] = this.state.p7[5];
      this.state.p7[5] = aux;
    }
    this.forceUpdate();
  };

  p7onChange5_6 = (e) => {
    if (this.state.p7[6] !== null) {
      const aux = this.state.p7[5];
      this.state.p7[5] = this.state.p7[6];
      this.state.p7[6] = aux;
    }
    this.forceUpdate();
  };
  p7onChange6_7 = (e) => {
    if (this.state.p7[7] !== null) {
      const aux = this.state.p7[6];
      this.state.p7[6] = this.state.p7[7];
      this.state.p7[7] = aux;
    }
    this.forceUpdate();
  };

  p7onChange7_8 = (e) => {
    if (this.state.p7[8] !== null) {
      const aux = this.state.p7[7];
      this.state.p7[7] = this.state.p7[8];
      this.state.p7[8] = aux;
    }
    this.forceUpdate();
  };

  p7onChange8_9 = (e) => {
    if (this.state.p7[9] !== null) {
      const aux = this.state.p7[8];
      this.state.p7[8] = this.state.p7[9];
      this.state.p7[9] = aux;
    }
    this.forceUpdate();
  };

  p7onChange9_10 = (e) => {
    if (this.state.p7[10] !== null) {
      const aux = this.state.p7[9];
      this.state.p7[9] = this.state.p7[10];
      this.state.p7[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
  p8onChange0_1 = (e) => {
    if (this.state.p8[1] !== null) {
      const aux = this.state.p8[0];
      this.state.p8[0] = this.state.p8[1];
      this.state.p8[1] = aux;
    }
    this.forceUpdate();
  };

  p8onChange1_2 = (e) => {
    if (this.state.p8[2] !== null) {
      const aux = this.state.p8[1];
      this.state.p8[1] = this.state.p8[2];
      this.state.p8[2] = aux;
    }
    this.forceUpdate();
  };

  p8onChange2_3 = (e) => {
    if (this.state.p8[3] !== null) {
      const aux = this.state.p8[2];
      this.state.p8[2] = this.state.p8[3];
      this.state.p8[3] = aux;
    }
    this.forceUpdate();
  };

  p8onChange3_4 = (e) => {
    if (this.state.p8[4] !== null) {
      const aux = this.state.p8[3];
      this.state.p8[3] = this.state.p8[4];
      this.state.p8[4] = aux;
    }
    this.forceUpdate();
  };

  p8onChange4_5 = (e) => {
    if (this.state.p8[5] !== null) {
      const aux = this.state.p8[4];
      this.state.p8[4] = this.state.p8[5];
      this.state.p8[5] = aux;
    }
    this.forceUpdate();
  };

  p8onChange5_6 = (e) => {
    if (this.state.p8[6] !== null) {
      const aux = this.state.p8[5];
      this.state.p8[5] = this.state.p8[6];
      this.state.p8[6] = aux;
    }
    this.forceUpdate();
  };
  p8onChange6_7 = (e) => {
    if (this.state.p8[7] !== null) {
      const aux = this.state.p8[6];
      this.state.p8[6] = this.state.p8[7];
      this.state.p8[7] = aux;
    }
    this.forceUpdate();
  };

  p8onChange7_8 = (e) => {
    if (this.state.p8[8] !== null) {
      const aux = this.state.p8[7];
      this.state.p8[7] = this.state.p8[8];
      this.state.p8[8] = aux;
    }
    this.forceUpdate();
  };

  p8onChange8_9 = (e) => {
    if (this.state.p8[9] !== null) {
      const aux = this.state.p8[8];
      this.state.p8[8] = this.state.p8[9];
      this.state.p8[9] = aux;
    }
    this.forceUpdate();
  };

  p8onChange9_10 = (e) => {
    if (this.state.p8[10] !== null) {
      const aux = this.state.p8[9];
      this.state.p8[9] = this.state.p8[10];
      this.state.p8[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
  p9onChange0_1 = (e) => {
    if (this.state.p9[1] !== null) {
      const aux = this.state.p9[0];
      this.state.p9[0] = this.state.p9[1];
      this.state.p9[1] = aux;
    }
    this.forceUpdate();
  };

  p9onChange1_2 = (e) => {
    if (this.state.p9[2] !== null) {
      const aux = this.state.p9[1];
      this.state.p9[1] = this.state.p9[2];
      this.state.p9[2] = aux;
    }
    this.forceUpdate();
  };

  p9onChange2_3 = (e) => {
    if (this.state.p9[3] !== null) {
      const aux = this.state.p9[2];
      this.state.p9[2] = this.state.p9[3];
      this.state.p9[3] = aux;
    }
    this.forceUpdate();
  };

  p9onChange3_4 = (e) => {
    if (this.state.p9[4] !== null) {
      const aux = this.state.p9[3];
      this.state.p9[3] = this.state.p9[4];
      this.state.p9[4] = aux;
    }
    this.forceUpdate();
  };

  p9onChange4_5 = (e) => {
    if (this.state.p9[5] !== null) {
      const aux = this.state.p9[4];
      this.state.p9[4] = this.state.p9[5];
      this.state.p9[5] = aux;
    }
    this.forceUpdate();
  };

  p9onChange5_6 = (e) => {
    if (this.state.p9[6] !== null) {
      const aux = this.state.p9[5];
      this.state.p9[5] = this.state.p9[6];
      this.state.p9[6] = aux;
    }
    this.forceUpdate();
  };
  p9onChange6_7 = (e) => {
    if (this.state.p9[7] !== null) {
      const aux = this.state.p9[6];
      this.state.p9[6] = this.state.p9[7];
      this.state.p9[7] = aux;
    }
    this.forceUpdate();
  };

  p9onChange7_8 = (e) => {
    if (this.state.p9[8] !== null) {
      const aux = this.state.p9[7];
      this.state.p9[7] = this.state.p9[8];
      this.state.p9[8] = aux;
    }
    this.forceUpdate();
  };

  p9onChange8_9 = (e) => {
    if (this.state.p9[9] !== null) {
      const aux = this.state.p9[8];
      this.state.p9[8] = this.state.p9[9];
      this.state.p9[9] = aux;
    }
    this.forceUpdate();
  };

  p9onChange9_10 = (e) => {
    if (this.state.p9[10] !== null) {
      const aux = this.state.p9[9];
      this.state.p9[9] = this.state.p9[10];
      this.state.p9[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////

  criticoonChange0_1 = (e) => {
    if (this.state.critico[1] !== null) {
      const aux = this.state.critico[0];
      this.state.critico[0] = this.state.critico[1];
      this.state.critico[1] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange1_2 = (e) => {
    if (this.state.critico[2] !== null) {
      const aux = this.state.critico[1];
      this.state.critico[1] = this.state.critico[2];
      this.state.critico[2] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange2_3 = (e) => {
    if (this.state.critico[3] !== null) {
      const aux = this.state.critico[2];
      this.state.critico[2] = this.state.critico[3];
      this.state.critico[3] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange3_4 = (e) => {
    if (this.state.critico[4] !== null) {
      const aux = this.state.critico[3];
      this.state.critico[3] = this.state.critico[4];
      this.state.critico[4] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange4_5 = (e) => {
    if (this.state.critico[5] !== null) {
      const aux = this.state.critico[4];
      this.state.critico[4] = this.state.critico[5];
      this.state.critico[5] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange5_6 = (e) => {
    if (this.state.critico[6] !== null) {
      const aux = this.state.critico[5];
      this.state.critico[5] = this.state.critico[6];
      this.state.critico[6] = aux;
    }
    this.forceUpdate();
  };
  criticoonChange6_7 = (e) => {
    if (this.state.critico[7] !== null) {
      const aux = this.state.critico[6];
      this.state.critico[6] = this.state.critico[7];
      this.state.critico[7] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange7_8 = (e) => {
    if (this.state.critico[8] !== null) {
      const aux = this.state.critico[7];
      this.state.critico[7] = this.state.critico[8];
      this.state.critico[8] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange8_9 = (e) => {
    if (this.state.critico[9] !== null) {
      const aux = this.state.critico[8];
      this.state.critico[8] = this.state.critico[9];
      this.state.critico[9] = aux;
    }
    this.forceUpdate();
  };

  criticoonChange9_10 = (e) => {
    if (this.state.critico[10] !== null) {
      const aux = this.state.critico[9];
      this.state.critico[9] = this.state.critico[10];
      this.state.critico[10] = aux;
    }
    this.forceUpdate();
  };
  ///////////////////////////////////////////////
}
