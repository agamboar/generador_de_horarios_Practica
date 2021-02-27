import React, { Component } from 'react'



export default class Bloque extends Component {
    render() {
        return (
            <div className="col  col-md-6">
                        <ul>
                            <li>Ramo: {this.props.nombre} - Sección {this.props.seccion}</li>
                            <ul>
                                <li>Profesor: {this.props.profesor}</li>  
                               
                                <li>Catedras:</li>
                                <ul>
                                    <li>{this.props.horario}</li>
                                </ul>
                                <li>Ayudantia:</li>
                                <ul>
                                    <li>{this.props.ayudantia}</li>
                                </ul>
                            </ul>
                        </ul>
                        </div>   
        )
    }
}
