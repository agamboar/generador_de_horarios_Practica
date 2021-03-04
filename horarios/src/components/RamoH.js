import React, { Component } from 'react'



export default class Bloque extends Component {
    
    render() {
        return (
            <div className="col  col-md-6">
                        <ul>
                            <li>Ramo: {this.props.ramo.nombre} - Sección {this.props.ramo.nro_seccion}</li>
                            <ul>
                                <li>Profesor: {this.props.ramo.eventos[0].profesor}</li>  
                               
                                <li>Catedras:</li>
                                <ul> 
                                    {this.props.ramos.eventos.map(modulos => 
                                        <li>{modulos.bloque}</li>
                                        )}
                                    
                                </ul>
                                {/*<li>Ayudantia:</li>
                                <ul>
                                    <li>{this.props.ayudantia}</li>
                                </ul>*/}
                            </ul>
                        </ul>
                        </div>   
        )
    }
}
