import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {


        
        console.log(this.props.horarios) //soluciones y adentro hay ramos tambien es un arreglo
        
        return setTimeout(() => { this.props.horarios.map((solucion, index) => <Horario horario={solucion} index={index} />); }, 1000);


    }
}

export default Horarios;
