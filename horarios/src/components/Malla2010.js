import React, { Component, Fragment } from "react";
import Ramo from "./Ramo";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Button, Typography, Row, Col, Card } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title, Text } = Typography;

export default class Malla2010 extends Component {
  deleteMalla = (e) => {
    localStorage.removeItem("malla");
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/delete_asignaturasCursadas/",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"), //cambiiar a localStorage
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => console.log(response.data.mensaje))
      .catch(function (error) {
        if (error.response) {
          if (error.response.data.non_field_errors) {
            console.log(error.response);
          }
          //notify(`error:  ${error.response.data.non_field_errors[0]}`);
        }
      });
  };
  render() {
    return (
      <Fragment>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col xs={24} sm={12} style={{ textAlign: "center" }}>
            <Button
              href="/users/usr/mallas"
              onClick={this.deleteMalla}
              icon={<ArrowLeftOutlined />}
              size="large"
            >
              Elegir otra malla
            </Button>
          </Col>

          <Col xs={24} sm={12} style={{ textAlign: "center" }}>
            <Button
              href="/users/usr/mallas/malla2010/AvanceCurricular"
              type="primary"
              icon={<ArrowRightOutlined />}
              size="large"
            >
              Elegir Malla 2010
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
              Malla 2010
            </Title>
          </Col>
        </Row>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              type="text"
              href="/users/usr/mallas/malla2010/DatosExtraM2010-1"
              size="large"
              icon={<PlusCircleTwoTone />}
            >
              Más Detalles
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#45C8FF",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Formación en Ciencias Básicas</Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#FFB260",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Formación Transversal</Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#4FFF80",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Formación en Ciencias de la Ingeniería</Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#FFDA27",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}> Formación en Ingeniería Aplicada</Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={3}></Col>
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
          <Col span={8}> Prácticas I y II</Col>
          <Col span={1}>*</Col>
          <Col span={8}>
            (Electivos 33XX: Área Informática / Electivos 34XX: Área
            Telecomuniaciones)
          </Col>
          <Col span={3}></Col>
        </Row>
        <br />
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
              color={"#45C8FF"}
              id={"1"}
              req={"-"}
            />
            <Ramo
              codigo={"CBM-1001"}
              ramo={"Cálculo I"}
              color={"#45C8FF"}
              id={"2"}
              req={"-"}
            />
            <Ramo
              codigo={"CBQ-1000"}
              ramo={"Química"}
              color={"#45C8FF"}
              id={"3"}
              req={"-"}
            />
            <Ramo
              codigo={"CIT-1000"}
              ramo={"Programación"}
              color={"#4FFF80"}
              id={"4"}
              req={"-"}
            />
            <Ramo
              codigo={"FIC-1000"}
              ramo={"Comunicación para la Ing."}
              color={"#FFB260"}
              id={"5"}
              req={"-"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"2"} />
            <br />
            <Ramo
              codigo={"CBM-1002"}
              ramo={"Álgebra Lineal"}
              color={"#45C8FF"}
              id={"6"}
              req={"1"}
            />
            <Ramo
              codigo={"CBM-1003"}
              ramo={"Cálculo II"}
              color={"#45C8FF"}
              id={"7"}
              req={"2"}
            />
            <Ramo
              codigo={"CBF-1000"}
              ramo={"Mecánica"}
              color={"#45C8FF"}
              id={"8"}
              req={"2"}
            />
            <Ramo
              codigo={"CIT-1010"}
              ramo={"Programación Avanzada"}
              color={"#4FFF80"}
              id={"9"}
              req={"4"}
            />
            <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"10"} req={"SC"} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"3"} />
            <br />
            <Ramo
              codigo={"CBM-1005"}
              ramo={"Ecuaciones Diferenciales"}
              color={"#45C8FF"}
              id={"11"}
              req={"6, 7"}
            />

            <Ramo
              codigo={"CBM-1006"}
              ramo={"Cálculo III"}
              color={"#45C8FF"}
              id={"12"}
              req={"7"}
            />
            <Ramo
              codigo={"CBF-1001"}
              ramo={"Calor y Ondas"}
              color={"#45C8FF"}
              id={"13"}
              req={"7, 8"}
            />
            <Ramo
              codigo={"CIT-2000"}
              ramo={"Estructura de Datos"}
              color={"#FFDA27"}
              id={"14"}
              req={"9"}
            />
            <Ramo
              codigo={"CIT-2100"}
              ramo={"Redes de Datos"}
              color={"#FFDA27"}
              id={"15"}
              req={"9"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"4"} />
            <br />
            <Ramo
              codigo={"CIT-2204"}
              ramo={"Probabilidades y Estadística"}
              color={"#4FFF80"}
              id={"16"}
              req={"7"}
            />
            <Ramo
              codigo={"CBM-2000"}
              ramo={"Métodos Numéricos"}
              color={"#4FFF80"}
              id={"17"}
              req={"6, 7"}
            />
            <Ramo
              codigo={"CBF-1002"}
              ramo={"Electricidad y Magnetismo"}
              color={"#45C8FF"}
              id={"18"}
              req={"11, 12"}
            />
            <Ramo
              codigo={"CIT-2001"}
              ramo={"Dis. y Análisis de Algoritmos"}
              color={"#FFDA27"}
              id={"19"}
              req={"14"}
            />
            <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"20"} req={"SC"} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"5"} />
            <br />
            <Ramo
              codigo={"CII-2750"}
              ramo={"Optimización"}
              color={"#4FFF80"}
              id={"22"}
              req={"6, 12"}
            />
            <Ramo
              codigo={"CIT-2106"}
              ramo={"Electrónica y Electrotecnia"}
              color={"#4FFF80"}
              id={"23"}
              req={"18"}
            />
            <Ramo
              codigo={"CIT-2200"}
              ramo={"Proyecto en TICs I"}
              color={"#FFDA27"}
              id={"24"}
              req={"15, 19"}
            />
            <Ramo
              codigo={"CIT-2002"}
              ramo={"Bases de Datos"}
              color={"#FFDA27"}
              id={"25"}
              req={"19"}
            />
            <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"26"} req={"SC"} />

            <Ramo ramo={"Práctica I"} color={"#ffffff"} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"6"} />
            <br />
            <Ramo
              codigo={"CII-2000"}
              ramo={"Introducción a la Economía"}
              color={"#4FFF80"}
              id={"28"}
              req={"12"}
            />
            <Ramo
              codigo={"CIT-2202"}
              ramo={"Modelos Estoc. y Simul."}
              color={"#4FFF80"}
              id={"29"}
              req={"15, 16, 22"}
            />
            <Ramo
              codigo={"CIT-2101"}
              ramo={"Señales y Sistemas"}
              color={"#FFDA27"}
              id={"30"}
              req={"16, 23"}
            />
            <Ramo
              codigo={"CIT-2003"}
              ramo={"Sistemas Operativos"}
              color={"#FFDA27"}
              id={"31"}
              req={"15, 25"}
            />
            <Ramo
              codigo={"CIT-2103"}
              ramo={"Sistemas Digitales"}
              color={"#FFDA27"}
              id={"32"}
              req={"23"}
            />
            <Ramo
              codigo={"FIC-1001"}
              ramo={"Ingles I"}
              color={"#FFB260"}
              id={"21"}
              req={"5"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"7"} />
            <br />
            <Ramo
              codigo={"CII-1000"}
              ramo={"Contabilidad y Costos"}
              color={"#4FFF80"}
              id={"33"}
              req={"2"}
            />
            <Ramo
              codigo={"CIT-2005"}
              ramo={"Ingeniería de Software"}
              color={"#FFDA27"}
              id={"34"}
              req={"24, 25"}
            />
            <Ramo
              codigo={"CIT-2102"}
              ramo={"Comunicaciones Digitales"}
              color={"#FFDA27"}
              id={"35"}
              req={"30"}
            />
            <Ramo
              codigo={"FIC-1003"}
              ramo={"Derecho en Ingeniería"}
              color={"#FFB260"}
              id={"36"}
              req={"180cr"}
            />
            <Ramo
              codigo={"CIT-2104"}
              ramo={"Arquitectura de Computadores"}
              color={"#FFDA27"}
              id={"37"}
              req={"32"}
            />
            <Ramo
              codigo={"FIC-1002"}
              ramo={"Ingles II"}
              color={"#FFB260"}
              id={"27"}
              req={"21"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"8"} />
            <br />
            <Ramo
              codigo={"CIT-2203"}
              ramo={"Gestión Organizacional"}
              color={"#4FFF80"}
              id={"38"}
              req={"5"}
            />
            <Ramo
              codigo={"CIT-2004"}
              ramo={"Arquitectura de Sistemas"}
              color={"#FFDA27"}
              id={"39"}
              req={"34"}
            />
            <Ramo
              codigo={"CIT-2105"}
              ramo={"Criptografía y Seg. en Redes"}
              color={"#FFDA27"}
              id={"40"}
              req={"31"}
            />
            <Ramo
              codigo={"CIT-2201"}
              ramo={"Proyecto en TICs II"}
              color={"#FFDA27"}
              id={"41"}
              req={"24, 34, 35"}
            />
            <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"42"} req={"SC"} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"9"} />
            <br />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"43"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"44"}
              req={"SC"}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"45"}
              req={"SC"}
            />
            <Ramo
              codigo={"CIT-3200"}
              ramo={"Evaluación de Proyectos TIC"}
              color={"#FFDA27"}
              id={"46"}
              req={"33, 41"}
            />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"47"}
              req={"SC"}
            />

            <Ramo ramo={"Práctica II"} color={"#ffffff"} />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"10"} />
            <br />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"48"}
              req={"SC"}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"49"}
              req={"SC"}
            />
            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"50"}
              req={"SC"}
            />
            <Ramo
              codigo={"CIT-3201"}
              ramo={"Proyecto en TICs III"}
              color={"#FFDA27"}
              id={"51"}
              req={"46"}
            />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FFDA27"}
              id={"52"}
              req={"SC"}
            />
          </Col>
        </Row>

        <br />
      </Fragment>
    );
  }
}
