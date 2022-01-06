import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import { Link, Navigate } from "react-router-dom";
import NotAuth from "./NotAuth";
import { Typography } from "antd";
//import { Navigate } from "react-router";

const { Title } = Typography;

export default class Mallas extends Component {
  render() {
    if (localStorage.getItem("token")) {
      return (
        <Fragment>
          {localStorage.getItem("malla") ? (
            <Navigate
              to={`/users/usr/mallas/malla${localStorage.getItem("malla")}`}
            />
          ) : (
            <ATRLayout>
              <p className="lead">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A
                continuación deberas elegir la malla que actualmente estas
                cursando
              </p>

              <br />
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-sm-4 ">
                    <div className="card ">
                      <div className="container">
                        <br />
                        <br />
                        <Title
                          style={{
                            textAlign: "center",
                            color: "#008cdb",
                            fontSize: "60px",
                          }}
                        >
                          2010
                        </Title>
                        <br />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Malla Curricular Año 2010
                        </h5>
                        <p className="card-text">
                          En el siguiente link podras elegir la malla que te
                          corresponde, tambien podras ver información adicional
                          a esta y agregar tu avance curricular
                        </p>
                        <Link
                          className="nav-link text-center"
                          to={{ pathname: "/users/usr/mallas/malla2010" }}
                          style={{ color: "#0d6efd" }}
                        >
                          {" "}
                          Presiona Aquí{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                    <div className="card ">
                      <div className="container">
                        <br />
                        <br />
                        <Title
                          style={{
                            textAlign: "center",
                            color: "#008cdb",
                            fontSize: "60px",
                          }}
                        >
                          2018
                        </Title>
                        <br />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Malla Curricular Año 2018
                        </h5>
                        <p className="card-text">
                          En el siguiente link podras elegir la malla que te
                          corresponde, tambien podras ver información adicional
                          a esta y agregar tu avance curricular
                        </p>
                        <Link
                          className="nav-link text-center"
                          to={{ pathname: "/users/usr/mallas/malla2018" }}
                          style={{ color: "#0d6efd" }}
                        >
                          {" "}
                          Presiona Aquí{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                    <div className="card ">
                      <div className="container">
                        <br />
                        <br />
                        <Title
                          style={{
                            textAlign: "center",
                            color: "#008cdb",
                            fontSize: "60px",
                          }}
                        >
                          2020
                        </Title>
                        <br />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Malla Curricular Año 2020
                        </h5>
                        <p className="card-text">
                          En el siguiente link podras elegir la malla que te
                          corresponde, tambien podras ver información adicional
                          a esta y agregar tu avance curricular
                        </p>
                        <Link
                          className="nav-link text-center"
                          to={{ pathname: "/users/usr/mallas/malla2020" }}
                          style={{ color: "#0d6efd" }}
                        >
                          {" "}
                          Presiona Aquí{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ATRLayout>
          )}
        </Fragment>
      );
    } else {
      return <NotAuth />;
    }
  }
}
