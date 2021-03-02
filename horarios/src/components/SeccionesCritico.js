import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import Seccion from './Seccion'




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
      s12: null,
      s13: null,
      s14: null,
      s15: null,
      s16: null,
      s17: null,
      s18: null,
      s19: null,
      s20: null,
      ps1: 20,  
      ps2: 19,
      ps3: 18,
      ps4: 17,
      ps5: 16,
      ps6: 15,
      ps7: 14,
      ps8: 13,
      ps9: 12,
      ps10: 11,
      ps11: 10,
      ps12: 9,
      ps13: 8,
      ps14: 7,
      ps15: 6,
      ps16: 5,
      ps17: 4,
      ps18: 3,
      ps19: 2,
      ps20: 1
    }

    render() {

      return ( 
        <div className = 'container'>
        <Accordion defaultActiveKey="1">
        <Card border="primary" > 
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Ramo:  {this.props.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Seccion seccion={this.state.s1} onChangeDOWN={this.onChange1_2}/>
              <Seccion seccion={this.state.s2} onChangeDOWN={this.onChange2_3} onChangeUP={this.onChange1_2} />
              <Seccion seccion={this.state.s3} onChangeDOWN={this.onChange3_4} onChangeUP={this.onChange2_3} />
              <Seccion seccion={this.state.s4} onChangeDOWN={this.onChange4_5} onChangeUP={this.onChange3_4} />
              <Seccion seccion={this.state.s5} onChangeDOWN={this.onChange5_6} onChangeUP={this.onChange4_5} />
              <Seccion seccion={this.state.s6} onChangeDOWN={this.onChange6_7} onChangeUP={this.onChange5_6} />
              <Seccion seccion={this.state.s7} onChangeDOWN={this.onChange7_8} onChangeUP={this.onChange6_7} />
              <Seccion seccion={this.state.s8} onChangeDOWN={this.onChange8_9} onChangeUP={this.onChange7_8} />
              <Seccion seccion={this.state.s9} onChangeDOWN={this.onChange9_10} onChangeUP={this.onChange8_9} />
              <Seccion seccion={this.state.s10} onChangeDOWN={this.onChange10_11} onChangeUP={this.onChange9_10} />
              <Seccion seccion={this.state.s11} onChangeDOWN={this.onChange11_12} onChangeUP={this.onChange10_11}/>
              <Seccion seccion={this.state.s12} onChangeDOWN={this.onChange12_13} onChangeUP={this.onChange11_12} />
              <Seccion seccion={this.state.s13} onChangeDOWN={this.onChange13_14} onChangeUP={this.onChange12_13} />
              <Seccion seccion={this.state.s14} onChangeDOWN={this.onChange14_15} onChangeUP={this.onChange13_14} />
              <Seccion seccion={this.state.s15} onChangeDOWN={this.onChange15_16} onChangeUP={this.onChange14_15} />
              <Seccion seccion={this.state.s16} onChangeDOWN={this.onChange16_17} onChangeUP={this.onChange15_16} />
              <Seccion seccion={this.state.s17} onChangeDOWN={this.onChange17_18} onChangeUP={this.onChange16_17} />
              <Seccion seccion={this.state.s18} onChangeDOWN={this.onChange18_19} onChangeUP={this.onChange17_18} />
              <Seccion seccion={this.state.s19} onChangeDOWN={this.onChange19_20} onChangeUP={this.onChange18_19} />
              <Seccion seccion={this.state.s20}  onChangeUP={this.onChange19_20} />

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
      onChange11_12 =(e) => {
        if(this.state.s12 !== null){
        this.setState(prevState =>({
            s11: this.state.s12,
            s12: this.state.s11
        }))
      }
      }
      onChange12_13 =(e) => {
        if(this.state.s13 !== null){
        this.setState(prevState =>({
            s12: this.state.s13,
            s13: this.state.s12
        }))
      }
      }
      onChange13_14 =(e) => {
        if(this.state.s14 !== null){
        this.setState(prevState =>({
            s13: this.state.s14,
            s14: this.state.s13
        }))
      }
      }
      onChange14_15 =(e) => {
        if(this.state.s15 !== null){
        this.setState(prevState =>({
            s14: this.state.s15,
            s15: this.state.s14
        }))
      }
      }
      onChange15_16 =(e) => {
        if(this.state.s16 !== null){
        this.setState(prevState =>({
            s15: this.state.s16,
            s16: this.state.s15
        }))
      }
      }
      onChange16_17 =(e) => {
        if(this.state.s17 !== null){
        this.setState(prevState =>({
            s16: this.state.s17,
            s17: this.state.s16
        }))
      }
      }
      onChange17_18 =(e) => {
        if(this.state.s18 !== null){
        this.setState(prevState =>({
            s17: this.state.s18,
            s18: this.state.s17
        }))
      }
      }
      onChange18_19 =(e) => {
        if(this.state.s19 !== null){
        this.setState(prevState =>({
            s18: this.state.s19,
            s19: this.state.s18
        }))
      }
      }
      onChange19_20 =(e) => {
        if(this.state.s20 !== null){
        this.setState(prevState =>({
            s19: this.state.s20,
            s20: this.state.s19
        }))
      }    
    }  
}
