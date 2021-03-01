import React, { Component } from 'react'

import RamoH from './RamoH.js';

 class RamosH extends Component {
    render () {
        return this.props.ramos.map(ramo => <RamoH ramo={ramo} key={ramo.cod_asignatura_real}/>);           
    } 
}

export default RamosH;
