import React, { Component } from "react";
import ATRLayout from "./Layout";
import AvanceManual2010 from "./AvanceManual2010";

export default class AManual extends Component {
  render() {
    return (
      <div>
        <ATRLayout phase={2}>
          <br />
          <br />
          <br />
          <AvanceManual2010 />
        </ATRLayout>
      </div>
    );
  }
}
