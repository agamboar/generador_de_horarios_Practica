import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2020 from "./Malla2020";
import "antd/dist/antd.css";
import "../assets/css/Buttons.css";

export default class M2020 extends Component {
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
        <ATRLayout phase={1}>
          <br />
          <br />
          <br />
          <Malla2020 />
        </ATRLayout>
      </Fragment>
    );
  }
}
