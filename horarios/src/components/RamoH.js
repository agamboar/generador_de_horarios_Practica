import React, { Component } from 'react'



export default class Bloque extends Component {
    
    render() {
        return (
            <div className="col  col-md-6">
                    {this.props.ramos.map(elem=>
                        <ul>
                            <li>Ramo: {elem.nombre} - Sección {elem.nro_seccion}</li>
                            <ul>
                                <li>Profesor: {elem.eventos[0].profesor}</li>  
                               
                                <li>Catedras:</li>
                                <ul>
                                    <li>{elem.horario}</li>
                                </ul>
                                <li>Ayudantia:</li>
                                <ul>
                                    <li>{elem.ayudantia}</li>
                                </ul>
                            </ul>
                        </ul>
                    )}
                    </div>   
        )
    }
}
