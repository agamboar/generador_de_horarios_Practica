import React, { Component } from 'react'
import Derechos from './Derechos'
import Navbar from './Navbar'


export default class UserInterface extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>  
                        <h1 className="title text-primary">BIENVENIDO/A AL GENERADOR DE HORARIOS</h1>
                        <br/>
                        <p className="lead">Que tengas una buena toma de ramos!!!</p>
                    </div>
                </div>
                

                <Derechos/>
            </div>
        )
    }
}
