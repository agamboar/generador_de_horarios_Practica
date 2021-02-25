import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import RamoCritico from './RamoCritico'




export default class PrioridadRamo extends Component {

    state ={
      s1: 1,
      s2: 2,
      s3: 3,
      s4: 4,
      s5: 5,

    }

    render() {

      return ( 
        <div className = 'container'>
        <Accordion defaultActiveKey="1">
        <Card border="primary" > 
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Prioridad: {this.props.num}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <RamoCritico name='Calculo I'/>

              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

        
      <br/>

      
      </div>
        ) 
      }

      onChange1_2 =(e) => {
        this.setState(prevState =>({
            s1: this.state.s2,
            s2: this.state.s1
        }))
      }
      onChange2_3 =(e) => {
        this.setState(prevState =>({
            s2: this.state.s3,
            s3: this.state.s2
        }))
      }
      onChange3_4 =(e) => {
        this.setState(prevState =>({
            s3: this.state.s4,
            s4: this.state.s3
        }))
      }
}
