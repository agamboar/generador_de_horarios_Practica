import React, { Component } from "react";
import Ramo from "./Ramo";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
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
      <div className="container">
        <Button
          href="/users/usr/mallas"
          onClick={this.deleteMalla}
          icon={<ArrowLeftOutlined />}
          size="large"
        >
          Elegir otra malla
        </Button>
        <Button
          href="/users/usr/mallas/malla2010/AvanceCurricular"
          type="primary"
          icon={<ArrowRightOutlined />}
          style={{ float: "right" }}
          size="large"
        >
          Elegir Malla 2010
        </Button>
        <div style={{ textAlign: "center" }}>
          <Title
            style={{
              textAlign: "center",
              color: "#008cdb",
              fontSize: "40px",
            }}
          >
            Malla 2010
          </Title>
          <Button
            type="text"
            href="/users/usr/mallas/malla2010/DatosExtraM2010-1"
            size="large"
            icon={<PlusCircleTwoTone />}
          >
            Más Detalles
          </Button>
        </div>
        <br />
        <div className="row row-cols-10">
          <div className="col col-md-1 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#45C8FF" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">Formación en Ciencias Básicas</div>
          <div className="col col-md-1 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#FFB260" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">Formación Transversal</div>
        </div>
        <div className="row row-cols-10">
          <div className="col col-md-1 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#4FFF80" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">Formación en Ciencias de la Ingeniería</div>
          <div className="col col-md-1 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#FFDA27" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">Formación en Ingeniería Aplicada</div>
        </div>
        <div className="row row-cols-10">
          <div className="col col-md-1 mt-1">
            <div className="card border-dark text-center">
              <br />
            </div>
          </div>
          <div className="col mt-1">Prácticas I y II</div>
          <div className="col col-md-1 mt-1">*</div>
          <div className="col mt-1">
            (Electivos 33XX: Área Informática / Electivos 34XX: Área
            Telecomuniaciones)
          </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <Semestre semestre={"1"} />
          <Semestre semestre={"2"} />
          <Semestre semestre={"3"} />
          <Semestre semestre={"4"} />
          <Semestre semestre={"5"} />
          <Semestre semestre={"6"} />
          <Semestre semestre={"7"} />
          <Semestre semestre={"8"} />
          <Semestre semestre={"9"} />
          <Semestre semestre={"10"} />
          <div></div>
        </div>

        <br />

        <div className="row row-cols-10 align-items-start">
          <Ramo
            codigo={"CBM-1000"}
            ramo={"Álgebra y Geometría"}
            color={"#45C8FF"}
            id={"1"}
            req={"-"}
          />
          <Ramo
            codigo={"CBM-1002"}
            ramo={"Álgebra Lineal"}
            color={"#45C8FF"}
            id={"6"}
            req={"1"}
          />
          <Ramo
            codigo={"CBM-1005"}
            ramo={"Ecuaciones Diferenciales"}
            color={"#45C8FF"}
            id={"11"}
            req={"6, 7"}
          />
          <Ramo
            codigo={"CIT-2204"}
            ramo={"Probabilidades y Estadística"}
            color={"#4FFF80"}
            id={"16"}
            req={"7"}
          />
          <Ramo
            codigo={"CII-2750"}
            ramo={"Optimización"}
            color={"#4FFF80"}
            id={"22"}
            req={"6, 12"}
          />
          <Ramo
            codigo={"CII-2000"}
            ramo={"Introducción a la Economía"}
            color={"#4FFF80"}
            id={"28"}
            req={"12"}
          />
          <Ramo
            codigo={"CII-1000"}
            ramo={"Contabilidad y Costos"}
            color={"#4FFF80"}
            id={"33"}
            req={"2"}
          />
          <Ramo
            codigo={"CIT-2203"}
            ramo={"Gestión Organizacional"}
            color={"#4FFF80"}
            id={"38"}
            req={"5"}
          />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
            id={"43"}
            req={"SC"}
          />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
            id={"48"}
            req={"SC"}
          />
        </div>
        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"CBM-1001"}
            ramo={"Cálculo I"}
            color={"#45C8FF"}
            id={"2"}
            req={"-"}
          />
          <Ramo
            codigo={"CBM-1003"}
            ramo={"Cálculo II"}
            color={"#45C8FF"}
            id={"7"}
            req={"2"}
          />
          <Ramo
            codigo={"CBM-1006"}
            ramo={"Cálculo III"}
            color={"#45C8FF"}
            id={"12"}
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
            codigo={"CIT-2106"}
            ramo={"Electrónica y Electrotecnia"}
            color={"#4FFF80"}
            id={"23"}
            req={"18"}
          />
          <Ramo
            codigo={"CIT-2202"}
            ramo={"Modelos Estoc. y Simul."}
            color={"#4FFF80"}
            id={"29"}
            req={"15, 16, 22"}
          />
          <Ramo
            codigo={"CIT-2005"}
            ramo={"Ingeniería de Software"}
            color={"#FFDA27"}
            id={"34"}
            req={"24, 25"}
          />
          <Ramo
            codigo={"CIT-2004"}
            ramo={"Arquitectura de Sistemas"}
            color={"#FFDA27"}
            id={"39"}
            req={"34"}
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
            id={"49"}
            req={"SC"}
          />
        </div>
        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"CBQ-1000"}
            ramo={"Química"}
            color={"#45C8FF"}
            id={"3"}
            req={"-"}
          />
          <Ramo
            codigo={"CBF-1000"}
            ramo={"Mecánica"}
            color={"#45C8FF"}
            id={"8"}
            req={"2"}
          />
          <Ramo
            codigo={"CBF-1001"}
            ramo={"Calor y Ondas"}
            color={"#45C8FF"}
            id={"13"}
            req={"7, 8"}
          />

          <Ramo
            codigo={"CBF-1002"}
            ramo={"Electricidad y Magnetismo"}
            color={"#45C8FF"}
            id={"18"}
            req={"11, 12"}
          />
          <Ramo
            codigo={"CIT-2200"}
            ramo={"Proyecto en TICs I"}
            color={"#FFDA27"}
            id={"24"}
            req={"15, 19"}
          />
          <Ramo
            codigo={"CIT-2101"}
            ramo={"Señales y Sistemas"}
            color={"#FFDA27"}
            id={"30"}
            req={"16, 23"}
          />
          <Ramo
            codigo={"CIT-2102"}
            ramo={"Comunicaciones Digitales"}
            color={"#FFDA27"}
            id={"35"}
            req={"30"}
          />
          <Ramo
            codigo={"CIT-2105"}
            ramo={"Criptografía y Seg. en Redes"}
            color={"#FFDA27"}
            id={"40"}
            req={"31"}
          />
          <Ramo
            codigo={"CIT-34XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
            id={"45"}
            req={"SC"}
          />
          <Ramo
            codigo={"CIT-34XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
            id={"50"}
            req={"SC"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"CIT-1000"}
            ramo={"Programación"}
            color={"#4FFF80"}
            id={"4"}
            req={"-"}
          />
          <Ramo
            codigo={"CIT-1010"}
            ramo={"Programación Avanzada"}
            color={"#4FFF80"}
            id={"9"}
            req={"4"}
          />
          <Ramo
            codigo={"CIT-2000"}
            ramo={"Estructura de Datos"}
            color={"#FFDA27"}
            id={"14"}
            req={"9"}
          />
          <Ramo
            codigo={"CIT-2001"}
            ramo={"Dis. y Análisis de Algoritmos"}
            color={"#FFDA27"}
            id={"19"}
            req={"14"}
          />
          <Ramo
            codigo={"CIT-2002"}
            ramo={"Bases de Datos"}
            color={"#FFDA27"}
            id={"25"}
            req={"19"}
          />
          <Ramo
            codigo={"CIT-2003"}
            ramo={"Sistemas Operativos"}
            color={"#FFDA27"}
            id={"31"}
            req={"15, 25"}
          />
          <Ramo
            codigo={"FIC-1003"}
            ramo={"Derecho en Ingeniería"}
            color={"#FFB260"}
            id={"36"}
            req={"180cr"}
          />
          <Ramo
            codigo={"CIT-2201"}
            ramo={"Proyecto en TICs II"}
            color={"#FFDA27"}
            id={"41"}
            req={"24, 34, 35"}
          />
          <Ramo
            codigo={"CIT-3200"}
            ramo={"Evaluación de Proyectos TIC"}
            color={"#FFDA27"}
            id={"46"}
            req={"33, 41"}
          />
          <Ramo
            codigo={"CIT-3201"}
            ramo={"Proyecto en TICs III"}
            color={"#FFDA27"}
            id={"51"}
            req={"46"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"FIC-1000"}
            ramo={"Comunicación para la Ing."}
            color={"#FFB260"}
            id={"5"}
            req={"-"}
          />
          <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"10"} req={"SC"} />
          <Ramo
            codigo={"CIT-2100"}
            ramo={"Redes de Datos"}
            color={"#FFDA27"}
            id={"15"}
            req={"9"}
          />
          <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"20"} req={"SC"} />
          <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"26"} req={"SC"} />
          <Ramo
            codigo={"CIT-2103"}
            ramo={"Sistemas Digitales"}
            color={"#FFDA27"}
            id={"32"}
            req={"23"}
          />
          <Ramo
            codigo={"CIT-2104"}
            ramo={"Arquitectura de Computadores"}
            color={"#FFDA27"}
            id={"37"}
            req={"32"}
          />
          <Ramo ramo={"Minor / CFG"} color={"#FFB260"} id={"42"} req={"SC"} />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
            id={"47"}
            req={"SC"}
          />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
            id={"52"}
            req={"SC"}
          />
        </div>
        <br />

        <div className="row row-cols-10">
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <Ramo
            codigo={"FIC-1001"}
            ramo={"Ingles I"}
            color={"#FFB260"}
            id={"21"}
            req={"5"}
          />
          <Ramo
            codigo={"FIC-1002"}
            ramo={"Ingles II"}
            color={"#FFB260"}
            id={"27"}
            req={"21"}
          />
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
        </div>
        <br />
        <div className="row row-cols-10">
          <div className="col"></div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col ">
            <div className="card border-primary text-center">
              <h6 className="card-title">
                <font size="2">Práctica I</font>
              </h6>
            </div>
          </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col">
            <div className="card border-primary text-center">
              <h6 className="card-title">
                <font size="2">Práctica II</font>
              </h6>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </div>
    );
  }
}
