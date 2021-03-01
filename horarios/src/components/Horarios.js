import React, { Component } from 'react'

import Horario from './Horario.js';

 class Horarios extends Component {
    render () {
        return this.props.horarios.map(horario => <Horario horario={horario} key={horario.id}/>);           
    } 
}

export default Horarios;
