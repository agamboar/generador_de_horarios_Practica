import React, { Component } from 'react'
import Derechos from './Derechos'
import Login from './Login'
import logo from './logo.png'

export default class Init extends Component {
    render() {
        return (
            <div>
                <br/>
                <div class="text-center">
                    <img src={logo} class="rounded" alt="logo"></img>     
                </div>
                <br/>
                <div className="text-center">
                    <p className="title text-primary">Generador de Horarios</p>
                </div>
                
                <Login/>

                <Derechos/>    
            </div>
            
        )
    }
}
