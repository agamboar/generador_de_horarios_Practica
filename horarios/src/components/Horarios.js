import React, { Component } from 'react'

import Horario from './Horario.js';
import { Redirect } from 'react-router';

class Horarios extends Component {

    render() {
        console.log(this.props.horarios  )
        if (this.props.horarios == "n"){
            return(<Redirect to="/users/usr/crearHorario" />)
        }else{
            return this.props.horarios.map((solucion, index) => (solucion)? <Horario horario={solucion} key={index} index={index}/>:null)}
        
        

    }
}

export default Horarios;
