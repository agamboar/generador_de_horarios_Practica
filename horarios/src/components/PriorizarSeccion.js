import React, { Component } from 'react'
import { Card } from 'antd';
import Navbar from './Navbar'
import NotAuth from './NotAuth'
import SelectSearch from './SelectSearch'
import TablaSecciones from './TablaSecciones'
import { Typography , Space } from 'antd';
import { Layout} from 'antd';

const {  Content } = Layout;
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
        return (
            <div>
            {//(localStorage.getItem("token"))?  
            <div>
                <Navbar/>
                
                <Layout>
                  <Content className="site-layout" style={{ padding: '0 50px', marginLeft: 30, alignItems: "center"}}>

                  <div style={{ padding: 20,  display: "flex",  justifyContent: "left", alignItems: "center" }}>
                  <Space direction="vertical">
                    <Title style={{ color: "#007bff"}}level={1}>Priorizacion de secciones</Title>
                    <Title  style={{ marginLeft: 35}} level={5}>Escoja un ramo para que pueda priorizar sus secciones</Title>
                  </Space>
                  </div>

                  <div className="site-layout-background" style={{ padding: 15,  display: "flex",  justifyContent: "center", alignItems: "center" }}>
                      <SelectSearch ramosDisponibles = {this.state.ramos} parentCallback = {this.callbackFunction}  /> {/*aca se le pasa todos los ramos que puede tomar el pibe */}
                  </div>
                      {/*aca recibir el nombre del ramo y sus secciones o no, simplemente recibir el nombre y el codigo*/}
                    <div>
                      {(this.state.message != "no")?
                      <Card title={"Secciones del ramo: \""+this.state.message+"\""}>
                        <TablaSecciones/> {/*aca pasar el codigo del ramo y dps solo recibir el arreglo para mandarlo a la base*/}
                      </Card>
                      :null}
                    
                    </div>
                    
                  </Content>
            
                </Layout>
                              

            </div>
            //: <NotAuth />
          }
            </div>
        )
    }
}
