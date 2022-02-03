import React, { Component, Fragment } from "react";
import Bloque from "./Bloque";
import BloqueH from "./BloqueH";
import RamosH from "./RamosH";
import Dia from "./Dia";
import { Button, Row, Col, Typography } from "antd";

const { Title } = Typography;

export default class Horario extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      LU_08: null,
      LU_10: null,
      LU_11: null,
      LU_13: null,
      LU_14: null,
      LU_16: null,
      LU_17: null,

      MA_08: null,
      MA_10: null,
      MA_11: null,
      MA_13: null,
      MA_14: null,
      MA_16: null,
      MA_17: null,

      MI_08: null,
      MI_10: null,
      MI_11: null,
      MI_13: null,
      MI_14: null,
      MI_16: null,
      MI_17: null,

      JU_08: null,
      JU_10: null,
      JU_11: null,
      JU_13: null,
      JU_14: null,
      JU_16: null,
      JU_17: null,

      VI_08: null,
      VI_10: null,
      VI_11: null,
      VI_13: null,
      VI_14: null,
      VI_16: null,
      VI_17: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  /*  
    for(let j = 0; j<this.state.Ramos[i].length; j++){
                
                this.setState({
                   [this.state.Ramos[i].eventos[j].bloque]: this.state.Ramos[i]
                   
               })
           }
        */
  fillSchedule = () => {
    for (let i = 0; i < this.props.horario.length; i++) {
      for (let j = 0; j < this.props.horario[i].eventos.length; j++) {
        this.setState({
          [this.props.horario[i].eventos[j].bloque]: this.props.horario[i],
        });
      }
    }
  };

  componentDidMount = () => {
    this.fillSchedule();
    this.forceUpdate();
  };

  render() {
    return (
      <Fragment>
        <Row justify="center" align="middle">
          <Col sm={0} md={3}></Col>
          <Col
            sm={24}
            md={18}
            style={{
              overflow: "auto",
              border: "1px solid #9c9c9c",
              borderRadius: "10px",
            }}
          >
            <Row justify="center" align="middle" style={{ minWidth: "1300px" }}>
              <Col span={3} style={{ overflow: "hidden" }}>
                <br />
                <Title
                  style={{
                    textAlign: "right",
                    fontSize: "20px",
                    padding: "5px",
                    paddingRight: "20px",
                  }}
                >
                  Bloque
                </Title>
                <br />
                <BloqueH bloque={"Bloque A"} hora={"8:30 - 9:50"} />
                <BloqueH bloque={"Bloque B"} hora={"10:00 - 11:20"} />
                <BloqueH bloque={"Bloque C"} hora={"11:30 - 12:50"} />
                <BloqueH bloque={"Bloque D"} hora={"13:00 - 14:20"} />
                <BloqueH bloque={"Bloque E"} hora={"14:30 - 15:50"} />
                <BloqueH bloque={"Bloque F"} hora={"16:00 - 17:20"} />
                <BloqueH bloque={"Bloque G"} hora={"17:30 - 18:50"} />
              </Col>

              <Col span={4} style={{ overflow: "hidden" }}>
                <Title
                  style={{
                    textAlign: "center",

                    fontSize: "20px",
                  }}
                >
                  Lunes
                </Title>
                <Bloque ramo={this.state.LU_08} />
                <Bloque ramo={this.state.LU_10} />
                <Bloque ramo={this.state.LU_11} />
                <Bloque ramo={this.state.LU_13} />
                <Bloque ramo={this.state.LU_14} />
                <Bloque ramo={this.state.LU_16} />
                <Bloque ramo={this.state.LU_17} />
              </Col>
              <br />
              <Col span={4} style={{ overflow: "hidden" }}>
                <Title
                  style={{
                    textAlign: "center",

                    fontSize: "20px",
                  }}
                >
                  Martes
                </Title>
                <Bloque ramo={this.state.MA_08} />
                <Bloque ramo={this.state.MA_10} />
                <Bloque ramo={this.state.MA_11} />
                <Bloque ramo={this.state.MA_13} />
                <Bloque ramo={this.state.MA_14} />
                <Bloque ramo={this.state.MA_16} />
                <Bloque ramo={this.state.MA_17} />
              </Col>
              <Col span={4} style={{ overflow: "hidden" }}>
                <Title
                  style={{
                    textAlign: "center",

                    fontSize: "20px",
                  }}
                >
                  Miércoles
                </Title>
                <Bloque ramo={this.state.MI_08} />
                <Bloque ramo={this.state.MI_10} />
                <Bloque ramo={this.state.MI_11} />
                <Bloque ramo={this.state.MI_13} />
                <Bloque ramo={this.state.MI_14} />
                <Bloque ramo={this.state.MI_16} />
                <Bloque ramo={this.state.MI_17} />
              </Col>
              <Col span={4} style={{ overflow: "hidden" }}>
                <Title
                  style={{
                    textAlign: "center",

                    fontSize: "20px",
                  }}
                >
                  Jueves
                </Title>
                <Bloque ramo={this.state.JU_08} />
                <Bloque ramo={this.state.JU_10} />
                <Bloque ramo={this.state.JU_11} />
                <Bloque ramo={this.state.JU_13} />
                <Bloque ramo={this.state.JU_14} />
                <Bloque ramo={this.state.JU_16} />
                <Bloque ramo={this.state.JU_17} />
              </Col>
              <Col span={4} style={{ overflow: "hidden" }}>
                <Title
                  style={{
                    textAlign: "center",

                    fontSize: "20px",
                  }}
                >
                  Viernes
                </Title>
                <Bloque ramo={this.state.VI_08} />
                <Bloque ramo={this.state.VI_10} />
                <Bloque ramo={this.state.VI_11} />
                <Bloque ramo={this.state.VI_13} />
                <Bloque ramo={this.state.VI_14} />
                <Bloque ramo={this.state.VI_16} />
                <Bloque ramo={this.state.VI_17} />
              </Col>
              <Col span={1}></Col>
            </Row>
          </Col>
          <Col sm={0} md={3}></Col>
        </Row>
        <br />
        <br />
        {/* 
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedFrontToBack={1.5}
          flipSpeedBackToFront={1.5}
        >
          <div className="container" key="front" onClick={this.handleClick}>
            <div className="card border-primary text-center custom2">
              <br />
              <div className="row row-cols-10">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col"></div>
                <Dia dia={"Lunes"} />
                <Dia dia={"Martes"} />
                <Dia dia={"Miércoles"} />
                <Dia dia={"Jueves"} />
                <Dia dia={"Viernes"} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"A"} hora={"8:30 - 9:50"} />
                <Bloque ramo={this.state.LU_8} />
                <Bloque ramo={this.state.MA_8} />
                <Bloque ramo={this.state.MI_8} />
                <Bloque ramo={this.state.JU_8} />
                <Bloque ramo={this.state.VI_8} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"B"} hora={"10:00 - 11:20"} />
                <Bloque ramo={this.state.LU_10} />
                <Bloque ramo={this.state.MA_10} />
                <Bloque ramo={this.state.MI_10} />
                <Bloque ramo={this.state.JU_10} />
                <Bloque ramo={this.state.VI_10} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"C"} hora={"11:30 - 12:50"} />
                <Bloque ramo={this.state.LU_11} />
                <Bloque ramo={this.state.MA_11} />
                <Bloque ramo={this.state.MI_11} />
                <Bloque ramo={this.state.JU_11} />
                <Bloque ramo={this.state.VI_11} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"D"} hora={"13:00 - 14:20"} />
                <Bloque ramo={this.state.LU_13} />
                <Bloque ramo={this.state.MA_13} />
                <Bloque ramo={this.state.MI_13} />
                <Bloque ramo={this.state.JU_13} />
                <Bloque ramo={this.state.VI_13} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"E"} hora={"14:30 - 15:50"} />
                <Bloque ramo={this.state.LU_14} />
                <Bloque ramo={this.state.MA_14} />
                <Bloque ramo={this.state.MI_14} />
                <Bloque ramo={this.state.JU_14} />
                <Bloque ramo={this.state.VI_14} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"F"} hora={"16:00 - 17:20"} />
                <Bloque ramo={this.state.LU_16} />
                <Bloque ramo={this.state.MA_16} />
                <Bloque ramo={this.state.MI_16} />
                <Bloque ramo={this.state.JU_16} />
                <Bloque ramo={this.state.VI_16} />
                &nbsp;&nbsp;
              </div>

              <div className="row row-cols-10">
                <BloqueH bloque={"G"} hora={"17:30 - 18:50"} />
                <Bloque ramo={this.state.LU_17} />
                <Bloque ramo={this.state.MA_17} />
                <Bloque ramo={this.state.MI_17} />
                <Bloque ramo={this.state.JU_17} />
                <Bloque ramo={this.state.VI_17} />
                &nbsp;&nbsp;
              </div>
            </div>

            <br />
          </div>
          <div className="container " key="back" onClick={this.handleClick}>
            <div className="card border-primary border-5 custom2 ">
              &nbsp;
              <div className="row row-cols-5">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col">
                  {" "}
                  <h3 className="card-title text-primary text-center">
                    Horario n°{this.props.index + 1}
                  </h3>{" "}
                </div>
                <div className="col"> </div>
                <div className="col"> </div>
              </div>
              <h5>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ramos:
              </h5>
              <div className="row row-cols-2">
                {this.props.horario ? (
                  <RamosH ramos={this.props.horario} />
                ) : null}
              </div>
            </div>
            <br />
          </div>
        </ReactCardFlip>
        */}
      </Fragment>
    );
  }
}
