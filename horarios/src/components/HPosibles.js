import React, { Component } from 'react'
import Navbar from './Navbar'
import Horarios from './Horarios'
import Horarios2 from './Horarios.json'




export default class HPosibles extends Component {

    state = {
        Horarios: Horarios2
    }

    render() {
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p className="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                </p>
                <br/>
                <br/>
                <Horarios horarios = {this.state.Horarios}/>
                <br/>

                <br/>
                

                


            </div>
        )
    }
}
