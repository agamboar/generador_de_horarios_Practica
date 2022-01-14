import React, { Component } from "react";
import RamoE from "./RamoE";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";

export default class Malla2020Extra2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-around">
          <div className="col col-md-1"> </div>
          <Semestre semestre={"3"} />
          <Semestre semestre={"4"} />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10 align-items-start">
          <div className="col col-md-1"> </div>
          <RamoE
            codigo={"CBM-1005"}
            ramo={"Ecuaciones Diferenciales"}
            numero={"11"}
            creditos={"6"}
            prerequisitos={"Álgebra Lineal - Cálculo II"}
            formacion={"Ciencias Básicas"}
          />
          <RamoE
            codigo={"CIT-2204"}
            ramo={"Probabilidades y Estadistica"}
            numero={"16"}
            creditos={"6"}
            prerequisitos={"Cálculo II"}
            formacion={"Ciencias de la Ingeniería"}
          />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <RamoE
            codigo={"CBM-1006"}
            ramo={"Cálculo III"}
            numero={"12"}
            creditos={"6"}
            prerequisitos={"Cálculo II"}
            formacion={"Ciencias Básicas"}
          />
          <RamoE
            codigo={"CIT-2107"}
            ramo={"Electrónica y Electrotecnia"}
            numero={"17"}
            creditos={"6"}
            prerequisitos={"Mecánica - Ecuaciones Diferenciales - Calculo III"}
            formacion={"Ciencias de la Ingeniería"}
          />

          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1">
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-1" }}
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
          <RamoE
            codigo={"CBF-1001"}
            ramo={"Calor y Ondas"}
            numero={"13"}
            creditos={"7"}
            prerequisitos={"Cálculo II - Mecánica"}
            formacion={"Ciencias Básicas"}
          />
          <RamoE
            codigo={"CBF-1002"}
            ramo={"Electricidad y Magnetismo"}
            numero={"18"}
            creditos={"7"}
            prerequisitos={"Ecuaciones Diferenciales - Cálculo III"}
            formacion={"Ciencias Básicas"}
          />

          <div className="col col-md-1">
            <Link
              className="nav-link"
              to={{ pathname: "/users/usr/mallas/malla2020/DatosExtraM2020-3" }}
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
          <RamoE
            codigo={"CIT-2006"}
            ramo={"Estructura de Datos y Algoritmos"}
            numero={"14"}
            creditos={"6"}
            prerequisitos={"Programación Avanzada"}
            formacion={"Ingeniería Aplicada - Informática"}
          />

          <RamoE
            codigo={"CIT-2007"}
            ramo={"Bases de Datos"}
            numero={"19"}
            creditos={"6"}
            prerequisitos={"Estructura de Datos y Algoritmos"}
            formacion={"Ingeniería Aplicada - Informática"}
          />

          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <RamoE
            codigo={"CIT-2114"}
            ramo={"Redes de Datos"}
            numero={"15"}
            creditos={"6"}
            prerequisitos={"Programación Avanzada"}
            formacion={"Ingeniería Aplicada - Telecomunicaciones"}
          />
          <RamoE
            codigo={" CIT-2008 "}
            ramo={"Desarrollo Web y Móvil"}
            numero={"20"}
            creditos={"6"}
            prerequisitos={" Programación Avanzada"}
            formacion={"Ingeniería Aplicada - Informática"}
          />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col col-md-1"> </div>
          <div className="col"> </div>
          <RamoE
            codigo={"CIG-1012"}
            ramo={"Inglés I"}
            numero={"21"}
            creditos={"5"}
            prerequisitos={""}
            formacion={"Transversal"}
          />
          <div className="col col-md-1"> </div>
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"> </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
