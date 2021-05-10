import React, {useEffect, useState, Component} from 'react';
import { Card } from 'antd';
import Navbar from './Navbar'
import NotAuth from './NotAuth'
import SelectSearch from './SelectSearch'
import TablaAreasCfg from './TablaAreasCfg'
import Derechos from './Derechos'
import { Typography , Space } from 'antd';
import { Layout} from 'antd';
import { Button } from 'antd'
import { Alert } from 'antd';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { Row, Col} from 'antd';

const {  Content, Footer } = Layout;
const { Title, Text } = Typography;
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
                      <div>
                      <div style={{padding: 10, display: "flex",  justifyContent: "center"}}><Alert message="(Deje las areas que más le importen al inicio de la tabla)" type="warning" /></div>
                      <Card>
                        <TablaAreasCfg/> 
                      </Card>
                      </div>
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
