import React, { Component } from 'react'
import Navbar from './Navbar'
import SeccionesCritico from './SeccionesCritico'





export default class PriorizarSecciones extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ahora deberas elegir que secciónes prefieres asignarles una mayor prioridad en tu horario
                </p>
                <br/>
                <br/>

                <SeccionesCritico />
                

                           


            </div>
        )
    }
}
