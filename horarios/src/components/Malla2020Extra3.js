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
              to={{ pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-2" }}
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
                <Semestre semestre={"5"} />
                <br />
                <RamoE
                  codigo={"CII-2750"}
                  ramo={"Optimización"}
                  numero={"22"}
                  creditos={"6"}
                  prerequisitos={"Álgebra Lineal - Cálculo II"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CIT-2108"}
                  ramo={"Taller de Redes y Servicios"}
                  numero={"23"}
                  creditos={"6"}
                  prerequisitos={
                    "Redes de Datos - Probabilidades y Estadistica"
                  }
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-2205"}
                  ramo={"Proyecto en TICs"}
                  numero={"24"}
                  creditos={"6"}
                  prerequisitos={"Redes de Datos - Desarrollo Web y Móvil"}
                  formacion={"Ingeniería Aplicada - Telecomuniaciones"}
                />
                <RamoE
                  codigo={"CIT-2009"}
                  ramo={"Bases de Datos Avanzadas"}
                  numero={"25"}
                  creditos={"6"}
                  prerequisitos={"Bases de Datos"}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={" - "}
                  ramo={"Minor / CFG"}
                  numero={"26"}
                  creditos={"5"}
                  prerequisitos={" - "}
                  formacion={"Transversal"}
                />
                <RamoE
                  codigo={"CIG-1013"}
                  ramo={"Inglés II"}
                  numero={"27"}
                  creditos={"5"}
                  prerequisitos={"Inglés I"}
                  formacion={"Transversal"}
                />
                <RamoE
                  codigo={"CIT-4000"}
                  ramo={"Práctica I"}
                  numero={"54"}
                  creditos={"7"}
                  prerequisitos={"4 Semestres Cursados"}
                  formacion={"Prácticas"}
                />
              </Col>
              <Col xs={20} sm={10}>
                <Semestre semestre={"6"} />
                <br />
                <RamoE
                  codigo={"CII-1000"}
                  ramo={"Contabilidad y Costos"}
                  numero={"28"}
                  creditos={"6"}
                  prerequisitos={"Cálculo I"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CIT-2109"}
                  ramo={"Arquitectura y Organización de Computadores"}
                  numero={"29"}
                  creditos={"6"}
                  prerequisitos={"Redes de Datos - Electrónica y Electrotecnia"}
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-2110"}
                  ramo={"Señales y Sistemas"}
                  numero={"30"}
                  creditos={"6"}
                  prerequisitos={"Calor y Ondas - Electrónica y Electrotecnia"}
                  formacion={"Ingeniería Aplicada - Proyectos e Integración"}
                />
                <RamoE
                  codigo={"CIT-2010"}
                  ramo={"Sistemas Operativos"}
                  numero={"31"}
                  creditos={"6"}
                  prerequisitos={
                    "Estructura de Datos y Algoritmos - Taller de Redes y Servicios"
                  }
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={" - "}
                  ramo={"Minor / CFG"}
                  numero={"32"}
                  creditos={"5"}
                  prerequisitos={" - "}
                  formacion={"Transversal"}
                />
                <RamoE
                  codigo={"CIG-1014"}
                  ramo={"Inglés III"}
                  numero={"33"}
                  creditos={"5"}
                  prerequisitos={"Inglés II"}
                  formacion={"Transversal"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{
                pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-4",
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
