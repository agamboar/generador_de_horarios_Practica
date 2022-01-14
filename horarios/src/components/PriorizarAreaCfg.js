import React, { useEffect, useState, Component, Fragment } from "react";
import { Card } from "antd";
import ATRLayout from "./Layout";
import NotAuth from "./NotAuth";
import TablaAreasCfg from "./TablaAreasCfg";
import { Typography, Layout, Button, Alert } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Content } = Layout;
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
            <br />
            <br />
            <br />
            <div className="container">
              <Button
                href="/users/usr/PERT"
                icon={<ArrowLeftOutlined />}
                size="large"
                style={{ textAlign: "left" }}
              >
                Volver a Mis Ramos Críticos
              </Button>
              <Button
                href="/users/usr/priorizarRamos"
                type="primary"
                icon={<ArrowRightOutlined />}
                style={{ float: "right" }}
                size="large"
              >
                Ir a Priorizar Ramos
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
                Priorizar CFG
              </Title>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                (Deje las areas que más le importen al inicio de la tabla)
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
                <div>
                  <Card>
                    <TablaAreasCfg />
                  </Card>
                </div>
                <br></br>
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
