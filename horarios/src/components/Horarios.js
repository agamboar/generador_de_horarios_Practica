import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {


        
        console.log(this.props.horarios)
        // otro map ??
        return setTimeout(() => { this.props.horarios.data.map(solucion => <Horario horario={solucion} key={solucion} />); }, 1000);


    }
}

export default Horarios;
