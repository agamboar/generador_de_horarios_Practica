import React, { Component } from 'react'
import NotAuth from './NotAuth'
import PriorizarSecciones2010 from "./PriorizarSecciones2010"
import PriorizarSecciones2018 from "./PriorizarSecciones2018"
import PriorizarSecciones2020 from "./PriorizarSecciones2020"




export default class PriorizarSecciones extends Component {

    state ={
        ramos : null,
        malla : 2010

    }

    render() {
        if (localStorage.getItem("token")){
            if (this.state.malla === 2010) {
                return (                    
                    
                    <PriorizarSecciones2010 ramos = {this.state.ramos}/>                           
                
                )
            }else if (this.state.malla === 2018) {
                return (                    
                    
                    <PriorizarSecciones2018 ramos = {this.state.ramos}/>                           
                
                )
            }else{
                return (                    
                    
                    <PriorizarSecciones2020 ramos = {this.state.ramos}/>                           
                
                )
            }
        }else{
            return (<NotAuth />)
        }
    }
}
