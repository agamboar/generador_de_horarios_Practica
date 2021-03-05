import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import RamoPrioridad from './RamoPrioridad'




export default class RamoCritico extends Component {

    state ={
      s1: null,
      s2: null,
      s3: null,
      s4: null,
      s5: null,
      s6: null,
      s7: null,
      s8: null,
      s9: null,
      s10: null,
      s11: null,
      ps1: 11,
      ps2: 10,
      ps3: 9,
      ps4: 8,
      ps5: 7,
      ps6: 6,
      ps7: 5,
      ps8: 4,
      ps9: 3,
      ps10: 2,
      ps11: 1

    }

    componentDidMount(){
      console.log(this.props.resultado, "primero")
      console.log(this.props.resultado[0], "segundo")
    }

    render() {

      return ( 
        <div className = 'container'>
        <Accordion defaultActiveKey="1">
        <Card border="primary" > 
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {this.props.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>            
            <RamoPrioridad ramo={this.props.resultado[0]} onChangeDOWN={this.onChange1_2}/>
            <RamoPrioridad ramo={this.props.resultado[1]} onChangeDOWN={this.onChange2_3} onChangeUP={this.onChange1_2} />
            <RamoPrioridad ramo={this.props.resultado[2]} onChangeDOWN={this.onChange3_4} onChangeUP={this.onChange2_3} />
            <RamoPrioridad ramo={this.props.resultado[3]} onChangeDOWN={this.onChange4_5} onChangeUP={this.onChange3_4} />
            <RamoPrioridad ramo={this.props.resultado[4]} onChangeDOWN={this.onChange5_6} onChangeUP={this.onChange4_5} />
            <RamoPrioridad ramo={this.props.resultado[5]} onChangeDOWN={this.onChange6_7} onChangeUP={this.onChange5_6} />
            <RamoPrioridad ramo={this.props.resultado[6]} onChangeDOWN={this.onChange7_8} onChangeUP={this.onChange6_7} />
            <RamoPrioridad ramo={this.props.resultado[7]} onChangeDOWN={this.onChange8_9} onChangeUP={this.onChange7_8} />
            <RamoPrioridad ramo={this.props.resultado[8]} onChangeDOWN={this.onChange9_10} onChangeUP={this.onChange8_9} />
            <RamoPrioridad ramo={this.props.resultado[9]} onChangeDOWN={this.onChange10_11} onChangeUP={this.onChange9_10} />
            <RamoPrioridad ramo={this.props.resultado[10]} onChangeUP={this.onChange10_11}/>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

        
      <br/>

      
      </div>
        ) 
      }

      onChange1_2 =(e) => {
        if(this.state.s2 !== null){
        this.setState(prevState =>({
            s1: this.state.s2,
            s2: this.state.s1
        }))
      }
      }
      onChange2_3 =(e) => {
        if(this.state.s3 !== null){
        this.setState(prevState =>({
            s2: this.state.s3,
            s3: this.state.s2
        }))
      }
      }
      onChange3_4 =(e) => {
        if(this.state.s4 !== null){
        this.setState(prevState =>({
            s3: this.state.s4,
            s4: this.state.s3
        }))
      }
      }
      onChange4_5 =(e) => {
        if(this.state.s5 !== null){
        this.setState(prevState =>({
            s4: this.state.s5,
            s5: this.state.s4
        }))
      }
      }
      onChange5_6 =(e) => {
        if(this.state.s6 !== null){
        this.setState(prevState =>({
            s5: this.state.s6,
            s6: this.state.s5
        }))
      }
      }
      onChange6_7 =(e) => {
        if(this.state.s7 !== null){
        this.setState(prevState =>({
            s6: this.state.s7,
            s7: this.state.s6
        }))
      }
      }
      onChange7_8 =(e) => {
        if(this.state.s8 !== null){
        this.setState(prevState =>({
            s7: this.state.s8,
            s8: this.state.s7
        }))
      }
      }
      onChange8_9 =(e) => {
        if(this.state.s9 !== null){
        this.setState(prevState =>({
            s8: this.state.s9,
            s9: this.state.s8
        }))
      }
      }
      onChange9_10 =(e) => {
        if(this.state.s10 !== null){
        this.setState(prevState =>({
            s9: this.state.s10,
            s10: this.state.s9
        }))
      }
      }
      onChange10_11 =(e) => {
        if(this.state.s11 !== null){
        this.setState(prevState =>({
            s10: this.state.s11,
            s11: this.state.s10
        }))
      }
      }
}
