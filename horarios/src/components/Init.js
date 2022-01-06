import React, { Component } from "react";
import Footer from "./Footer";
import Login from "./Login";
import logo from "../assets/images/logo.png";

export default class Init extends Component {
  render() {
    return (
      <div>
        <br />
        <div class="text-center">
          <img
            src={logo}
            class="rounded "
            width="100"
            height="100"
            alt="logo"
          ></img>
        </div>
        <div className="text-center">
          <p className="title text-primary">Asistente Toma de Ramos</p>
        </div>

        <Login />

        <Footer />
      </div>
    );
  }
}
