import React, { Component } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";

export default class Malla2018Extra3 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-around">
          <div className="col col-md-1"> </div>
          <Semestre semestre={"5"} />
          <Semestre semestre={"6"} />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10 align-items-start">
          <div className="col col-md-1"> </div>
          <RamoE
            codigo={"CII-2750"}
            ramo={"Optimización"}
            numero={"22"}
            creditos={"6"}
            prerequisitos={"Álgebra Lineal - Cálculo II"}
            formacion={"Ciencias de la Ingeniería"}
          />
          <RamoE
            codigo={"CII-2000"}
            ramo={"Introducción a la Economia"}
            numero={"28"}
            creditos={"6"}
            prerequisitos={"Cálculo II"}
            formacion={"Ciencias de la Ingeniería"}
          />

          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <div className="col">
            <div className="card border-primary">
              <h6 className="card-title text-center">
                <font size="2">CIT-2106</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  &nbsp;&nbsp;° Nombre: Electrónica y Electrotecnia
                  <br />
                  &nbsp;&nbsp;° Número: 23
                  <br />
                  &nbsp;&nbsp;° Creditos: 6
                  <br />
                  &nbsp;&nbsp;° Pre-Requisitos: Electricidad y Magnetismo
                  <br />
                  &nbsp;&nbsp;° Formación: Ciencias de la Ingeniería
                  <br />
                  <br />
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary">
              <h6 className="card-title text-center">
                <font size="2">CIT-2202</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  &nbsp;&nbsp;° Nombre: Modelos Estocasticos y Simulación
                  <br />
                  &nbsp;&nbsp;° Número: 29
                  <br />
                  &nbsp;&nbsp;° Creditos: 6
                  <br />
                  &nbsp;&nbsp;° Pre-Requisitos: Redes de Datos -
                  <br />
                  &nbsp;&nbsp;&nbsp; Probabilidades y Estadistica - Optimización
                  <br />
                  &nbsp;&nbsp;° Formación: Ciencias de la Ingeniería
                  <br />
                </font>
              </p>
            </div>
          </div>
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1">
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2018/DatosExtraM2018-2" }}
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
          </div>
          <div className="col">
            <div className="card border-primary">
              <h6 className="card-title text-center">
                <font size="2">CIT-2200</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  &nbsp;&nbsp;° Nombre: Proyectos en TICs I
                  <br />
                  &nbsp;&nbsp;° Número: 24
                  <br />
                  &nbsp;&nbsp;° Creditos: 6
                  <br />
                  &nbsp;&nbsp;° Pre-Requisitos: Redes de Datos - Diseño y
                  Análisis de Algoritmos
                  <br />
                  &nbsp;&nbsp;° Formación: Ingeniería Aplicada
                  <br />
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary">
              <h6 className="card-title text-center">
                <font size="2">CIT-2101</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  &nbsp;&nbsp;° Nombre: Señales y Sistemas
                  <br />
                  &nbsp;&nbsp;° Número: 30
                  <br />
                  &nbsp;&nbsp;° Creditos: 6
                  <br />
                  &nbsp;&nbsp;° Pre-Requisitos: Probabilidades y Estadistica -
                  Electrónica y Electrotecnia
                  <br />
                  &nbsp;&nbsp;° Formación: Ingeniería Aplicada
                  <br />
                </font>
              </p>
            </div>
          </div>
          <div className="col col-md-1">
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2018/DatosExtraM2018-4" }}
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
          </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <div className="col">
            <div className="card border-primary">
              <h6 className="card-title text-center">
                <font size="2">CIT-2002</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  &nbsp;&nbsp;° Nombre: Bases de Datos
                  <br />
                  &nbsp;&nbsp;° Número: 25
                  <br />
                  &nbsp;&nbsp;° Creditos: 6
                  <br />
                  &nbsp;&nbsp;° Pre-Requisitos: Diseño y Análisis de Algoritmos
                  <br />
                  &nbsp;&nbsp;° Formación: Ingeniería Aplicada
                  <br />
                </font>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary">
              <h6 className="card-title text-center">
                <font size="2">CIT-2003</font>
              </h6>
              <p className="card-text">
                <font size="2">
                  &nbsp;&nbsp;° Nombre: Sistemas Operativos
                  <br />
                  &nbsp;&nbsp;° Número: 31
                  <br />
                  &nbsp;&nbsp;° Creditos: 6
                  <br />
                  &nbsp;&nbsp;° Pre-Requisitos: Redes de Datos - Bases de Datos
                  <br />
                  &nbsp;&nbsp;° Formación: Ingeniería Aplicada
                  <br />
                </font>
              </p>
            </div>
          </div>
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <RamoE
            codigo={" - "}
            ramo={"Minor / CFG"}
            numero={"26"}
            creditos={"5"}
            prerequisitos={" - "}
            formacion={"Transversal"}
          />
          <RamoE
            codigo={"CIT-2103"}
            ramo={"Sistemas Digitales"}
            numero={"32"}
            creditos={"6"}
            prerequisitos={"Electrónica y Electrotecnia"}
            formacion={"Ingeniería Aplicada"}
          />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <RamoE
            codigo={"CIG-1013"}
            ramo={"Inglés II"}
            numero={"27"}
            creditos={"5"}
            prerequisitos={"Inglés I"}
            formacion={"Transversal"}
          />
          <RamoE
            codigo={"CIG-1014"}
            ramo={"Inglés III"}
            numero={"53"}
            creditos={"5"}
            prerequisitos={"Inglés II"}
            formacion={"Transversal"}
          />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col"></div>
          <div className="col"> </div>
          <div className="col"> </div>
        </div>
      </div>
    );
  }
}
