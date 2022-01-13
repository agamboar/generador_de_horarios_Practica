import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography, Avatar, Divider, Steps } from "antd";
import {
  PoweroffOutlined,
  BookOutlined,
  ExceptionOutlined,
  HighlightOutlined,
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Layout.css";
import "../assets/css/Steps.css";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const { Step } = Steps;
const { SubMenu } = Menu;

export default class ATRLayout extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false,
    current: 0,
  };

  info = [
    {
      key: 0,
      title: "1. Inicio",
      url: "/users/usr",
    },
    {
      key: 1,
      title: "2. Mi Malla",
      url: "/users/usr/mallas",
    },
    {
      key: 2,
      title: "3. Actualizar Avance",
      url: "/users/usr/crearHorario",
    },
    {
      key: 3,
      title: "4. Mis Ramos Críticos",
      url: "/users/usr/PERT",
    },
    {
      key: 4,
      title: "5. Priorizar Asignaturas",
      url: "/users/usr/priorizarRamos",
    },
    {
      key: 5,
      title: "7. Priorizar CFG",
      url: "/users/usr/priorizarAreaCFG",
    },
    {
      key: 6,
      title: "6. Priorizar Secciones",
      url: "/users/usr/priorizarSeccion",
    },
    {
      key: 7,
      title: "8. Horarios Posibles",
      url: "/users/usr/horariosPosibles",
    },
  ];

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  next = () => {
    this.setState({
      current: this.state.current + 1,
      next_url: this.info[this.state.current + 1].url,
    });
  };

  prev = () => {
    this.setState({
      current: this.state.current - 1,
      next_url: this.info[this.state.current - 1].url,
    });
  };

  componentDidMount = () => {
    this.setState({
      current: this.props.phase,
    });
  };

  deleteToken = (e) => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <Fragment>
        <Layout>
          <Header
            className="header"
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
              height: "auto",
            }}
          >
            <a href="/users/usr">
              <div className="logo" />
              <Avatar
                size={40}
                src="https://cdn.discordapp.com/attachments/928022489039273994/928022582064717884/logo.png"
                style={{
                  "margin-left": "2%",
                  "margin-right": "1vh",
                  "margin-bottom": "1vh",
                }}
              />
              <Text className="title">ASISTENTE TDR</Text>
            </a>
            <Menu
              className="menu-header"
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
            >
              {localStorage.getItem("is_staff") === "si" ? (
                <Fragment>
                  <Menu.Item key="op1" icon={<HomeOutlined />}>
                    <a href="/users/usr">Inicio</a>
                  </Menu.Item>
                  <SubMenu
                    key="ad"
                    title="Administración"
                    icon={<UserOutlined />}
                  >
                    <Menu.Item key="ad1">
                      <Link
                        className="nav-link"
                        to="/staff/subirOferta"
                        style={{ color: "#000000" }}
                      >
                        Subir Ofertas
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="ad2">
                      <Link
                        className="nav-link"
                        to="/staff/Usuarios"
                        style={{ color: "#000000" }}
                      >
                        Hacer Staff
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </Fragment>
              ) : null}
              <Menu.Item key="op2" icon={<PoweroffOutlined />}>
                <a href="/" onClick={this.deleteToken}>
                  Salir
                </a>
              </Menu.Item>
            </Menu>
            <Divider style={{ "background-color": "gray", margin: "0px" }} />
            <Steps
              labelPlacement="vertical"
              responsive="false"
              current={this.state.current}
              className="steps-header"
            >
              <Step key={0} title={"1. Inicio"} icon={<HomeOutlined />}></Step>
              <Step
                key={1}
                title={"2. Mi Malla"}
                icon={<BookOutlined />}
              ></Step>
              <Step
                key={2}
                title={"3. Actualizar Avance"}
                icon={<BookOutlined />}
              ></Step>
              <Step
                key={3}
                title={"4. Mis Ramos Críticos"}
                icon={<ExceptionOutlined />}
              ></Step>
              <Step
                key={4}
                title={"5. Priorizar Ramos"}
                icon={<HighlightOutlined />}
              ></Step>
              <Step
                key={5}
                title={"6. Priorizar CFG"}
                icon={<HighlightOutlined />}
              ></Step>
              <Step
                key={6}
                title={"7. Priorizar Secciones"}
                icon={<HighlightOutlined />}
              ></Step>
              <Step
                key={7}
                title={"8. Horarios Posibles"}
                icon={<CalendarOutlined />}
              ></Step>
            </Steps>
          </Header>

          <Layout>
            <Content className="content">
              {/*React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )*/}
              {this.props.children}
            </Content>
            <Footer
              style={{
                textAlign: "center",
                backgroundColor: "rgb(231, 231, 231)",
              }}
              className="footer"
            >
              <Text>Copyright© Universidad Diego Portales 2021</Text>
            </Footer>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}