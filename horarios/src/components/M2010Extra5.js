import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2010Extra5 from "./Malla2010Extra5";
import { Button, Typography, Row, Col } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title } = Typography;

export default class M2010Extra4 extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout phase={1}>
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 },
              { xs: 8, sm: 16, md: 24, lg: 32 },
            ]}
          >
            <Col xs={24} sm={12} style={{ textAlign: "center" }}>
              <Button
                href="/users/usr/mallas/malla2010"
                onClick={this.deleteMalla}
                icon={<ArrowLeftOutlined />}
                size="large"
              >
                Volver
              </Button>
            </Col>

            <Col xs={24} sm={12} style={{ textAlign: "center" }}>
              <Button
                href="/users/usr/mallas/malla2010/AvanceCurricular"
                type="primary"
                icon={<ArrowRightOutlined />}
                size="large"
              >
                Elegir Malla 2010
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
                  color: "#008cdb",
                  fontSize: "40px",
                }}
              >
                Malla 2010
              </Title>
            </Col>
          </Row>
          <br />
          <Malla2010Extra5 />
        </ATRLayout>
      </Fragment>
    );
  }
}
