import React, { Component, Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import RamoPrioridad from "./RamoPrioridad";
import arrayMove from "array-move";
import { Collapse, List, Typography, Row, Col, Table } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import "../assets/css/Tables.css";

const { Panel } = Collapse;
const { Title, Text } = Typography;

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
));
const columns = [
  {
    title: "Priorizar",
    dataIndex: "sort",
    width: "90px",
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "Nombre Ramo",
    dataIndex: "nombre",
    className: "drag-visible",
    width: "135px",
  },
  {
    title: "Código Sección",
    dataIndex: "codigo",
    className: "drag-visible",
    width: "135px",
  },
];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

export default class RamoCritico extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ramos: [],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    var drag_ramos = this.state.ramos;
    if (oldIndex !== newIndex) {
      var newData = arrayMove([].concat(drag_ramos), oldIndex, newIndex).filter(
        (el) => !!el
      );
      console.log("Sorted items: ", newData);
      for (let i = 0; i < newData.length; i++) {
        newData[i].new_kk = 110 - i * 10;
      }
      this.setState({ ramos: newData });
    }
  };

  DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    //antes de var era const
    var drag_ramos = this.state.ramos;
    // function findIndex base on Table rowKey props and should always be a right array index
    var index = drag_ramos.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };

  componentDidMount = () => {
    //console.log("INICIAL RAMOS");
    //console.log(this.props);
  };

  componentDidUpdate = (prevProps, prevState) => {
    //console.log("PREVSTATE");
    //console.log(prevState);
    //console.log("RAMOS");
    //console.log(this.state.ramos);
    //console.log("PROPS");
    //console.log(this.props);
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
            holgura: this.props.resultado[i].holgura,
            kk: this.props.resultado[i].kk,
            new_kk: 110 - new_ramo.length * 10,
            index: new_ramo.length,
          });
          //console.log(this.props.resultado[i].to_asignatura_real.nombre);
        }
      }

      if (this.state.ramos.length === 0) {
        this.setState({
          ramos: [...this.state.ramos, ...new_ramo],
        });
      } else {
        //console.log("state ramos");
        //console.log(this.state.ramos);
        let full_ramos = this.props.full;
        for (let i = 0; i < full_ramos.length; i++) {
          for (let j = 0; j < this.state.ramos.length; j++) {
            if (
              full_ramos[i].holgura === this.state.ramos[j].holgura &&
              full_ramos[i].to_asignatura_real.nombre ===
                this.state.ramos[j].nombre
            ) {
              console.log(
                "reordenando los ramos",
                full_ramos[i].kk,
                "-->",
                this.state.ramos[j].new_kk
              );
              full_ramos[i].kk = this.state.ramos[j].new_kk;
            }
          }
        }
        //console.log("full_ramos");
        //console.log(full_ramos);
        this.props.onPriorChange(full_ramos);
      }
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
              {/*
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
               */}

              {this.state.ramos.length > 0 ? (
                <Row justify="center">
                  <Col span={24}>
                    <Table
                      pagination={false}
                      dataSource={this.state.ramos}
                      columns={columns}
                      rowKey="index"
                      components={{
                        body: {
                          wrapper: this.DraggableContainer,
                          row: this.DraggableBodyRow,
                        },
                      }}
                      scroll={{ x: "true" }}
                    />
                  </Col>
                </Row>
              ) : (
                <Fragment />
              )}

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
