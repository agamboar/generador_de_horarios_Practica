import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import RamoPrioridad from './RamoPrioridad'

/*

*/
export default class RamoCritico extends Component {



    render() {

      if(this.props.resultado[0]===null){
        return (<div/>)
      }else{
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
            <RamoPrioridad ramo={this.props.resultado[0]}  onChangeDOWN={this.props.onChange0_1}/>
            <RamoPrioridad ramo={this.props.resultado[1]}  onChangeDOWN={this.props.onChange1_2} onChangeUP={this.props.onChange0_1} />
            <RamoPrioridad ramo={this.props.resultado[2]}  onChangeDOWN={this.props.onChange2_3} onChangeUP={this.props.onChange1_2} />
            <RamoPrioridad ramo={this.props.resultado[3]}  onChangeDOWN={this.props.onChange3_4} onChangeUP={this.props.onChange2_3} />
            <RamoPrioridad ramo={this.props.resultado[4]}  onChangeDOWN={this.props.onChange4_5} onChangeUP={this.props.onChange3_4} />
            <RamoPrioridad ramo={this.props.resultado[5]}  onChangeDOWN={this.props.onChange5_6} onChangeUP={this.props.onChange4_5} />
            <RamoPrioridad ramo={this.props.resultado[6]}  onChangeDOWN={this.props.onChange6_7} onChangeUP={this.props.onChange5_6} />
            <RamoPrioridad ramo={this.props.resultado[7]}  onChangeDOWN={this.props.onChange7_8} onChangeUP={this.props.onChange6_7} />
            <RamoPrioridad ramo={this.props.resultado[8]}  onChangeDOWN={this.props.onChange8_9} onChangeUP={this.props.onChange7_8} />
            <RamoPrioridad ramo={this.props.resultado[9]}  onChangeDOWN={this.props.onChange9_10} onChangeUP={this.props.onChange8_9} />
            <RamoPrioridad ramo={this.props.resultado[10]} onChangeUP={this.props.onChange9_10}/>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

        
      <br/>

      
      </div>
        ) 
      }
      }

}
