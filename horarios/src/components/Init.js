import React, { Component, Fragment } from "react";
import Login from "./Login";
import { Layout, Typography, Space, Avatar } from "antd";
import "../assets/css/Layout.css";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default class Init extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Header className="header" style={{ textAlign: "center" }}>
            <Space direction="vertical">
              <Avatar
                size={90}
                src="https://cdn.discordapp.com/attachments/928022489039273994/928022582064717884/logo.png"
                style={{
                  "margin-left": "2%",
                  "margin-right": "1vh",
                }}
              />

              <Title
                style={{
                  fontSize: "30px",
                  color: "#008cdb",
                  margin: "0px",
                }}
              >
                ASISTENTE TDR
              </Title>
            </Space>
          </Header>

          <Layout>
            <Content className="content">
              <Login />
            </Content>
            <Footer
              style={{
                textAlign: "center",
                backgroundColor: "rgb(231, 231, 231)",
              }}
              className="footer"
            >
              <Text>Copyright© Universidad Diego Portales 2022</Text>
            </Footer>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}
