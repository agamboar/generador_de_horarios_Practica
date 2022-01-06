import React, { Component } from "react";
import ATRLayout from "./Layout";
import AvanceManual2010 from "./AvanceManual2010";
import axios from "axios";

export default class AManual extends Component {
  render() {
    return (
      <div>
        <ATRLayout>
          <AvanceManual2010 />
        </ATRLayout>
      </div>
    );
  }
}
