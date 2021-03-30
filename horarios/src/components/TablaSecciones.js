import React from 'react';
import { Table } from 'antd';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Button } from 'antd'
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

const data = [ //secciones del ramo, hacer post con props.codigo del ramo 
    //map e index (de los elementos) para tener todos los valores necesarios
    // los index de la tabla son importantes para ordenar
  {
    key: '1',
    name: 'CIT2012_CA01',
    age: 1,
    address: 'ALBA MANUEL',
    horario: "LU MA 8.30 - MI 10",
    vac_libres: 23,
    index: 0,
  },
  {
    key: '2',
    name: 'CIT2012_CA02',
    age: 2,
    address: 'NIETO ANDREA VICTORIA',
    horario: "MI VI 8.30 - LU 10",
    vac_libres: 15,
    index: 1,
  },
  {
    key: '3',
    name: 'CIT2012_CA03',
    age: 3,
    address: 'GUTIERREZ MARTIN EDUARDO',
    horario: "LU JU 11.30 - MA 10",
    vac_libres: 1,
    index: 2,
  },
  {
    key: '4',
    name: 'CIT2012_CA04',
    age: 4,
    address: 'DUJOVNE DIEGO ROBERTO',
    horario: "MA VI 11.30 - MI 10",
    vac_libres: 10,
    index: 3,
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


  /*refreshSecciones = () => {
    if (this.props.secciones){
      this.setState({dataSource: this.props.secciones})
    }
  
  }*/

  
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
          if (response.data){
            this.setState({dataSource: response.data.secciones_disponibles})
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
      
     
      <div style={{padding: 10, display: "flex",  justifyContent: "flex-end"}} onClick={this.refreshTable}><Button  type="primary">Actualizar tabla</Button></div>
      {dataSource=! ""?
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
      {this.state.dataSource == []? <p>No hay secciones disponibles</p>:null}
      </div>
    );
  }
}
export default SortableTable ;