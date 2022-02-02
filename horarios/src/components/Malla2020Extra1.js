import React, { Component, Fragment } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class Malla2020Extra1 extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={2} style={{ alignSelf: "start" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
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
                <Semestre semestre={"1"} />
                <br />
                <RamoE
                  codigo={"CBM-1000"}
                  ramo={"Álgebra y Geometría"}
                  numero={"1"}
                  creditos={"7"}
                  prerequisitos={" - "}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CBM-1001"}
                  ramo={"Cálculo I"}
                  numero={"2"}
                  creditos={"7"}
                  prerequisitos={" - "}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CBQ-1000"}
                  ramo={"Química"}
                  numero={"3"}
                  creditos={"6"}
                  prerequisitos={""}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CIT-1000"}
                  ramo={"Programación"}
                  numero={"4"}
                  creditos={"6"}
                  prerequisitos={" - "}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={"FIC-1000"}
                  ramo={"Comunicación para la Ingeniería"}
                  numero={"5"}
                  creditos={"5"}
                  prerequisitos={" - "}
                  formacion={"Transversal"}
                />
              </Col>
              <Col xs={20} sm={10}>
                <Semestre semestre={"2"} />
                <br />
                <RamoE
                  codigo={"CBM-1002"}
                  ramo={"Álgebra Lineal"}
                  numero={"6"}
                  creditos={"6"}
                  prerequisitos={"Álgebra y Geometría"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CBM-1003"}
                  ramo={"Cálculo II"}
                  numero={"7"}
                  creditos={"6"}
                  prerequisitos={"Cálculo I"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CBF-1000"}
                  ramo={"Mecánica"}
                  numero={"8"}
                  creditos={"7"}
                  prerequisitos={"Cálculo I"}
                  formacion={"Ciencias Básicas"}
                />
                <RamoE
                  codigo={"CIT-1010"}
                  ramo={"Programación Avanzada"}
                  numero={"9"}
                  creditos={"6"}
                  prerequisitos={"Programación"}
                  formacion={"Ciencias de la Ingeniería"}
                />
                <RamoE
                  codigo={" - "}
                  ramo={"Minor / CFG"}
                  numero={"10"}
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
                pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-2",
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
