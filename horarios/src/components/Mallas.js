import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import { Link, Navigate } from "react-router-dom";
import NotAuth from "./NotAuth";
import { Typography, Button, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

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
            <ATRLayout phase={1}>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                  <Button
                    href="/users/usr/"
                    onClick={this.deleteMalla}
                    icon={<ArrowLeftOutlined />}
                    size="large"
                  >
                    Volver a Inicio
                  </Button>
                </Col>

                <Col xs={24} sm={12}></Col>
              </Row>
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  <Text
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    A continuación deberas elegir la malla que actualmente estas
                    cursando
                  </Text>
                </Col>
              </Row>
              <br />
              <br />
              <Row
                gutter={[
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                  { xs: 8, sm: 16, md: 24, lg: 32 },
                ]}
              >
                <Col xs={24} xl={8}>
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
                        corresponde, tambien podras ver información adicional a
                        esta y agregar tu avance curricular
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
                </Col>
                <Col xs={24} xl={8}>
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
                        corresponde, tambien podras ver información adicional a
                        esta y agregar tu avance curricular
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
                </Col>
                <Col xs={24} xl={8}>
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
                        corresponde, tambien podras ver información adicional a
                        esta y agregar tu avance curricular
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
                </Col>
              </Row>
            </ATRLayout>
          )}
        </Fragment>
      );
    } else {
      return <NotAuth />;
    }
  }
}
