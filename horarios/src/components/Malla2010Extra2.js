import React, { Component, Fragment } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class Malla2010Extra2 extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2010/DatosExtraM2010-1" }}
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
                <Semestre semestre={"3"} />
                <br />
                <RamoE
                  codigo={"CBM-1005"}
                  ramo={"Ecuaciones Diferenciales"}
                  numero={"11"}
                  creditos={"6"}
                  prerequisitos={"Álgebra Lineal - Cálculo II"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CBM-1006"}
                  ramo={"Cálculo III"}
                  numero={"12"}
                  creditos={"6"}
                  prerequisitos={"Cálculo II"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CBF-1001"}
                  ramo={"Calor y Ondas"}
                  numero={"13"}
                  creditos={"7"}
                  prerequisitos={"Cálculo II - Mecánica"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CIT-2000"}
                  ramo={"Estructura de Datos"}
                  numero={"14"}
                  creditos={"6"}
                  prerequisitos={"Programación Avanzada"}
                  formacion={"Ingeniería Aplicada"}
                />
                <RamoE
                  codigo={"CIT-2100"}
                  ramo={"Redes de Datos"}
                  numero={"15"}
                  creditos={"6"}
                  prerequisitos={"Programación Avanzada"}
                  formacion={"Ingeniería Aplicada"}
                />
              </Col>
              <Col xs={20} sm={10}>
                <Semestre semestre={"4"} />
                <br />
                <RamoE
                  codigo={"CIT-2204"}
                  ramo={"Probabilidades y Estadistica"}
                  numero={"16"}
                  creditos={"6"}
                  prerequisitos={"Cálculo II"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CBM-2000"}
                  ramo={"Métodos Numéricos"}
                  numero={"17"}
                  creditos={"6"}
                  prerequisitos={"Álgebra Lineal - Cálculo II"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"CBF-1002"}
                  ramo={"Electricidad y Magnetismo"}
                  numero={"18"}
                  creditos={"7"}
                  prerequisitos={"Ecuaciones Diferenciales - Cálculo III"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CIT-2001"}
                  ramo={"Diseño y Análisis de Algoritmos"}
                  numero={"19"}
                  creditos={"6"}
                  prerequisitos={"Estructura de Datos"}
                  formacion={"Ingeniería Aplicada"}
                />
                <RamoE
                  codigo={" - "}
                  ramo={"Minor / CFG"}
                  numero={"20"}
                  creditos={"5"}
                  prerequisitos={" - "}
                  formacion={"Transversal"}
                />
                <RamoE
                  codigo={"FIC-1001"}
                  ramo={"Inglés I"}
                  numero={"21"}
                  creditos={"5"}
                  prerequisitos={""}
                  formacion={"Transversal"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{
                pathname: "/users/usr/mallas/malla2010/DatosExtraM2010-3",
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
