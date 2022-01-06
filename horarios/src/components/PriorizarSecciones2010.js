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
