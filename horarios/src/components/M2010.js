import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2010 from "./Malla2010";
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

export default class M2010 extends Component {
  deleteMalla = (e) => {
    localStorage.removeItem("malla");
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/delete_asignaturasCursadas/",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"), //cambiiar a localStorage
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => console.log(response.data.mensaje))
      .catch(function (error) {
        if (error.response) {
          if (error.response.data.non_field_errors) {
            console.log(error.response);
          }
          //notify(`error:  ${error.response.data.non_field_errors[0]}`);
        }
      });
  };
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
            href="/users/usr/mallas/malla2010/AvanceCurricular"
            type="primary"
            icon={<ArrowRightOutlined />}
            style={{ float: "right" }}
            size="large"
          >
            Elegir Malla 2010
          </Button>
          <div style={{ textAlign: "center" }}>
            <Title
              style={{
                textAlign: "center",
                color: "#008cdb",
                fontSize: "40px",
              }}
            >
              Malla 2010
            </Title>
            <Button
              type="text"
              href="/users/usr/mallas/malla2010/DatosExtraM2010-1"
              size="large"
              icon={<PlusCircleTwoTone />}
            >
              Más Detalles
            </Button>
          </div>
          <Malla2010 />
        </ATRLayout>
      </Fragment>
    );
  }
}
