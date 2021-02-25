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
                        &nbsp;&nbsp;° Inicio Temprano: {this.props.IT}
                        <br/>
                        &nbsp;&nbsp;° Termino Temprano: {this.props.TT}
                        <br/>
                        &nbsp;&nbsp;° Inicio Tardio: {this.props.IT2}
                        <br/>
                        &nbsp;&nbsp;° Termino Tardio: {this.props.TT2}
                        <br/>
                        &nbsp;&nbsp;° Holgura: {this.props.H}

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