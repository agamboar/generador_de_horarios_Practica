import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2018Extra1 from "./Malla2018Extra1";
import { Link } from "react-router-dom";
import { Button, Typography, Row, Col } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title } = Typography;

export default class M2018Extra1 extends Component {
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
                href="/users/usr/mallas/malla2018"
                onClick={this.deleteMalla}
                icon={<ArrowLeftOutlined />}
                size="large"
              >
                Volver
              </Button>
            </Col>

            <Col xs={24} sm={12} style={{ textAlign: "center" }}>
              <Button
                href="/users/usr/mallas/malla2018/AvanceCurricular"
                type="primary"
                icon={<ArrowRightOutlined />}
                size="large"
              >
                Elegir Malla 2018
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
                Malla 2018
              </Title>
            </Col>
          </Row>
          <br />
          <Malla2018Extra1 />
        </ATRLayout>
      </Fragment>
    );
  }
}
