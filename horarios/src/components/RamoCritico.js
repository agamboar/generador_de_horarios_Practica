import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Seccion from './Seccion'




export default class RamoCritico extends Component {

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
              Ramo Critico: {this.props.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Seccion num={this.state.s1} onChangeDOWN={this.onChange1_2}/>
              <Seccion num={this.state.s2} onChangeDOWN={this.onChange2_3} onChangeUP={this.onChange1_2} />
              <Seccion num={this.state.s3} onChangeDOWN={this.onChange3_4} onChangeUP={this.onChange2_3} />
              <Seccion num={this.state.s4} onChangeUP={this.onChange3_4} />
              
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
