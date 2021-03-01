import React, { Component } from 'react'



export default class Bloque extends Component {
<<<<<<< HEAD
    
=======
>>>>>>> 5e41abe50b223e19f5f108918e4f1a6e88bb41ba
    render() {
        return (
            <div className="col  col-md-6">
                        <ul>
<<<<<<< HEAD
                            <li>Ramo: {this.props.ramo.nombre} - Sección {this.props.ramo.nro_seccion}</li>
                            <ul>
                                <li>Profesor: {this.props.ramo.eventos[0].profesor}</li>  
=======
                            <li>Ramo: {this.props.nombre} - Sección {this.props.seccion}</li>
                            <ul>
                                <li>Profesor: {this.props.profesor}</li>  
>>>>>>> 5e41abe50b223e19f5f108918e4f1a6e88bb41ba
                               
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
