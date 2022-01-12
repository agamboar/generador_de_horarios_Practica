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
          />
          <Ramo codigo={"CBM-1002"} ramo={"Álgebra Lineal"} color={"#45C8FF"} />
          <Ramo
            codigo={"CBM-1005"}
            ramo={"Ecuaciones Diferenciales"}
            color={"#45C8FF"}
          />
          <Ramo
            codigo={"CIT-2204"}
            ramo={"Probabilidades y Estadisticas"}
            color={"#4FFF80"}
          />
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#4FFF80" }}
            >
              <h6 className="card-title">
                <font size="2">CII-2750</font>
              </h6>
              <p className="card-text">
                <font size="2">Optimización &nbsp;</font>
              </p>
            </div>
          </div>
          <Ramo
            codigo={"CII-2000"}
            ramo={"Introducción a la Economía"}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CII-1000"}
            ramo={"Contabilidad y Costos"}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CIT-2203"}
            ramo={"Gestión Organizacional"}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#45C8FF" }}
            >
              <h6 className="card-title">
                <font size="2">CBM-1001</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  Cálculo I
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#45C8FF" }}
            >
              <h6 className="card-title">
                <font size="2">CBM-1003</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  Cálculo II
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#45C8FF" }}
            >
              <h6 className="card-title">
                <font size="2">CBM-1006</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  Cálculo III
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </font>
              </p>
            </div>
          </div>
          <Ramo
            codigo={"CBM-2000"}
            ramo={"Métodos Numéricos"}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CIT-2106"}
            ramo={"Electrónica y Electrotecnia"}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CIT-2202"}
            ramo={"Modelos Estoc. y Simul."}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CIT-2005"}
            ramo={"Ingeniería de Software"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-2004"}
            ramo={"Arquitectura de Sistemas"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-34XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-34XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#45C8FF" }}
            >
              <h6 className="card-title">
                <font size="2">CBQ-1000</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  Química &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#45C8FF" }}
            >
              <h6 className="card-title">
                <font size="2">CBF-1000</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  Mecánica
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#45C8FF" }}
            >
              <h6 className="card-title">
                <font size="2">CBF-1001</font>
              </h6>
              <p className="card-text">
                <font size="2">Calor y Ondas &nbsp;</font>
              </p>
            </div>
          </div>
          <Ramo
            codigo={"CBF-1002"}
            ramo={"Electricidad y Magnetismo"}
            color={"#45C8FF"}
          />
          <Ramo
            codigo={"CIT-2200"}
            ramo={"Proyectos en TICs I"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-2101"}
            ramo={"Señales y Sistemas"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-2102"}
            ramo={"Comunicacio -nes Digitales"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-2105"}
            ramo={"Criptografía y Seg. en Redes"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-34XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-34XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#4FFF80" }}
            >
              <h6 className="card-title">
                <font size="2">CIT-1000</font>
              </h6>
              <p className="card-text">
                <font size="2">Programación &nbsp;</font>
              </p>
            </div>
          </div>
          <Ramo
            codigo={"CIT-1010"}
            ramo={"Programación Avanzada"}
            color={"#4FFF80"}
          />
          <Ramo
            codigo={"CIT-2000"}
            ramo={"Estructura de Datos"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-2001"}
            ramo={"Dis. y Análisis de Algoritmos"}
            color={"#FFDA27"}
          />
          <Ramo codigo={"CIT-2002"} ramo={"Bases de Datos"} color={"#FFDA27"} />
          <Ramo
            codigo={"CIT-2003"}
            ramo={"Sistemas Operativos"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"FIC-1003"}
            ramo={"Derecho en Ingeniería"}
            color={"#FFB260"}
          />
          <Ramo
            codigo={"CIT-2201"}
            ramo={"Proyecto en TICs II"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-3200"}
            ramo={"Evaluación de Proyectos TIC"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-3201"}
            ramo={"Proyecto en TICs III"}
            color={"#FFDA27"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"FIC-1000"}
            ramo={"Comunicación para la Ing."}
            color={"#FFB260"}
          />
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#FFB260" }}
            >
              <h6 className="card-title">
                <font size="2"> &nbsp; </font>
              </h6>
              <p className="card-text">
                <font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font>
              </p>
            </div>
          </div>
          <Ramo codigo={"CIT-2100"} ramo={"Redes de Datos"} color={"#FFDA27"} />
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#FFB260" }}
            >
              <h6 className="card-title">
                <font size="2"> &nbsp; </font>
              </h6>
              <p className="card-text">
                <font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font>
              </p>
            </div>
          </div>
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#FFB260" }}
            >
              <h6 className="card-title">
                <font size="2"> &nbsp; </font>
              </h6>
              <p className="card-text">
                <font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font>
              </p>
            </div>
          </div>
          <Ramo
            codigo={"CIT-2103"}
            ramo={"Sistemas Digitales"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-2104"}
            ramo={"Arq. de Computadores"}
            color={"#FFDA27"}
          />
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#FFB260" }}
            >
              <h6 className="card-title">
                <font size="2"> &nbsp; </font>
              </h6>
              <p className="card-text">
                <font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font>
              </p>
            </div>
          </div>
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
          <Ramo
            codigo={"CIT-33XX"}
            ramo={"Electivo Profesional"}
            color={"#FFDA27"}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col">
            <div
              className="card border-primary text-center"
              style={{ background: "#FFB260" }}
            >
              <h6 className="card-title">
                <font size="2">FIC-1001</font>
              </h6>
              <p className="card-text">
                <font size="2">Inglés I</font>
              </p>
            </div>
          </div>
          <div className="col ">
            <div
              className="card border-primary text-center"
              style={{ background: "#FFB260" }}
            >
              <h6 className="card-title">
                <font size="2">FIC-1002</font>
              </h6>
              <p className="card-text">
                <font size="2">Inglés II</font>
              </p>
            </div>
          </div>
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
