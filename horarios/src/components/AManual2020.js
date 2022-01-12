import React, { Component } from "react";
import ATRLayout from "./Layout";
import AvanceManual2020 from "./AvanceManual2020";

export default class AManual extends Component {
  render() {
    return (
      <div>
        <ATRLayout phase={2}>
          <br />
          <br />
          <br />
          <AvanceManual2020 />
        </ATRLayout>
      </div>
    );
  }
}
