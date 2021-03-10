import React, { Component } from 'react'
import Derechos from './Derechos'
import Login from './Login'

export default class Init extends Component {
    render() {
        return (
            <div>
                <br/>
                <img src="./logo" class="rounded"></img> 
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
