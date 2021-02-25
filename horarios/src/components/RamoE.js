import React, { Component } from 'react'



export default class RamoE extends Component {
    render() {
        return (

            
            <div className="col">  
                <div className="card border-primary" style={{background: this.props.color}}>                  
                    <h6 className="card-title text-center"><font size="2">{this.props.codigo}</font></h6>
                    <p className="card-text"><font size="2">
                        &nbsp;&nbsp;° Nombre: {this.props.ramo}
                        <br/>
                        &nbsp;&nbsp;° Número: {this.props.numero}
                        <br/>
                        &nbsp;&nbsp;° Creditos: {this.props.creditos}
                        <br/>
                        &nbsp;&nbsp;° Pre-Requisitos: {this.props.prerequisitos}
                        <br/>
                        &nbsp;&nbsp;° Formación: {this.props.formacion}

                    </font></p> 
                </div>
            </div>    
        )
    }
}
/*
    Verde       <div className="card border-primary text-center bg-success" >                  
    Amarillo    <div className="card border-primary text-center bg-warning" >
    Azul        <div className="card border-primary text-center bg-info" >  


*/