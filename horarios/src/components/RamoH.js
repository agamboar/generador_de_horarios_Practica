import React, { Component } from 'react'



export default class Bloque extends Component {
    
    render() {
        return (
            <div className="col  col-md-6">
                        <ul>
                            <li>Ramo: {this.props.ramo.nombre} </li>
                            <ul>
                                <li>Sección {this.props.ramo.nro_seccion}</li>  
                                <li>Profesor: {this.props.ramo.eventos[0].profesor}</li>  
                               
                                <li>Modulos:</li>
                                <ul>  {this.props.ramo.horario} </ul>
                                
                                <br/>
                            </ul>
                        </ul>
                        </div>   
        )
    }
}
