import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Typography,
  Avatar,
  Divider,
  Steps,
  Collapse,
  Space,
} from "antd";
import {
  PoweroffOutlined,
  CalendarOutlined,
  UserOutlined,
  HomeOutlined,
  TableOutlined,
  WarningOutlined,
  OrderedListOutlined,
  UpOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Layout.css";
import "../assets/css/Steps.css";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;
const { Step } = Steps;
const { SubMenu } = Menu;
const { Panel } = Collapse;

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
      title: "5. Priorizar CFG",
      url: "/users/usr/priorizarAreaCFG",
    },
    {
      key: 5,
      title: "6. Priorizar Asignaturas",
      url: "/users/usr/priorizarRamos",
    },
    {
      key: 6,
      title: "7. Priorizar Secciones",
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
          <Header className="header">
            <a href="/users/usr">
              <Space>
                <Avatar
                  size={40}
                  src="https://cdn.discordapp.com/attachments/928022489039273994/933606606548107294/udp.png"
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
            <Divider style={{ "background-color": "#c0c0c0", margin: "0px" }} />
            <Collapse
              ghost
              expandIcon={({ isActive }) => (
                <UpOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel header={<Text strong>Expandir</Text>} key="1">
                <Steps
                  labelPlacement="vertical"
                  responsive="true"
                  current={this.state.current}
                  className="steps-header"
                  size="small"
                >
                  <Step
                    key={0}
                    title={"1. Inicio"}
                    icon={<HomeOutlined />}
                  ></Step>
                  <Step
                    key={1}
                    title={"2. Mi Malla"}
                    icon={<TableOutlined />}
                  ></Step>
                  <Step
                    key={2}
                    title={"3. Avance"}
                    icon={<TableOutlined />}
                  ></Step>
                  <Step
                    key={3}
                    title={"4. Ramos Críticos"}
                    icon={<WarningOutlined />}
                  ></Step>
                  <Step
                    key={4}
                    title={"5. Áreas CFG"}
                    icon={<OrderedListOutlined />}
                  ></Step>
                  <Step
                    key={5}
                    title={"6. Ramos"}
                    icon={<OrderedListOutlined />}
                  ></Step>
                  <Step
                    key={6}
                    title={"7. Secciones"}
                    icon={<OrderedListOutlined />}
                  ></Step>
                  <Step
                    key={7}
                    title={"8. Horarios"}
                    icon={<CalendarOutlined />}
                  ></Step>
                </Steps>
              </Panel>
            </Collapse>
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
