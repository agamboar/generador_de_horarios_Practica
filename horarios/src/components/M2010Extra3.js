import React, { Component, Fragment } from "react";
import ATRLayout from "./Layout";
import Malla2010Extra3 from "./Malla2010Extra3";
import { Link } from "react-router-dom";

export default class M2010Extra3 extends Component {
  render() {
    return (
      <Fragment>
        <ATRLayout>
          <div className="row row-cols-3">
            <div className="col">
              <h1 className="title text-primary text-center">Malla 2010</h1>
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
                      pathname: "/users/usr/mallas/malla2010/AvanceCurricular",
                    }}
                    style={{ color: "#FFF" }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Elegir Malla 2010
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />

          <Malla2010Extra3 />
        </ATRLayout>
      </Fragment>
    );
  }
}
