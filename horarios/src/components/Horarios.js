import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {


        
        console.log(this.props.horarios)
        this.props.horarios.map((solucion, index) => console.log(solucion,index));
        return <div> asdsa </div>
        // otro map ??
        //return setTimeout(() => { this.props.horarios.map((solucion, index) => <Horario horario={solucion} key={index} />); }, 1000);


    }
}

export default Horarios;
