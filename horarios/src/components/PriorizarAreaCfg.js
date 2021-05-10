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


export default class UserInterface extends Component {
    state = { 
      message: "no", 
      ramos: ""
    }
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
