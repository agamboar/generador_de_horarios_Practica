import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import { Link } from "react-router-dom";

export default class CrearHorario extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout phase={2}>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 ">
                <div className="card ">
                  <div className="container">
                    <br />
                    <h4>&nbsp; Paso 1</h4>
                    <h1 className="title text-primary text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-list-check"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                    </h1>
                    <br />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Ingreso de Avance Curricular
                    </h5>
                    <p className="card-text">
                      En el siguiente link se encentra una página en la que
                      podras ingrear el avance curricular que has logrado
                      durante la carrera.{" "}
                    </p>
                    <br />
                    <Link
                      className="nav-link text-center"
                      to={{ pathname: "/users/usr/crearHorario" }}
                      style={{ color: "#0d6efd" }}
                    >
                      {" "}
                      Presiona Aquí{" "}
                    </Link>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="card ">
                  <div className="container">
                    <br />
                    <h4>&nbsp; Paso 2</h4>
                    <h1 className="title text-primary text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-sort-up-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                      </svg>
                    </h1>
                    <br />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">Ramos y PERT</h5>
                    <p className="card-text">
                      En el siguiente link se encuentra una página en la que
                      podras priorizar los ramos y secciones. Tambien podras
                      obtener información extra del estado de tú avance
                      academico
                    </p>

                    <Link
                      className="nav-link text-center"
                      to={{ pathname: "/users/usr/priorizarRamos" }}
                      style={{ color: "#0d6efd" }}
                    >
                      {" "}
                      Presiona Aquí{" "}
                    </Link>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="card ">
                  <div className="container">
                    <br />
                    <h4>&nbsp; Paso 3</h4>
                    <h1 className="title text-primary text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="currentColor"
                        class="bi bi-table"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                      </svg>
                    </h1>
                    <br />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Horarios Posibles
                    </h5>
                    <p className="card-text">
                      En el siguiente link se encuentra una página donde podras
                      visualizar los horarios que hemos generado para ti.
                      Esperamos que te sirvan!
                    </p>
                    <br />
                    <Link
                      className="nav-link text-center"
                      to={{ pathname: "/users/usr/horariosPosibles" }}
                      style={{ color: "#0d6efd" }}
                    >
                      {" "}
                      Presiona Aquí{" "}
                    </Link>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ATRLayout>
      </Fragment>
    );
  }
}
