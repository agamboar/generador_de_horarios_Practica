import React, { Component } from 'react'



export default class Bloque extends Component {
    
    render() {
        return (
            <div className="col  col-md-6">
                        <ul>
                            <li>Ramo: {this.props.ramo.nombre} - Sección {this.props.ramo.nro_seccion}</li>
                            <ul>
                                <li>Profesor: {this.props.ramo.eventos[0].profesor}</li>  
                               
                                <li>Modulos:</li>
                                <ul>  {this.props.ramo.horario} </ul>
                                <br/>
                                <br/>
                            </ul>
                        </ul>
                        </div>   
        )
    }
}
