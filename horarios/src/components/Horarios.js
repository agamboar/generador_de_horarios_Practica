import React, { Component } from 'react'

import Horario from './Horario.js';
import { Redirect } from 'react-router';

class Horarios extends Component {

    render() {
        console.log(this.props.horarios  )
        if (this.props.horarios == "n"){
            setTimeout(function () { return( <Redirect to="/users/usr/crearHorario" />)}, 5000);
        }else{
            return this.props.horarios.map((solucion, index) => (solucion)? <Horario horario={solucion} key={index} index={index}/>:<div></div>)}
        
        

    }
}

export default Horarios;
