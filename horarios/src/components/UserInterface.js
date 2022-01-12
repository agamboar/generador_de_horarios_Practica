import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import "../assets/css/Images.css";
import { Typography, Space, Image, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default class UserInterface extends Component {
  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <ATRLayout phase={0}>
            <br />
            <br />
            <br />
            <div className="container">
              <Button
                href="/users/usr/mallas/"
                type="primary"
                icon={<ArrowRightOutlined />}
                style={{ float: "right" }}
                size="large"
              >
                Ir a Elegir Mi Malla
              </Button>

              <br />

              <Space size={12}>
                <Image
                  width={400}
                  src={`https://cdn.discordapp.com/attachments/928022489039273994/930677277174423552/udp.png`}
                  preview="false"
                />
                <div className="container">
                  <Title>¡Bienvenido al Asistente Toma de Ramos!</Title>
                  <Title level={3} type="secondary">
                    Esta plataforma tiene como objetivo asistir a los
                    estudiantes de la UDP en su proceso de toma de ramos.
                    ¡Suerte!
                  </Title>
                </div>
              </Space>
            </div>
          </ATRLayout>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
}
