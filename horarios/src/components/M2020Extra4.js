import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2020Extra4 from "./Malla2020Extra4";
import { Link } from "react-router-dom";

export default class M2020Extra1 extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout>
          <br />
          <div className="row row-cols-3">
            <div className="col">
              <h1 className="title text-primary text-center">Malla 2020</h1>
            </div>
            <div className="col"></div>
            <div className="col">
              <br />
              <div className="align-self-center">
                <button
                  type="submit"
                  className="btn btn-secondary rounded-pill btn-sm"
                >
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/users/usr/mallas/malla2020/AvanceCurricular",
                    }}
                    style={{ color: "#FFF" }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Elegir Malla 2020
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />

          <Malla2020Extra4 />
        </ATRLayout>
      </Fragment>
    );
  }
}
