import React, { Component, Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import RamoPrioridad from "./RamoPrioridad";
import { Collapse, List, Typography } from "antd";

const { Panel } = Collapse;
const { Title, Text } = Typography;
/*

*/
export default class RamoCritico extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ramos: [],
  };

  componentDidMount = () => {
    console.log("INICIAL RAMOS");
    console.log(this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("PREVSTATE");
    console.log(prevState);
    console.log("RAMOS");
    console.log(this.state.ramos);
    let new_ramo = [];

    if (
      prevState.ramos.length === this.state.ramos.length &&
      this.props.resultado[0] !== null
    ) {
      //comienzo
      console.log("entre");
      for (let i = 0; i < this.props.resultado.length; i++) {
        if (this.props.resultado[i] != null) {
          new_ramo.push({
            nombre: this.props.resultado[i].to_asignatura_real.nombre,
            codigo: this.props.resultado[i].to_asignatura_real.codigo,
          });
          console.log(this.props.resultado[i].to_asignatura_real.nombre);
        }
      }

      this.setState({
        ramos: [...this.state.ramos, ...new_ramo],
      });
    }

    // if (prevState.ramos !== this.state.ramos) {
    //   console.log("ENTRE");
    //   for (let i = 0; i < this.props.resultado.length; i++) {
    //     if (this.props.resultado[i] != null) {
    //       new_ramo = {
    //         nombre: this.props.resultado[i].to_asignatura_real.nombre,
    //         codigo: this.props.resultado[i].to_asignatura_real.codigo,
    //       };
    //       if (prevState.ramos.length === 0) {
    //         for (let j = 0; j < this.state.ramos.length; j++) {
    //           if (new_ramo === this.state.ramos[j]) {
    //             console.log("ya esta");
    //           } else {
    //             this.setState({
    //               ramos: [...this.state.ramos, new_ramo],
    //             });
    //           }
    //         }
    //       } else {
    //         for (let j = 0; j < prevState.ramos.length; j++) {
    //           if (new_ramo === prevState.ramos[j]) {
    //             console.log("ya esta");
    //           } else {
    //             this.setState({
    //               ramos: [...this.state.ramos, new_ramo],
    //             });
    //           }
    //         }
    //       }
    //     }
    //   }
    // } else if (prevState.ramos.length === 0) {
    //   for (let i = 0; i < this.props.resultado.length; i++) {
    //     if (this.props.resultado[i] != null) {
    //       new_ramo = {
    //         nombre: this.props.resultado[i].to_asignatura_real.nombre,
    //         codigo: this.props.resultado[i].to_asignatura_real.codigo,
    //       };
    //       this.setState({
    //         ramos: [...this.state.ramos, new_ramo],
    //       });
    //     }
    //   }
    // }
  };

  render() {
    if (this.props.resultado[0] === null) {
      return <div />;
    } else {
      return (
        <Fragment>
          <br />
          <Collapse accordion>
            <Panel
              header={this.props.name}
              key="0"
              style={{ fontSize: "20px" }}
            >
              <List
                itemLayout="horizontal"
                dataSource={this.state.ramos}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<Title level={3}>Ramo: {item.nombre}</Title>}
                      description={
                        <Text style={{ fontSize: "20px" }}>
                          Código: {item.codigo}
                        </Text>
                      }
                    />
                  </List.Item>
                )}
              />
              {/*<RamoPrioridad
                ramo={this.props.resultado[0]}
                onChangeDOWN={this.props.onChange0_1}
              />
              <RamoPrioridad
                ramo={this.props.resultado[1]}
                onChangeDOWN={this.props.onChange1_2}
                onChangeUP={this.props.onChange0_1}
              />
              <RamoPrioridad
                ramo={this.props.resultado[2]}
                onChangeDOWN={this.props.onChange2_3}
                onChangeUP={this.props.onChange1_2}
              />
              <RamoPrioridad
                ramo={this.props.resultado[3]}
                onChangeDOWN={this.props.onChange3_4}
                onChangeUP={this.props.onChange2_3}
              />
              <RamoPrioridad
                ramo={this.props.resultado[4]}
                onChangeDOWN={this.props.onChange4_5}
                onChangeUP={this.props.onChange3_4}
              />
              <RamoPrioridad
                ramo={this.props.resultado[5]}
                onChangeDOWN={this.props.onChange5_6}
                onChangeUP={this.props.onChange4_5}
              />
              <RamoPrioridad
                ramo={this.props.resultado[6]}
                onChangeDOWN={this.props.onChange6_7}
                onChangeUP={this.props.onChange5_6}
              />
              <RamoPrioridad
                ramo={this.props.resultado[7]}
                onChangeDOWN={this.props.onChange7_8}
                onChangeUP={this.props.onChange6_7}
              />
              <RamoPrioridad
                ramo={this.props.resultado[8]}
                onChangeDOWN={this.props.onChange8_9}
                onChangeUP={this.props.onChange7_8}
              />
              <RamoPrioridad
                ramo={this.props.resultado[9]}
                onChangeDOWN={this.props.onChange9_10}
                onChangeUP={this.props.onChange8_9}
              />
              <RamoPrioridad
                ramo={this.props.resultado[10]}
                onChangeUP={this.props.onChange9_10}
              /> */}
            </Panel>
          </Collapse>
        </Fragment>
      );
    }
  }
}
