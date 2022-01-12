import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2020Extra5 from "./Malla2020Extra5";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

const { Title } = Typography;

export default class M2020Extra1 extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout phase={1}>
          <br />
          <br />
          <br />
          <div className="container">
            <Button
              href="/users/usr/mallas"
              onClick={this.deleteMalla}
              icon={<ArrowLeftOutlined />}
              size="large"
            >
              Elegir otra malla
            </Button>
            <Button
              href="/users/usr/mallas/malla2020/AvanceCurricular"
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ float: "right" }}
              size="large"
            >
              Elegir Malla 2020
            </Button>
            <div style={{ textAlign: "center" }}>
              <Title
                style={{
                  textAlign: "center",
                  color: "#008cdb",
                  fontSize: "40px",
                }}
              >
                Malla 2020
              </Title>
            </div>
            <Malla2020Extra5 />
          </div>
        </ATRLayout>
      </Fragment>
    );
  }
}
