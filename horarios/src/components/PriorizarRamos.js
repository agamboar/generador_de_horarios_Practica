import React, { Component } from 'react'
import Navbar from './Navbar'
import PrioridadRamo from './PrioridadRamo'





export default class AsignaturasCriticas extends Component {
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

                <PrioridadRamo num = '0' />

                <PrioridadRamo num = '1' />
                <PrioridadRamo num = '2' />
                <PrioridadRamo num = '3' />
                <PrioridadRamo num = '4' />
                <PrioridadRamo num = '5' />
                

                           


            </div>
        )
    }
}
