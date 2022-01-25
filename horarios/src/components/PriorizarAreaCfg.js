import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import TablaAreasCfg from "./TablaAreasCfg";
import { Typography, Button, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title, Text } = Typography;

export default class UserInterface extends Component {
  state = {
    message: "no",
    ramos: "",
  };
  render() {
    return (
      <Fragment>
        {localStorage.getItem("token") ? (
          <ATRLayout phase={4}>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
            >
              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Button
                  href="/users/usr/PERT"
                  icon={<ArrowLeftOutlined />}
                  size="large"
                >
                  Volver a Mis Ramos Críticos
                </Button>
              </Col>

              <Col xs={24} sm={12} style={{ textAlign: "center" }}>
                <Button
                  href="/users/usr/priorizarRamos"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  size="large"
                >
                  Ir a Priorizar Ramos
                </Button>
              </Col>
            </Row>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ]}
            >
              <Col span={24} style={{ textAlign: "center" }}>
                <Title
                  style={{
                    textAlign: "center",
                    color: "#008cdb",
                    fontSize: "40px",
                  }}
                >
                  Priorizar CFG (Opcional)
                </Title>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  (Deje las areas que más le importen al inicio de la tabla)
                </Text>
              </Col>
            </Row>
            <br />
            <Row justify="center">
              <Col span={24}>
                <TablaAreasCfg />
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
