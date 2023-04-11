import React, { Fragment } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { MenuOutlined } from "@ant-design/icons";
import arrayMove from "array-move";
import "antd/dist/antd.css";
import "../assets/css/message.css";
import "../assets/css/Tables.css";
import axios from "axios";
import { Row, Col, Divider, message, Button, Alert, Table } from "antd";

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
));

const columns = [
  {
    title: "Priorizar",
    dataIndex: "sort",
    width: 35,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "Area CFG",
    dataIndex: "area",
    className: "drag-visible",
  },
  {
    title: "Prioridad Actual",
    dataIndex: "prioridad",
    className: "drag-visible",
  },
];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

class SortableTable extends React.Component {
  state = {
    dataSource: "",
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    var { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      var newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(
        (el) => !!el
      );
      console.log("Sorted items: ", newData);
      for (let i = 0; i < newData.length; i++) {
        newData[i].index = i;
        newData[i].prioridad = i + 1;
      }
      this.setState({ dataSource: newData });
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
    var { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    var index = dataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };

  refreshTable = () => {
    var config = {
      method: "get",
      url: `http://127.0.0.1:8000/get_prio_cfg/`,
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    axios(config).then((response) => {
      console.log(response); //verificar como se recibe la info
      if (response.data.prio_cfg) {
        this.setState({ dataSource: response.data.prio_cfg });
      } else {
        this.setState({
          dataSource: [
            { area: "Ciencias Sociales", prioridad: 1, index: 0 },
            { area: "Ciencia y Sociedad", prioridad: 2, index: 1 },
            { area: "Historia", prioridad: 3, index: 2 },
            { area: "Humanidades", prioridad: 4, index: 3 },
          ],
        });
      }
    });
  };

  setPrio = async () => {
    const success_message = (msgcontent) => {
      message.success({
        key: "msgKey",
        content: msgcontent,
        duration: 3,
        onClick: () => message.destroy("msgKey"),
      });
    };

    const error_message = (msgcontent) => {
      message.error({
        key: "msgKey2",
        content: msgcontent,
        duration: 3,
        onClick: () => message.destroy("msgKey2"),
      });
    };

    if (this.state.dataSource == "" || this.state.dataSource == "no") {
      setTimeout(function () {
        error_message("No hay datos que guardar.");
      }, 500);
    } else {
      var data = JSON.stringify(this.state.dataSource);
      console.log(data);

      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/set_prio_areas_cfg/",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
        data: data,
      };
      await axios(config);
      setTimeout(function () {
        success_message("Prioridadas guardadas.");
      }, 500);
      //setTimeout(function () { window.location.href = 'http://127.0.0.1:8000/users/usr/priorizarSeccion'; }, 3500);
      //
    }
  };

  componentDidMount() {
    this.refreshTable();
  }
  render() {
    //var { dataSource } = this.state;

    return (
      <div>
        <Row justify="center">
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              onClick={this.setPrio}
              type="primary"
              shape="round"
              size="large"
            >
              Guardar Prioridades
            </Button>
          </Col>
        </Row>
        <br />
        {this.state.dataSource.length === 0
          ? null
          : (console.log(this.state.dataSource),
            (
              <Fragment>
                <Row justify="center">
                  <Col xs={24} sm={16} lg={12} style={{ textAlign: "center" }}>
                    <Alert
                      message="Recuerde guardar los cambios antes de seguir."
                      type="info"
                      showIcon
                      style={{ fontSize: "15px" }}
                    />
                  </Col>
                </Row>
                <br />
                <Row justify="center">
                  <Col span={24}>
                    <Table
                      pagination={false}
                      dataSource={this.state.dataSource}
                      columns={columns}
                      rowKey="index"
                      components={{
                        body: {
                          wrapper: this.DraggableContainer,
                          row: this.DraggableBodyRow,
                        },
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Row justify="center">
                  <Col span={24} style={{ textAlign: "center" }}>
                    <Button
                      onClick={this.setPrio}
                      type="primary"
                      shape="round"
                      size="large"
                    >
                      Guardar Prioridades
                    </Button>
                  </Col>
                </Row>
              </Fragment>
            ))}
        {this.state.dataSource == "" ? (
          <div
            style={{ padding: 20, display: "flex", justifyContent: "center" }}
          >
            <p>Vacio</p>
          </div>
        ) : null}
      </div>
    );
  }
}
export default SortableTable;
