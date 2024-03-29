import React, { Component, Fragment } from "react";
import Ramo from "./RamoC";
import Semestre from "./Semestre";
import { Row, Col, Card } from "antd";

export default class Malla2010 extends Component {
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
    CIT2000: null,
    CIT2100: null,
    CIT2204: null,
    CBM2000: null,
    CBF1002: null,
    CIT2001: null,
    CFG2: null,
    FIC1001: null,
    CII2750: null,
    CIT2106: null,
    CIT2200: null,
    CIT2002: null,
    CFG3: null,
    FIC1002: null,
    CII2000: null,
    CIT2202: null,
    CIT2101: null,
    CIT2003: null,
    CIT2103: null,
    CII1000: null,
    CIT2005: null,
    CIT2102: null,
    FIC1003: null,
    CIT2104: null,
    CIT2203: null,
    CIT2004: null,
    CIT2105: null,
    CIT2201: null,
    CFG4: null,
    CIT3310: null,
    CIT3410: null,
    CIT3411: null,
    CIT3200: null,
    CIT3311: null,
    CIT3312: null,
    CIT3412: null,
    CIT3413: null,
    CIT3201: null,
    CIT3313: null,
    CIT5001: null,
    CIT5002: null,
  };

  componentDidMount = () => {
    console.log(this.props.ramos);
    for (let i = 0; i < this.props.ramos.length; i++) {
      const mov = i;
      const mov2 = this.props.ramos[mov].to_asignatura_real.codigo;
      this.setState({
        [mov2]: [this.props.ramos[mov].critico, this.props.ramos[mov].es],
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col span={3}></Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#ff6242",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Ramo Crítico: si no lo inscribes, te atrasarás.</Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#FFD44F",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}>
            Ramo No Crítico Cursable: lo puedes inscribir, pero no te atrasa si
            no lo haces.
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#28B463",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Ramo Aprobado.</Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#ffffff",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Ramo No Cursado.</Col>
          <Col span={3}></Col>
        </Row>
        <br />
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
            <Ramo
              codigo={"CBM-1000"}
              ramo={"Álgebra y Geometría"}
              state={this.state.CBM1000}
            />
            <Ramo
              codigo={"CBM-1001"}
              ramo={"Cálculo I"}
              state={this.state.CBM1001}
            />
            <Ramo
              codigo={"CBQ-1000"}
              ramo={"Química"}
              state={this.state.CBQ1000}
            />
            <Ramo
              codigo={"CIT-1000"}
              ramo={"Programación"}
              state={this.state.CIT1000}
            />
            <Ramo
              codigo={"FIC-1000"}
              ramo={"Comunicación para la Ing."}
              state={this.state.FIC1000}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"2"} />
            <br />
            <Ramo
              codigo={"CBM-1002"}
              ramo={"Álgebra Lineal"}
              state={this.state.CBM1002}
            />
            <Ramo
              codigo={"CBM-1003"}
              ramo={"Cálculo II"}
              state={this.state.CBM1003}
            />
            <Ramo
              codigo={"CBF-1000"}
              ramo={"Mecánica"}
              state={this.state.CBF1000}
            />
            <Ramo
              codigo={"CIT-1010"}
              ramo={"Programación Avanzada"}
              state={this.state.CIT1010}
            />
            <Ramo codigo={""} ramo={"Minor / CFG"} state={this.state.CFG1} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"3"} />
            <br />
            <Ramo
              codigo={"CBM-1005"}
              ramo={"Ecuaciones Diferenciales"}
              state={this.state.CBM1005}
            />
            <Ramo
              codigo={"CBM-1006"}
              ramo={"Cálculo III"}
              state={this.state.CBM1006}
            />
            <Ramo
              codigo={"CBF-1001"}
              ramo={"Calor y Ondas"}
              state={this.state.CBF1001}
            />
            <Ramo
              codigo={"CIT-2000"}
              ramo={"Estructura de Datos"}
              state={this.state.CIT2000}
            />
            <Ramo
              codigo={"CIT-2100"}
              ramo={"Redes de Datos"}
              state={this.state.CIT2100}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"4"} />
            <br />
            <Ramo
              codigo={"CIT-2204"}
              ramo={"Probabilidades y Estadística"}
              state={this.state.CIT2204}
            />
            <Ramo
              codigo={"CBM-2000"}
              ramo={"Métodos Numéricos"}
              state={this.state.CBM2000}
            />
            <Ramo
              codigo={"CBF-1002"}
              ramo={"Electricidad y Magnetismo"}
              state={this.state.CBF1002}
            />
            <Ramo
              codigo={"CIT-2001"}
              ramo={"Dis. y Análisis de Algoritmos"}
              state={this.state.CIT2001}
            />
            <Ramo codigo={""} ramo={"Minor / CFG"} state={this.state.CFG2} />
            <Ramo
              codigo={"FIC-1001"}
              ramo={"Inglés I"}
              state={this.state.FIC1001}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"5"} />
            <br />
            <Ramo
              codigo={"CII-2750"}
              ramo={"Optimización"}
              state={this.state.CII2750}
            />
            <Ramo
              codigo={"CIT-2106"}
              ramo={"Electrónica y Electrotecnia"}
              state={this.state.CIT2106}
            />
            <Ramo
              codigo={"CIT-2200"}
              ramo={"Proyecto en TICs I"}
              state={this.state.CIT2200}
            />
            <Ramo
              codigo={"CIT-2002"}
              ramo={"Bases de Datos"}
              state={this.state.CIT2002}
            />
            <Ramo codigo={""} ramo={"Minor / CFG"} state={this.state.CFG3} />
            <Ramo
              codigo={"FIC-1002"}
              ramo={"Inglés II"}
              state={this.state.FIC1002}
            />
            <Ramo codigo={""} ramo={"Practica I"} state={this.state.CIT5001} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"6"} />
            <br />
            <Ramo
              codigo={"CII-2000"}
              ramo={"Introducción a la Economía"}
              state={this.state.CII2000}
            />
            <Ramo
              codigo={"CIT-2202"}
              ramo={"Modelos Estoc. y Simul."}
              state={this.state.CIT2202}
            />
            <Ramo
              codigo={"CIT-2101"}
              ramo={"Señales y Sistemas"}
              state={this.state.CIT2101}
            />
            <Ramo
              codigo={"CIT-2003"}
              ramo={"Sistemas Operativos"}
              state={this.state.CIT2003}
            />
            <Ramo
              codigo={"CIT-2103"}
              ramo={"Sistemas Digitales"}
              state={this.state.CIT2103}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"7"} />
            <br />
            <Ramo
              codigo={"CII-1000"}
              ramo={"Contabilidad y Costos"}
              state={this.state.CII1000}
            />
            <Ramo
              codigo={"CIT-2005"}
              ramo={"Ingeniería de Software"}
              state={this.state.CIT2005}
            />
            <Ramo
              codigo={"CIT-2102"}
              ramo={"Comunicaciones Digitales"}
              state={this.state.CIT2102}
            />
            <Ramo
              codigo={"FIC-1003"}
              ramo={"Derecho en Ingeniería"}
              state={this.state.FIC1003}
            />
            <Ramo
              codigo={"CIT-2104"}
              ramo={"Arquitectura de Computadores"}
              state={this.state.CIT2104}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"8"} />
            <br />
            <Ramo
              codigo={"CIT-2203"}
              ramo={"Gestión Organizacional"}
              state={this.state.CIT2203}
            />
            <Ramo
              codigo={"CIT-2004"}
              ramo={"Arquitectura de Sistemas"}
              state={this.state.CIT2004}
            />
            <Ramo
              codigo={"CIT-2105"}
              ramo={"Criptografía y Seg. en Redes"}
              state={this.state.CIT2105}
            />
            <Ramo
              codigo={"CIT-2201"}
              ramo={"Proyecto en TICs II"}
              state={this.state.CIT2201}
            />
            <Ramo codigo={""} ramo={"Minor / CFG"} state={this.state.CFG4} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"9"} />
            <br />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3310}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3410}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3412}
            />
            <Ramo
              codigo={"CIT-3200"}
              ramo={"Evaluación de Proyectos TIC"}
              state={this.state.CIT3200}
            />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3312}
            />
            <Ramo codigo={""} ramo={"Practica II"} state={this.state.CIT5002} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"10"} />
            <br />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3311}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3411}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3413}
            />
            <Ramo
              codigo={"CIT-3201"}
              ramo={"Proyecto en TICs III"}
              state={this.state.CIT3201}
            />
            <Ramo
              codigo={"CIT33XX"}
              ramo={"Electivo Profesional"}
              state={this.state.CIT3313}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
