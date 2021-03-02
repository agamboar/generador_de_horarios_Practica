import React, { Component } from 'react'
import Navbar from './Navbar'
import RamoCritico from './RamoCritico'





export default class PriorizarRamos extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ahora deberas elegir que ramos prefieres asignarles una mayor prioridad en tu horario
                </p>
                <br/>
                <br/>

                <RamoCritico name='0'/>
                <RamoCritico name='1'/>
                <RamoCritico name='2'/>
                <RamoCritico name='3'/>
                <RamoCritico name='4'/>
                <RamoCritico name='5'/>
                <RamoCritico name='6'/>
                <RamoCritico name='7'/>
                <RamoCritico name='8'/>
                <RamoCritico name='9'/>
                

                           


            </div>
        )
    }
}
