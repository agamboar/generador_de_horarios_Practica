import React, { Component } from 'react'

import Horario from './Horario.js';
import { Redirect } from 'react-router';

class Horarios extends Component {

    render() {
        console.log(this.props.horarios  )
        if (this.props.horarios == "n"){
            setTimeout(function () { return( <Redirect to="/users/usr/PERT" />)}, 5000);
        }else if  (this.props.horarios !=null) {
            console.log(this.props.horarios)
            return this.props.horarios.map((solucion, index) => (solucion)? <Horario horario={solucion} key={index} index={index}/>:<div></div>)
        }else{
            return <div></div>
        }

        
        

    }
}

export default Horarios;
