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
import { message } from 'antd';
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
    title: 'Nombre Ramo',
    dataIndex: 'nombre_ramo',
    className: 'drag-visible',
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
  /*{
    title: 'Prioridad Actual',
    dataIndex: 'ss',
  },*/
  
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
      var newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
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

  DraggableBodyRow = ({ className, style, ...restProps }) => { //antes de var era const
    var { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    var index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };
 
  
  refreshTable=()=>{
   
    var config = {
      method: 'get',
      url: `http://127.0.0.1:8000/get_secciones/${this.props.codigo}/`,
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
            this.setState({dataSource: "no"})
          }
      }).catch(function (error) {
        if (error.response) {
         toast.error("Elige tu malla y calcula tu ruta critica nuevamente", { position: toast.POSITION.TOP_CENTER });
        }
       });
      
  };
  

  setSS= async ()=>{
    if (this.state.dataSource =="" || this.state.dataSource =="no"){
      setTimeout(function () {message.error('No hay datos que guardar.'); }, 1000);
      
    
    }else{

      var data = JSON.stringify(this.state.dataSource);
      console.log(data)
  
      var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/ss/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + localStorage.getItem("token")
        },
        data: data
      };
  
      await axios(config)
      setTimeout(function () { message.success('Prioridadas guardadas.'); }, 500);
      //setTimeout(function () { window.location.href = 'http://127.0.0.1:8000/users/usr/priorizarSeccion'; }, 3500);
      //
    }
    
  }
    
  
  componentDidMount(){
    this.refreshTable()
   
  }
  render() {
  
    var { dataSource } = this.state;

    
    
    return (
      <div>
        
        <Row>
        <Col flex="auto"><div style={{padding: 10, display: "flex",  justifyContent: "flex-begin"}}><Button onClick={this.setSS}  type="primary">Guardar prioridad</Button></div></Col>
        <Col flex="auto"><div ><Alert message="(Guarde los cambios antes de actualizar la tabla)" type="error" /></div></Col>
        <Col flex="auto"><div style={{padding: 10, display: "flex",  justifyContent: "flex-end"}} ><Button onClick={this.refreshTable} type="primary">Actualizar tabla</Button></div></Col>
        
        </Row>
      {(dataSource =="" || dataSource =="no")?
      
      
      null:<div>

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
      /></div>}

      {this.state.dataSource == "no"?
      <div style={{padding: 20, display: "flex",  justifyContent: "center"}}> 
      <p>No hay secciones disponibles para este ramo, en base a nuestros registros</p>

      </div>:null}
      </div>
    );
  }
}
export default SortableTable ;