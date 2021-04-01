import React, {useEffect, useState, Component} from 'react';
import { Card } from 'antd';
import Navbar from './Navbar'
import NotAuth from './NotAuth'
import SelectSearch from './SelectSearch'
import TablaSecciones from './TablaSecciones'
import Derechos from './Derechos'
import { Typography , Space } from 'antd';
import { Layout} from 'antd';
import { Button } from 'antd'
import { Alert } from 'antd';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { Row, Col} from 'antd';

const {  Content, Footer } = Layout;
const { Title} = Typography;
//post aqui para saber los ramos disponibles




export default class UserInterface extends Component {
    state = { 
      message: "no", 
      ramos: ""
    }

    callbackFunction = (childData) => {
      this.setState({message: childData})
    } 
    
    getRamos = () => {
          
      var config = {
        method: 'get',
        url: `https://asistente-eit.udp.cl/get_ramos_disponibles/`,
        headers: {
            'Authorization': 'Token ' + localStorage.getItem("token"), 
            'Content-Type': 'application/json'
        }
    };
    

    axios(config).then(response => { 
        //console.log(response) //verificar como se recibe la info          
        if (response.data){
          this.setState({ramos:response.data}) ; //map de eso y se puede rellenar la tabla
        }
    } )
    
    }
    componentDidMount(){
      this.getRamos()
    }
    // deberia hacer todos los post con axios para que se ve mas ordenado
    
    render() {
      
      
     
      return (
    
      
            <div>
            {(localStorage.getItem("token"))?  
            <div>
                <Navbar/>
                
                <Layout>
                  <Content className="site-layout" style={{ padding: '0 50px', marginLeft: 30, alignItems: "center"}}>

                  <div style={{ padding: 20,  display: "flex",  justifyContent: "left", alignItems: "center" }}>
                  <Space direction="vertical">
                  <Row>
                    <Col flex="auto"><Title style={{ color: "#007bff"}}level={1}>Priorización de secciones</Title></Col>    
                    <Col flex="auto"><Title  style={{ marginLeft: 35}} level={5}>Ir a:</Title> </Col>
                    <Col flex="right"><Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} ><Button type="primary">Priorizar Ramos</Button></Link></Col>
                    <Col flex="right"><Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }}  ><Button  type="primary">Generar Horario</Button></Link></Col>
                  </Row>
                  <Title  style={{ marginLeft: 35}} level={4}>Escoja un ramo para que pueda priorizar sus secciones</Title>
                  </Space>
                  
                  </div>

                  <div className="site-layout-background" style={{ padding: 15,  display: "flex",  justifyContent: "center", alignItems: "center" }}>
                    {console.log(this.state.ramos)}
                    {console.log(this.state.ramos["ramos_disponibles"])}
                    {(this.state.ramos!="")? <SelectSearch ramosDisponibles = {this.state.ramos["ramos_disponibles"]} parentCallback = {this.callbackFunction}  /> 
                    :<p>Te has saltado un paso, vuelve atrás</p>}
                     
                      
                  </div>
                  {/*(this.state.message != "no")?
                  <div style={{padding: 10, display: "flex",  justifyContent: "flex-begin"}}><Button  type="primary">Guardar prioridad</Button></div>:null*/}
                      {/*aca recibir el nombre del ramo y sus secciones o no, simplemente recibir el nombre y el codigo*/}
                    
                      {(this.state.message != "no")?
                      <div>
                      <div style={{padding: 10, display: "flex",  justifyContent: "center"}}><Alert message="(Deje las secciones que más le importen al inicio de la tabla)" type="warning" /></div>
                      <Card title={"Secciones del ramo: \""+this.state.message["codigo"]+"\""}>
                        {console.log(this.state.message["secciones"])}
                        <TablaSecciones codigo= {this.state.message["codigo"]}/> {/*aca pasar el codigo del ramo y dps solo recibir el arreglo para mandarlo a la base*/}
                      </Card>
                      </div>
                      :null}
                    
                    <br></br>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                  </Content>
            
                  
                  </Layout>
                              

            </div>
            : <NotAuth />
          }
            </div>
        )
    }
}
