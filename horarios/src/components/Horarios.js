import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {

        
        return this.props.horarios.map((solucion, index) => (solucion)? <Horario horario={solucion} key={index} index={index}/>:null)


    }
}

export default Horarios;
