import React, { Component } from 'react'

import RamoH from './RamoH.js';

 class RamosH extends Component {
    render () {
        if (this.props.ramos){
        return this.props.ramos.map(ramo => <RamoH ramo={ramo} key={ramo.cod_asignatura_real}/>);}
        else{
            return(
                <div></div>
            )
        }      
    } 
}

export default RamosH;
