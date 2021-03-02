import React, { Component } from 'react'
import CrearUsuarioForm from './CrearUsuarioForm'

export default class Init extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div className="text-center">
                    <p className="title text-primary">Generador de Horarios</p>
                </div>
                
                <CrearUsuarioForm/>

                
            </div>
            
        )
    }
}
