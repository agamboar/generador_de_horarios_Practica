import React, { Component } from 'react'
import Navbar from './Navbar'
import Horario from './Horario'




export default class HPosibles extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                </p>
                <br/>
                <br/>
                <Horario/>  
                <br/>
                <br/>
                <Horario/>  

                <br/>
                <br/>
                


            </div>
        )
    }
}
