import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography, Breadcrumb, Avatar } from "antd";
import {
  PoweroffOutlined,
  BookOutlined,
  ExceptionOutlined,
  HighlightOutlined,
  CalendarOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Layout.css";

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const { SubMenu } = Menu;

export default class ATRLayout extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  deleteToken = (e) => {
    localStorage.removeItem("token");
  };

  render() {
    console.log(localStorage.getItem("is_staff"));
    return (
      <Fragment>
        <Layout>
          <Header
            className="header"
            style={{ position: "fixed", zIndex: 1, width: "100%" }}
          >
            <a href="/">
              <div className="logo" />
              <Avatar
                size={40}
                src="https://cdn.discordapp.com/attachments/928022489039273994/928022582064717884/logo.png"
                style={{ "margin-right": "1vh", "margin-bottom": "1vh" }}
              />
              <Text className="title">ASISTENTE TDR</Text>
            </a>
          </Header>
          <Layout>
            <Sider
              width={200}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{
                marginTop: 64,
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item
                  key="switch"
                  className="trigger"
                  onClick={this.toggle}
                  icon={<MenuOutlined />}
                >
                  <Text strong>Menú</Text>
                </Menu.Item>
                {localStorage.getItem("is_staff") === "si" ? (
                  <SubMenu
                    key="ad"
                    title="Administrador"
                    icon={<UserOutlined />}
                  >
                    <Menu.Item key="ad1">
                      <Link
                        className="nav-link"
                        to="/admin/subirOferta"
                        style={{ color: "#000000" }}
                      >
                        Subir Ofertas
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="ad2">
                      <Link
                        className="nav-link"
                        to="/admin/Usuarios"
                        style={{ color: "#000000" }}
                      >
                        Hacer Staff
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                ) : null}
                <SubMenu
                  key="sub1"
                  title="Avance Académico"
                  icon={<BookOutlined />}
                >
                  <Menu.Item key="1">
                    <a href="/users/usr/mallas">Mi Malla</a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="/users/usr/crearHorario">Actualizar Avance</a>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="op2" icon={<ExceptionOutlined />}>
                  <a href="/users/usr/PERT">Mis Ramos Críticos</a>
                </Menu.Item>
                <SubMenu
                  key="sub3"
                  title="Priorización"
                  icon={<HighlightOutlined />}
                >
                  <Menu.Item key="3">
                    <a href="/users/usr/priorizarRamos">Priorizar Ramos</a>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <a href="/users/usr/priorizarSeccion">
                      Priorizar Secciones
                    </a>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <a href="/users/usr/priorizarAreaCFG">Priorizar CFG</a>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="op4" icon={<CalendarOutlined />}>
                  <a href="/users/usr/horariosPosibles">Horarios Posibles</a>
                </Menu.Item>
                <Menu.Item key="op5" icon={<PoweroffOutlined />}>
                  <a href="/" onClick={this.deleteToken}>
                    Salir
                  </a>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Content
                className="content"
                style={{
                  margin: "40px 0px 0",
                  overflow: "scroll",
                  padding: "20px",
                }}
              >
                {/*React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )*/}
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                {this.props.children}
                <Footer
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(231, 231, 231)",
                  }}
                  className="footer"
                >
                  <Text>Copyright© Universidad Diego Portales 2021</Text>
                </Footer>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}
