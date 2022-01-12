import React, { useEffect, useState, Component, Fragment } from "react";
import { Card } from "antd";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import SelectSearch from "./SelectSearch";
import TablaSecciones from "./TablaSecciones";
import axios from "axios";
import { Button, Typography, Layout } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title, Text } = Typography;
const { Content } = Layout;
//post aqui para saber los ramos disponibles

export default class UserInterface extends Component {
  state = {
    message: "no",
    ramos: "",
  };

  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };

  getRamos = () => {
    var config = {
      method: "get",
      url: `http://127.0.0.1:8000/get_ramos_disponibles/`,
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    axios(config).then((response) => {
      //console.log(response) //verificar como se recibe la info
      if (response.data) {
        this.setState({ ramos: response.data }); //map de eso y se puede rellenar la tabla
      }
    });
  };
  componentDidMount() {
    this.getRamos();
  }
  // deberia hacer todos los post con axios para que se ve mas ordenado

  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <ATRLayout phase={6}>
            <br />
            <br />
            <br />
            <div className="container">
              <Button
                href="/users/usr/priorizarAreaCFG"
                icon={<ArrowLeftOutlined />}
                size="large"
                style={{ textAlign: "left" }}
              >
                Volver a Priorizar CFG
              </Button>
              <Button
                href="/users/usr/horariosPosibles"
                type="primary"
                icon={<ArrowRightOutlined />}
                style={{ float: "right" }}
                size="large"
              >
                Ir a Horarios Posibles
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Title
                style={{
                  textAlign: "center",
                  color: "#008cdb",
                  fontSize: "40px",
                }}
              >
                Priorizar Secciones
              </Title>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Escoja un ramo para que pueda priorizar sus secciones.
              </Text>
              <br />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                (Solo aparecerán secciones con cupos libres. Además, solo se
                mostrarán las opciones de las 2 áreas de CFG con más
                preferencia)
              </Text>
            </div>
            <br />
            <Layout>
              <Content
                className="site-layout"
                style={{
                  padding: "0 50px",
                  marginLeft: 30,
                  alignItems: "center",
                }}
              >
                <div
                  className="site-layout-background"
                  style={{
                    padding: 15,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {console.log(this.state.ramos)}
                  {console.log(this.state.ramos["ramos_disponibles"])}
                  {this.state.ramos != "" ? (
                    <SelectSearch
                      ramosDisponibles={this.state.ramos["ramos_disponibles"]}
                      parentCallback={this.callbackFunction}
                    />
                  ) : (
                    <p>Te has saltado un paso, vuelve atrás</p>
                  )}
                </div>
                {/*(this.state.message != "no")?
                  <div style={{padding: 10, display: "flex",  justifyContent: "flex-begin"}}><Button  type="primary">Guardar prioridad</Button></div>:null*/}
                {/*aca recibir el nombre del ramo y sus secciones o no, simplemente recibir el nombre y el codigo*/}

                {this.state.message != "no" ? (
                  <div>
                    <Card
                      title={
                        'Secciones del ramo: "' +
                        this.state.message["codigo"] +
                        '"'
                      }
                    >
                      {console.log(this.state.message["secciones"])}
                      <TablaSecciones
                        codigo={this.state.message["codigo"]}
                      />{" "}
                      {/*aca pasar el codigo del ramo y dps solo recibir el arreglo para mandarlo a la base*/}
                    </Card>
                  </div>
                ) : null}
              </Content>
            </Layout>
          </ATRLayout>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
}
