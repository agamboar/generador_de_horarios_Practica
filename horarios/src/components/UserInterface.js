import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import { Typography } from "antd";

const { Title } = Typography;

export default class UserInterface extends Component {
  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <ATRLayout>
            <Title>¡Bienvenido al Asistente Toma de Ramos!</Title>
            <Title level={3} type="secondary">
              Esta plataforma tiene como objetivo asistir a los estudiantes de
              la UDP en su proceso de toma de ramos. ¡Suerte!
            </Title>
          </ATRLayout>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
}
