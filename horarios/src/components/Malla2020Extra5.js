import React, { Component, Fragment } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class Malla2020Extra4 extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={2} style={{ alignSelf: "start" }}>
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-4" }}
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
                <Semestre semestre={"9"} />
                <br />
                <RamoE
                  codigo={"CIT-33XX"}
                  ramo={"Electivo Profesional"}
                  numero={"44"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-3100"}
                  ramo={"Arquitecturas Emergentes"}
                  numero={"45"}
                  creditos={"6"}
                  prerequisitos={" Sistemas Distribuidos "}
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-34XX"}
                  ramo={"Electivo Profesional"}
                  numero={"46"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-3000"}
                  ramo={"Arquitectura de Software"}
                  numero={"46"}
                  creditos={"6"}
                  prerequisitos={"Ingeniería de Software"}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-3202"}
                  ramo={"Data Science"}
                  numero={"48"}
                  creditos={"6"}
                  prerequisitos={
                    " Base de Datos Avanzadas - Inteligencia Artificial "
                  }
                  formacion={"Ingeniería Aplicada -  Proyectos e Integración"}
                />
                <RamoE
                  codigo={"CIT-4001"}
                  ramo={"Práctica II"}
                  numero={"55"}
                  creditos={"7"}
                  prerequisitos={"8 Semestres Cursados"}
                  formacion={"Prácticas"}
                />
              </Col>
              <Col xs={20} sm={10}>
                <Semestre semestre={"10"} />
                <br />
                <RamoE
                  codigo={"CIT-33XX"}
                  ramo={"Electivo Profesional"}
                  numero={"49"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-34XX"}
                  ramo={"Electivo Profesional"}
                  numero={"50"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-34XX"}
                  ramo={"Electivo Profesional"}
                  numero={"51"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ingeniería Aplicada - Telecomunicaciones"}
                />
                <RamoE
                  codigo={"CIT-33XX"}
                  ramo={"Electivo Profesional"}
                  numero={"51"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ingeniería Aplicada - Informática"}
                />
                <RamoE
                  codigo={"CIT-3203"}
                  ramo={"Proyecto en TICs II"}
                  numero={"53"}
                  creditos={"6"}
                  prerequisitos={" Evaluación de Proyectos TIC "}
                  formacion={"Ingeniería Aplicada - Proyectos e Intregración"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ alignSelf: "start" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
