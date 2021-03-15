import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {
        console.log(this.props.horarios  )
        if (this.props.horarios == "n"){
            return null
        }else{
            return this.props.horarios.map((solucion, index) => (solucion)? <Horario horario={solucion} key={index} index={index}/>:null)}
        
        

    }
}

export default Horarios;
