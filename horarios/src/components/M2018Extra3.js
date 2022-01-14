import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2018Extra3 from "./Malla2018Extra3";
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

export default class M2018Extra3 extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout phase={1}>
          <br />
          <br />
          <br />
          <div className="container">
            <Button
              href="/users/usr/mallas/malla2018"
              onClick={this.deleteMalla}
              icon={<ArrowLeftOutlined />}
              size="large"
            >
              Volver
            </Button>
            <Button
              href="/users/usr/mallas/malla2018/AvanceCurricular"
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ float: "right" }}
              size="large"
            >
              Elegir Malla 2018
            </Button>
            <div style={{ textAlign: "center" }}>
              <Title
                style={{
                  textAlign: "center",
                  color: "#008cdb",
                  fontSize: "40px",
                }}
              >
                Malla 2018
              </Title>
            </div>
            <Malla2018Extra3 />
          </div>
        </ATRLayout>
      </Fragment>
    );
  }
}
