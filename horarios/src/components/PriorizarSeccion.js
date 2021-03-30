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

const {  Content, Footer } = Layout;
const { Title, Text} = Typography;
//post aqui para saber los ramos disponibles



export default class UserInterface extends Component {
    state = { 
      message: "no", 
      ramos: ["Programacion I","Base de datos","Ingenieria de Software"]
    }

    callbackFunction = (childData) => {
      this.setState({message: childData})
    } 

    render() {


      const fetchTable = () => {
          
        fetch(`https://asistente-eit.udp.cl/get_ramos_disponibles/`)
            .then(res => res.json())
            .then(json => {
              this.setState({ramos:json}) 
            });
      }
      fetchTable()
     
      return (
            <div>
            {//(localStorage.getItem("token"))?  
            <div>
                <Navbar/>
                
                <Layout>
                  <Content className="site-layout" style={{ padding: '0 50px', marginLeft: 30, alignItems: "center"}}>

                  <div style={{ padding: 20,  display: "flex",  justifyContent: "left", alignItems: "center" }}>
                  <Space direction="vertical">
                    <Title style={{ color: "#007bff"}}level={1}>Priorización de secciones</Title>
                    <Title  style={{ marginLeft: 35}} level={5}>Escoja un ramo para que pueda priorizar sus secciones</Title>
                  </Space>
                  </div>

                  <div className="site-layout-background" style={{ padding: 15,  display: "flex",  justifyContent: "center", alignItems: "center" }}>
                      <SelectSearch ramosDisponibles = {this.state.ramos} parentCallback = {this.callbackFunction}  /> {/*aca se le pasa todos los ramos que puede tomar el pibe */}
                      
                  </div>
                  {(this.state.message != "no")?
                  <div style={{padding: 10, display: "flex",  justifyContent: "flex-end"}}><Button  type="primary">Guardar prioridad</Button></div>
                  :null}
                      {/*aca recibir el nombre del ramo y sus secciones o no, simplemente recibir el nombre y el codigo*/}
                    
                      {(this.state.message != "no")?
                      <div>
                      <div style={{padding: 10, display: "flex",  justifyContent: "center"}}><Alert message="(Deje las secciones que más le importen al inicio de la tabla)" type="warning" /></div>
                      <Card title={"Secciones del ramo: \""+this.state.message+"\""}>
                        <TablaSecciones/> {/*aca pasar el codigo del ramo y dps solo recibir el arreglo para mandarlo a la base*/}
                      </Card>
                      </div>
                      :null}
                    
                    <br></br>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                  </Content>
            
                  
                  </Layout>
                              

            </div>
            //: <NotAuth />
          }
            </div>
        )
    }
}
