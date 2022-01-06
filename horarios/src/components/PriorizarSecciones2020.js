import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import SeccionesCritico from "./SeccionesCritico";
import NotAuth from "./NotAuth";

export default class PriorizarSecciones extends Component {
  state = {
    ramos: null,
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
    CIT2006: null,
    CIT2114: null,
    CIT2204: null,
    CIT2107: null,
    CBF1002: null,
    CIT2007: null,
    CIT2008: null,
    CIG1012: null,
    CII2750: null,
    CIT2108: null,
    CIT2205: null,
    CIT2009: null,
    CFG2: null,
    CIG1013: null,
    CII1000: null,
    CIT2109: null,
    CIT2110: null,
    CIT2010: null,
    CFG3: null,
    CIG1014: null,
    CIT2206: null,
    CIT2011: null,
    CIT2111: null,
    CIT2012: null,
    CFG4: null,
    CII2100: null,
    CIT2112: null,
    CIT2113: null,
    CIT2013: null,
    CIT2207: null,
    CITOPTINF1: null,
    CIT3100: null,
    CITOPTTEL1: null,
    CIT3000: null,
    CIT3202: null,
    CITOPTINF2: null,
    CITOPTTEL2: null,
    CITOPTTEL3: null,
    CITOPTINF3: null,
    CIT3203: null,
    CIT4000: null,
    CIT4001: null,
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <ATRLayout>
            <p class="lead">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ahora
              deberas elegir que secciónes prefieres asignarles una mayor
              prioridad en tu horario
            </p>
            <br />
            <br />

            <SeccionesCritico />
            <SeccionesCritico />
            {/* aqui hay que crear una funcion map que cree los multiples ramos de con la funcion SeccionesCritico*/}

            <form onSubmit={this.onSubmit}>
              <div className="container">
                <div className=" align-self-end">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill"
                  >
                    {" "}
                    Guardar Prioridades
                  </button>
                </div>
              </div>
            </form>
          </ATRLayout>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
}
