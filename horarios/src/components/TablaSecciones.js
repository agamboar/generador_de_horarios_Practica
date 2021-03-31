import React from 'react';
import { Table } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Button } from 'antd'
import { Alert } from 'antd';
import { Row, Col, Divider } from 'antd';
import { toast } from 'react-toastify'

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

const columns = [
  {
    title: 'Priorizar',
    dataIndex: 'sort',
    width: 35,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Código Sección',
    dataIndex: 'cod_seccion',
    className: 'drag-visible',
  },
  {
    title: 'Número Sección',
    dataIndex: 'numb_seccion',
  },
  {
    title: 'Profesor',
    dataIndex: 'profesor',
  },
  {
    title: 'Horario',
    dataIndex: 'horario',
  },
  {
    title: 'Vacantes',
    dataIndex: 'vac_libres',
  },
];


const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class SortableTable extends React.Component {
  
  state = {
    dataSource: "",
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    var { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };
  
  DraggableContainer = props => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    var { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };
  err = (e) => {
    toast.error(e, { position: toast.POSITION.TOP_CENTER })
}

  
  refreshTable=()=>{
   
    var config = {
      method: 'get',
      url: `https://asistente-eit.udp.cl/get_secciones/${this.props.codigo}/`,
      headers: {
          'Authorization': 'Token ' + localStorage.getItem("token"), 
          'Content-Type': 'application/json'
      }
    };

      axios(config).then(response => { 
          console.log(response) //verificar como se recibe la info          
          if (response.data.secciones_disponibles){
            this.setState({dataSource: response.data.secciones_disponibles})
          }else{
            this.setState({dataSource:"no"})
          }
      })
  };

  componentDidMount(){
    this.refreshTable()
   
  }
  render() {
  
    var { dataSource } = this.state;

    
    
    return (
      <div>
        
        <Row>
        <Col flex="auto"><div ><Alert message="(Guarde los cambios antes de actualizar la tabla)" type="error" /></div></Col>
        <Col flex="auto"><div style={{padding: 10, display: "flex",  justifyContent: "flex-end"}} onClick={this.refreshTable}><Button  type="primary">Actualizar tabla</Button></div></Col>
        
        </Row>
      {dataSource !=""?
      <div>

      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        components={{
          body: {
            wrapper: this.DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      /></div>
      :null}
      {this.state.dataSource == "no"?<div style={{padding: 20, display: "flex",  justifyContent: "center"}}> 
      <p>No hay secciones disponibles para este ramo, en base a nuestros registros</p>
      {this.err('error:  ramo sin sin seccion')}
      </div>:null}
      </div>
    );
  }
}
export default SortableTable ;