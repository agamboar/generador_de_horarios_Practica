import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import PERTMalla2010 from "./PERTMalla2010";
import PERTMalla2018 from "./PERTMalla2018";
import PERTMalla2020 from "./PERTMalla2020";
import axios from "axios";
import NotAuth from "./NotAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, Typography } from "antd";
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
      window.location.href = "http://127.0.0.1:8000/users/usr/crearHorario";
    }, 3000);
  };
  state = {
    malla: null,
    ramos: null,
  };

  componentDidMount = async () => {
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/PERT/",
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
    //setTimeout(function () { window.location.href = 'http://127.0.0.1:8000/users/usr/priorizarRamos'; }, 4500);
  };

  render() {
    if (localStorage.getItem("token")) {
      if (this.state.malla === 2010) {
        return (
          <Fragment>
            <ATRLayout phase={3}>
              <br />
              <br />
              <br />
              <div className="container">
                <Button
                  href="/users/usr/mallas/malla2010/AvanceCurricular"
                  icon={<ArrowLeftOutlined />}
                  size="large"
                  style={{ textAlign: "left" }}
                >
                  Volver a Avance Curricular
                </Button>
                <Button
                  href="/users/usr/priorizarRamos"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  style={{ float: "right" }}
                  size="large"
                >
                  Ir a Priorizar Asignaturas
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
                  Mis Ramos Críticos
                </Title>
                <Button
                  type="text"
                  href="/users/usr/PERT/PERTExtra1"
                  size="large"
                  icon={<PlusCircleTwoTone />}
                >
                  Más Detalles
                </Button>
              </div>

              <div className="row row-cols-3">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                  {/*<br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Ramos</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                                </div>*/}
                </div>
              </div>
              <br />
              <br />
              <PERTMalla2010 ramos={this.state.ramos} />
            </ATRLayout>
          </Fragment>
        );
      } else if (this.state.malla === 2018) {
        return (
          <Fragment>
            <ATRLayout phase={3}>
              <br />
              <br />
              <br />
              <div className="container">
                <Button
                  href="/users/usr/mallas/malla2018/AvanceCurricular"
                  icon={<ArrowLeftOutlined />}
                  size="large"
                  style={{ textAlign: "left" }}
                >
                  Volver a Avance Curricular
                </Button>
                <Button
                  href="/users/usr/priorizarRamos"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  style={{ float: "right" }}
                  size="large"
                >
                  Ir a Priorizar Asignaturas
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
                  Mis Ramos Críticos
                </Title>
                <Button
                  type="text"
                  href="/users/usr/PERT/PERTExtra1"
                  size="large"
                  icon={<PlusCircleTwoTone />}
                >
                  Más Detalles
                </Button>
              </div>
              <div className="row row-cols-3">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                  {/*<br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Ramos</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                                </div>*/}
                </div>
              </div>
              <br />
              <br />
              <PERTMalla2018 ramos={this.state.ramos} />
            </ATRLayout>
          </Fragment>
        );
      } else if (this.state.malla === 2020) {
        return (
          <Fragment>
            <ATRLayout phase={3}>
              <br />
              <br />
              <br />
              <div className="container">
                <Button
                  href="/users/usr/mallas/malla2020/AvanceCurricular"
                  icon={<ArrowLeftOutlined />}
                  size="large"
                  style={{ textAlign: "left" }}
                >
                  Volver a Avance Curricular
                </Button>
                <Button
                  href="/users/usr/priorizarRamos"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  style={{ float: "right" }}
                  size="large"
                >
                  Ir a Priorizar Asignaturas
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
                  Mis Ramos Críticos
                </Title>
                <Button
                  type="text"
                  href="/users/usr/PERT/PERTExtra1"
                  size="large"
                  icon={<PlusCircleTwoTone />}
                >
                  Más Detalles
                </Button>
              </div>
              <div className="row row-cols-3">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                  {/*<br />
                                <div className="align-self-center">
                                    <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Ramos</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                    </button>
                                </div>*/}
                </div>
              </div>
              <br />
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
                <br />
                <br />
                <br />
                <div style={{ textAlign: "center" }}>
                  <Title
                    style={{
                      textAlign: "center",
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Mis Ramos Críticos
                  </Title>
                </div>
                <div className="row row-cols-3">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <h2 className="display-6">No has elegido ninguna malla</h2>
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
                  <div className="spinner-border text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="spinner-grow text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="spinner-grow text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br />
                <br />
                <br />
              </ATRLayout>
            ) : (
              <ATRLayout phase={3}>
                <br />
                <br />
                <br />
                <div style={{ textAlign: "center" }}>
                  <Title
                    style={{
                      textAlign: "center",
                      color: "#008cdb",
                      fontSize: "40px",
                    }}
                  >
                    Mis Ramos Críticos
                  </Title>
                </div>
                <div className="row row-cols-3">
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <h2 className="display-6">
                    Se estan obteniendo tus ramos críticos
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <h4 className="display-6">Un momento porfavor...</h4>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <div className="spinner-grow text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="spinner-grow text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="spinner-border text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="spinner-grow text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="spinner-grow text-primary" role="status" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br />
                <br />
                <br />
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
