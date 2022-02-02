import React, { Component, Fragment } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class Malla2020Extra3 extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-3" }}
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
                  codigo={"CIT-2203"}
                  ramo={"Gestión Organizacional"}
                  numero={"34"}
                  creditos={"6"}
                  prerequisitos={"Práctica I"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CIT-2011"}
                  ramo={"Sistemas Distribuidos"}
                  numero={"35"}
                  creditos={"6"}
                  prerequisitos={"Redes de Datos - Sistemas Operativos"}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-2111"}
                  ramo={"Comunicaciones Digitales"}
                  numero={"36"}
                  creditos={"6"}
                  prerequisitos={"Señales y Sistemas"}
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-2012"}
                  ramo={"Ingeniería de Software"}
                  numero={"37"}
                  creditos={"6"}
                  prerequisitos={"Bases de Datos - Proyecto en TICs I"}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={" - "}
                  ramo={"Minor / CFG"}
                  numero={"38"}
                  creditos={"5"}
                  prerequisitos={" - "}
                  formacion={"Transversal"}
                />
              </Col>
              <Col xs={20} sm={10}>
                <Semestre semestre={"8"} />
                <br />
                <RamoE
                  codigo={"CII-2100"}
                  ramo={"Introducción a la Economía"}
                  numero={"39"}
                  creditos={"6"}
                  prerequisitos={"Cálculo II"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CIT-2112"}
                  ramo={"Tecnologías Inalámbricas"}
                  numero={"40"}
                  creditos={"6"}
                  prerequisitos={"Ingeniería de Software"}
                  formacion={"Ingeniería Aplicada - Telecomuniaciones"}
                />
                <RamoE
                  codigo={"CIT-2113"}
                  ramo={"Criptografía y Seguridad en Redes"}
                  numero={"41"}
                  creditos={"6"}
                  prerequisitos={"Sistemas Operativos"}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-2013"}
                  ramo={"Inteligencia Artificial"}
                  numero={"42"}
                  creditos={"6"}
                  prerequisitos={
                    "Probabilidades y Estadística - Bases de Datos - Optimización"
                  }
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-2207"}
                  ramo={"Evaluación de Proyectos TIC"}
                  numero={"43"}
                  creditos={"6"}
                  prerequisitos={
                    "Contabilidad y Costos - Gestión Org. -  Ing. de Software"
                  }
                  formacion={"Ingeniería Aplicada - Proyetos e Integración"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{
                pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-5",
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
