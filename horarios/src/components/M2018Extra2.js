import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2018Extra2 from "./Malla2018Extra2";
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

export default class M2018Extra2 extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout>
          <Button
            href="/users/usr/mallas"
            onClick={this.deleteMalla}
            icon={<ArrowLeftOutlined />}
            size="large"
          >
            Elegir otra malla
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
          <Malla2018Extra2 />
        </ATRLayout>
      </Fragment>
    );
  }
}
