import React, { Component } from "react";
import Ramo from "./RamoC";
import Semestre from "./Semestre";
import { Link } from "react-router-dom";

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
      <div className="container">
        <br />
        <div className="row row-cols-10">
          <div className="col col-md-2 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#FF3E17" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">
            Ramo Crítico: si no lo inscribes, te atrasarás.
          </div>
          <div className="col col-md-2 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#FFD44F" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">
            Ramo No Crítico Cursable: lo puedes inscribir, pero no te atrasa si
            no lo haces.
          </div>
        </div>
        <div className="row row-cols-10">
          <div className="col col-md-2 mt-1">
            <div
              className="card border-dark text-center"
              style={{ background: "#28B463" }}
            >
              <br />
            </div>
          </div>
          <div className="col mt-1">Ramo Aprobado.</div>
          <div className="col col-md-2 mt-1">
            <div className="card border-dark text-center">
              <br />
            </div>
          </div>
          <div className="col mt-1">Ramo No Cursado.</div>
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
        </div>

        <br />
        <div className="row row-cols-10">
          <Ramo
            codigo={"CBM1000"}
            ramo={"Álgebra y Geometría"}
            state={this.state.CBM1000}
          />
          <Ramo
            codigo={"CBM1002"}
            ramo={"Álgebra Lineal"}
            state={this.state.CBM1002}
          />
          <Ramo
            codigo={"CBM1005"}
            ramo={"Ecuaciones Diferenciales"}
            state={this.state.CBM1005}
          />
          <Ramo
            codigo={"CIT2204"}
            ramo={"Prob. y Estadisticas"}
            state={this.state.CIT2204}
          />
          <Ramo
            codigo={"CII2750"}
            ramo={"Optimización"}
            state={this.state.CII2750}
          />
          <Ramo
            codigo={"CII2000"}
            ramo={"Introducción a la Economía"}
            state={this.state.CII2000}
          />
          <Ramo
            codigo={"CII1000"}
            ramo={"Contabilidad y Costos"}
            state={this.state.CII1000}
          />
          <Ramo
            codigo={"CIT2203"}
            ramo={"Gestión Org."}
            state={this.state.CIT2203}
          />
          <Ramo
            codigo={"CIT3310"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3310}
          />
          <Ramo
            codigo={"CIT3311"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3311}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"CBM1001"}
            ramo={"Cálculo I"}
            state={this.state.CBM1001}
          />
          <Ramo
            codigo={"CBM1003"}
            ramo={"Cálculo II"}
            state={this.state.CBM1003}
          />
          <Ramo
            codigo={"CBM1006"}
            ramo={"Cálculo III"}
            state={this.state.CBM1006}
          />
          <Ramo
            codigo={"CBM2000"}
            ramo={"Métodos Numéricos"}
            state={this.state.CBM2000}
          />
          <Ramo
            codigo={"CIT2106"}
            ramo={"Electrónica y Electrotecnia"}
            state={this.state.CIT2106}
          />
          <Ramo
            codigo={"CIT2202"}
            ramo={"Modelos Estoc. y Simul."}
            state={this.state.CIT2202}
          />
          <Ramo
            codigo={"CIT2005"}
            ramo={"Ingeniería de Software"}
            state={this.state.CIT2005}
          />
          <Ramo
            codigo={"CIT2004"}
            ramo={"Arquitectura de Sistemas"}
            state={this.state.CIT2004}
          />
          <Ramo
            codigo={"CIT3410"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3410}
          />
          <Ramo
            codigo={"CIT3411"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3411}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"CBQ1000"}
            ramo={"Química"}
            state={this.state.CBQ1000}
          />
          <Ramo
            codigo={"CBF1000"}
            ramo={"Mecánica"}
            state={this.state.CBF1000}
          />
          <Ramo
            codigo={"CBF1001"}
            ramo={"Calor y Ondas"}
            state={this.state.CBF1001}
          />
          <Ramo
            codigo={"CBF1002"}
            ramo={"Electricidad y Magnetismo"}
            state={this.state.CBF1002}
          />
          <Ramo
            codigo={"CIT2200"}
            ramo={"Proyectos en TICs I"}
            state={this.state.CIT2200}
          />
          <Ramo
            codigo={"CIT2101"}
            ramo={"Señales y Sistemas"}
            state={this.state.CIT2101}
          />
          <Ramo
            codigo={"CIT2102"}
            ramo={"Comunicacio -nes Digitales"}
            state={this.state.CIT2102}
          />
          <Ramo
            codigo={"CIT2105"}
            ramo={"Criptografía y Seg. en Redes"}
            state={this.state.CIT2105}
          />
          <Ramo
            codigo={"CIT3412"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3412}
          />
          <Ramo
            codigo={"CIT3413"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3413}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"CIT1000"}
            ramo={"Programación"}
            state={this.state.CIT1000}
          />
          <Ramo
            codigo={"CIT1010"}
            ramo={"Programación Avanzada"}
            state={this.state.CIT1010}
          />
          <Ramo
            codigo={"CIT2000"}
            ramo={"Estructura de Datos"}
            state={this.state.CIT2000}
          />
          <Ramo
            codigo={"CIT2001"}
            ramo={"Dis. y Análisis de Algoritmos"}
            state={this.state.CIT2001}
          />
          <Ramo
            codigo={"CIT2002"}
            ramo={"Bases de Datos"}
            state={this.state.CIT2002}
          />
          <Ramo
            codigo={"CIT2003"}
            ramo={"Sistemas Operativos"}
            state={this.state.CIT2003}
          />
          <Ramo
            codigo={"FIC1003"}
            ramo={"Derecho en Ingeniería"}
            state={this.state.FIC1003}
          />
          <Ramo
            codigo={"CIT2201"}
            ramo={"Proyecto en TICs II"}
            state={this.state.CIT2201}
          />
          <Ramo
            codigo={"CIT3200"}
            ramo={"Evaluación de Proyectos TIC"}
            state={this.state.CIT3200}
          />
          <Ramo
            codigo={"CIT3201"}
            ramo={"Proyecto en TICs III"}
            state={this.state.CIT3201}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <Ramo
            codigo={"FIC1000"}
            ramo={"Comunicación para la Ing."}
            state={this.state.FIC1000}
          />
          <Ramo codigo={"CFG1"} ramo={"Minor / CFG"} state={this.state.CFG1} />
          <Ramo
            codigo={"CIT2100"}
            ramo={"Redes de Datos"}
            state={this.state.CIT2100}
          />
          <Ramo codigo={"CFG2"} ramo={"Minor / CFG"} state={this.state.CFG2} />
          <Ramo codigo={"CFG3"} ramo={"Minor / CFG"} state={this.state.CFG3} />
          <Ramo
            codigo={"CIT2103"}
            ramo={"Sistemas Digitales"}
            state={this.state.CIT2103}
          />
          <Ramo
            codigo={"CIT2104"}
            ramo={"Arquitectura de Comp."}
            state={this.state.CIT2104}
          />
          <Ramo codigo={"CFG4"} ramo={"Minor / CFG"} state={this.state.CFG4} />
          <Ramo
            codigo={"CIT3312"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3312}
          />
          <Ramo
            codigo={"CIT3313"}
            ramo={"Electivo Profesional"}
            state={this.state.CIT3313}
          />
        </div>

        <br />

        <div className="row row-cols-10">
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <Ramo
            codigo={"FIC1001"}
            ramo={"Inglés I"}
            state={this.state.FIC1001}
          />
          <Ramo
            codigo={"FIC1002"}
            ramo={"Inglés II"}
            state={this.state.FIC1002}
          />
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
        </div>
        <br />
        <div className="row row-cols-10">
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <Ramo
            codigo={"CIT5001"}
            ramo={"Practica I"}
            state={this.state.CIT5001}
          />
          <div className="col"> </div>
          <div className="col"> </div>
          <div className="col"> </div>
          <Ramo
            codigo={"CIT5002"}
            ramo={"Practica II"}
            state={this.state.CIT5002}
          />
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
