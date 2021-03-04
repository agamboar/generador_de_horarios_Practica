import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {


        
        console.log(this.props.horarios) //soluciones y adentro hay ramos tambien es un arreglo
        
        return this.props.horarios.map((solucion, index) => (solucion)? <Horario horario={solucion} index={index}/>:null)


    }
}

export default Horarios;
