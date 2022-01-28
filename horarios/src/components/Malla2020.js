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

const { Title } = Typography;

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
              href="/users/usr/mallas/malla2020/AvanceCurricular"
              type="primary"
              icon={<ArrowRightOutlined />}
              size="large"
            >
              Elegir Malla 2020
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
              Malla 2020
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
              href="/users/usr/mallas/malla2020/DatosExtraM2020-1"
              size="large"
              icon={<PlusCircleTwoTone />}
            >
              Más Detalles
            </Button>
          </Col>
        </Row>
        <br />
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
          <Col span={8}>Formación en Ciencias Básicas</Col>
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
          <Col span={8}>Formación Transversal</Col>
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
          <Col span={8}>Formación en Ciencias de la Ingeniería</Col>
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
          <Col span={8}>
            Formación en Ingeniería Aplicada: Proyectos e Integración
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#FF99F0",
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
            Formación en Ingeniería Aplicada: Telecomuniaciones
          </Col>
          <Col span={1}>
            <Card
              bodyStyle={{
                backgroundColor: "#FAEBD7",
                padding: "0px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "5px",
              }}
            >
              <br />
            </Card>
          </Col>
          <Col span={8}>Formación en Ingeniería Aplicada: Informática</Col>
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
          <Col span={8}>Prácticas I y II</Col>
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

            <Ramo ramo={"CFG"} color={"#FFB260"} id={"10"} req={"SC"} />
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
              codigo={"CIT-2006"}
              ramo={"Estructura De Datos y Alg."}
              color={"#FAEBD7"}
              id={"14"}
              req={"9"}
            />

            <Ramo
              codigo={"CIT-2114"}
              ramo={"Redes de Datos"}
              color={"#FF99F0"}
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
              codigo={"CIT-2107"}
              ramo={"Electrónica y Electrotecnia"}
              color={"#4FFF80"}
              id={"17"}
              req={"8, 11, 12"}
            />

            <Ramo
              codigo={"CBF-1002"}
              ramo={"Electricidad y Magnetismo"}
              color={"#45C8FF"}
              id={"18"}
              req={"11, 12"}
            />

            <Ramo
              codigo={"CIT-2007"}
              ramo={"Bases de Datos"}
              color={"#FAEBD7"}
              id={"19"}
              req={"14"}
            />

            <Ramo
              codigo={"CIT-2008"}
              ramo={"Desarrollo Web y Móvil"}
              color={"#FAEBD7"}
              id={"20"}
              req={"9"}
            />

            <Ramo
              codigo={"CIG-1012"}
              ramo={"Ingles I"}
              color={"#FFB260"}
              id={"21"}
              req={"5"}
            />
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
              codigo={"CIT-2108"}
              ramo={"Taller de Redes y Servicios"}
              color={"#FF99F0"}
              id={"23"}
              req={"15, 16"}
            />

            <Ramo
              codigo={"CIT-2205"}
              ramo={"Proyecto en TICs I"}
              color={"#FFDA27"}
              id={"24"}
              req={"15, 20"}
            />

            <Ramo
              codigo={"CIT-2009"}
              ramo={"Bases de Datos Avanzadas"}
              color={"#FAEBD7"}
              id={"25"}
              req={"19"}
            />

            <Ramo ramo={"CFG"} color={"#FFB260"} id={"26"} req={"SC"} />

            <Ramo
              codigo={"CIG-1013"}
              ramo={"Ingles II"}
              color={"#FFB260"}
              id={"27"}
              req={"21"}
            />

            <Ramo
              codigo={"CIT-4000"}
              ramo={"Práctica I"}
              color={"white"}
              id={"54"}
              req={"45"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"6"} />
            <br />
            <Ramo
              codigo={"CII-2000"}
              ramo={"Contabilidad y Costos"}
              color={"#4FFF80"}
              id={"28"}
              req={"2"}
            />

            <Ramo
              codigo={"CIT-2109"}
              ramo={"Arq. y Org. de Computadores"}
              color={"#FF99F0"}
              id={"29"}
              req={"15, 17"}
            />

            <Ramo
              codigo={"CIT-2110"}
              ramo={"Señales y Sistemas"}
              color={"#FF99F0"}
              id={"30"}
              req={"13, 17"}
            />

            <Ramo
              codigo={"CIT-2010"}
              ramo={"Sistemas Operativos"}
              color={"#FAEBD7"}
              id={"31"}
              req={"19, 24"}
            />

            <Ramo ramo={"CFG"} color={"#FFB260"} id={"32"} req={"SC"} />

            <Ramo
              codigo={"CIG-1014"}
              ramo={"Ingles III"}
              color={"#FFB260"}
              id={"33"}
              req={"27"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"7"} />
            <br />
            <Ramo
              codigo={"CIT-2203"}
              ramo={"Gestión Organizacional"}
              color={"#4FFF80"}
              id={"34"}
              req={"54"}
            />

            <Ramo
              codigo={"CIT-2011"}
              ramo={"Sistemas Distribuidos"}
              color={"#FAEBD7"}
              id={"35"}
              req={"15, 31"}
            />

            <Ramo
              codigo={"CIT-2111"}
              ramo={"Comunicaciones Digitales"}
              color={"#FF99F0"}
              id={"36"}
              req={"18, 30"}
            />

            <Ramo
              codigo={"CIT-2012"}
              ramo={"Ingeniería de Software"}
              color={"#FAEBD7"}
              id={"37"}
              req={"19, 24"}
            />

            <Ramo ramo={"CFG"} color={"#FFB260"} id={"38"} req={"SC"} />
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"8"} />
            <br />
            <Ramo
              codigo={"CII-2100"}
              ramo={"Introducción a la Economía"}
              color={"#4FFF80"}
              id={"39"}
              req={"7"}
            />

            <Ramo
              codigo={"CIT-2112"}
              ramo={"Tecnologías Inalámbricas"}
              color={"#FF99F0"}
              id={"40"}
              req={"36"}
            />

            <Ramo
              codigo={"CIT-2113"}
              ramo={"Criptografía y Seg. en Redes"}
              color={"#FF99F0"}
              id={"41"}
              req={"23"}
            />

            <Ramo
              codigo={"CIT-2013"}
              ramo={"Inteligencia Artificial"}
              color={"#FAEBD7"}
              id={"42"}
              req={"16, 19, 22"}
            />

            <Ramo
              codigo={"CIT-2207"}
              ramo={"Evaluación de Proyectos TIC"}
              color={"#FFDA27"}
              id={"43"}
              req={"28, 34, 37"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"9"} />
            <br />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FAEBD7"}
              id={"44"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-3100"}
              ramo={"Arquitecturas Emergentes"}
              color={"#FF99F0"}
              id={"45"}
              req={"35"}
            />

            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FF99F0"}
              id={"46"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-3000"}
              ramo={"Arquitectura de Software"}
              color={"#FAEBD7"}
              id={"47"}
              req={"37"}
            />

            <Ramo
              codigo={"CIT-3202"}
              ramo={"Data Science"}
              color={"#FFDA27"}
              id={"48"}
              req={"25, 42"}
            />

            <Ramo
              codigo={"CIT-4001"}
              ramo={"Práctica II"}
              color={"white"}
              id={"55"}
              req={"8S"}
            />
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
            <Semestre semestre={"10"} />
            <br />
            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FAEBD7"}
              id={"49"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FF99F0"}
              id={"50"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-34XX"}
              ramo={"Electivo Profesional"}
              color={"#FF99F0"}
              id={"51"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-33XX"}
              ramo={"Electivo Profesional"}
              color={"#FAEBD7"}
              id={"52"}
              req={"SC"}
            />

            <Ramo
              codigo={"CIT-3203"}
              ramo={"Proyecto en TICs II"}
              color={"#FFDA27"}
              id={"53"}
              req={"43"}
            />
          </Col>
        </Row>

        <br />
      </Fragment>
    );
  }
}
