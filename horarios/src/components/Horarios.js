import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {


        
        console.log(this.props.horarios)

        return setTimeout(() => { this.props.horarios.data.map(solucion => <Horario horario={solucion[0]} key={solucion} />); }, 1000);


    }
}

export default Horarios;
