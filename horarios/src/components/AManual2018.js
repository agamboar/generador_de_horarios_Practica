import React, { Component } from "react";
import ATRLayout from "./Layout";
import AvanceManual2018 from "./AvanceManual2018";

export default class AManual extends Component {
  render() {
    return (
      <div>
        <ATRLayout>
          <AvanceManual2018 />
        </ATRLayout>
      </div>
    );
  }
}
