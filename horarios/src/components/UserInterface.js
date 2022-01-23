import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import "../assets/css/Images.css";
import { Typography, Space, Image, Button, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default class UserInterface extends Component {
  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <ATRLayout phase={0}>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
            >
              <Col xs={24} sm={12}></Col>
              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Button
                  href="/users/usr/mallas/"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  size="large"
                >
                  Ir a Elegir Mi Malla
                </Button>
              </Col>
            </Row>
            <br />
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
            >
              <Col xs={24} style={{ textAlign: "center" }}>
                <Image
                  width={"60%"}
                  src={`https://cdn.discordapp.com/attachments/928022489039273994/933606606548107294/udp.png`}
                  preview="false"
                />
              </Col>
              <Col xs={24} style={{ textAlign: "center" }}>
                <Title
                  style={{
                    fontSize: "50px",
                  }}
                >
                  ¡Bienvenido al Asistente Toma de Ramos!
                </Title>
                <Title level={3} type="secondary">
                  Esta plataforma tiene como objetivo asistir a los estudiantes
                  de la UDP en su proceso de toma de ramos. ¡Suerte!
                </Title>
              </Col>
            </Row>
          </ATRLayout>
        ) : (
          <NotAuth />
        )}
      </Fragment>
    );
  }
}
