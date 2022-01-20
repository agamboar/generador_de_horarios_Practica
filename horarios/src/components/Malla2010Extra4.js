import React, { Component, Fragment } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class Malla2010Extra3 extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2010/DatosExtraM2010-3" }}
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
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
            </Link>
          </Col>
          <Col span={20}>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
              justify="center"
            >
              <Col xs={20} sm={10}>
                <Semestre semestre={"7"} />
                <br />
                <RamoE
                  codigo={"CII-1000"}
                  ramo={"Contabilidad y Costos"}
                  numero={"33"}
                  creditos={"6"}
                  prerequisitos={"Cálculo I"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CIT-2005"}
                  ramo={"Ingeniería de Software"}
                  numero={"34"}
                  creditos={"6"}
                  prerequisitos={"Proyecto en TICs I - Bases de Datos"}
                  formacion={"Ingeniería Aplicada "}
                />
                <RamoE
                  codigo={"CIT-2102"}
                  ramo={"Comunicaciones Digitales"}
                  numero={"35"}
                  creditos={"6"}
                  prerequisitos={"Señales y Sistemas"}
                  formacion={"Ingeniería Aplicada"}
                />
                <RamoE
                  codigo={"FIC-1003"}
                  ramo={"Derecho en Ingeniería"}
                  numero={"35"}
                  creditos={"5"}
                  prerequisitos={"180 Créditos"}
                  formacion={"Transversal"}
                />
                <RamoE
                  codigo={"CIT-2104"}
                  ramo={"Arquitectura de Computadores"}
                  numero={"37"}
                  creditos={"6"}
                  prerequisitos={"Sistemas Digitales"}
                  formacion={"Ingeniería Aplicada"}
                />
              </Col>
              <Col xs={20} sm={10}>
                <Semestre semestre={"8"} />
                <br />
                <RamoE
                  codigo={"CIT-2203"}
                  ramo={"Gestión Organizacional"}
                  numero={"38"}
                  creditos={"6"}
                  prerequisitos={"Comuniación para la Ingeniería"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CIT-2004"}
                  ramo={"Arquitectura de Sistemas"}
                  numero={"39"}
                  creditos={"6"}
                  prerequisitos={"Ingeniería de Software"}
                  formacion={"Ingeniería Aplicada"}
                />
                <RamoE
                  codigo={"CIT-2105"}
                  ramo={"Criptografía y Seguridad en Redes"}
                  numero={"40"}
                  creditos={"6"}
                  prerequisitos={"Sistemas Operativos"}
                  formacion={"Ingeniería Aplicada"}
                />
                <RamoE
                  codigo={"CIT-2201"}
                  ramo={"Proyecto en TICs II"}
                  numero={"41"}
                  creditos={"6"}
                  prerequisitos={
                    "Proyecto en TICs I - Ingeniería de Software - Comunicaciones Digitales"
                  }
                  formacion={"Ingeniería Aplicada"}
                />
                <RamoE
                  codigo={" - "}
                  ramo={"Minor / CFG"}
                  numero={"42"}
                  creditos={"5"}
                  prerequisitos={" - "}
                  formacion={"Transversal"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{
                pathname: "/users/usr/mallas/malla2010/DatosExtraM2010-5",
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
