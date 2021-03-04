import React, { Component } from 'react'



export default class RamoE extends Component {
    render() {
        if(this.props.state[0]===null){
        return (
            <div>
            </div>    
        )
        }else{
            return (
                <div className="col">  
                    <div className="card border-primary">                  
                        <h6 className="card-title text-center"><font size="2">{this.props.codigo}</font></h6>
                        <p className="card-text"><font size="2">
                            &nbsp;&nbsp;° Nombre: {this.props.ramo}
                            <br/>
                            &nbsp;&nbsp;° Inicio Temprano: {this.props.state[0]}
                            <br/>
                            &nbsp;&nbsp;° Termino Temprano: {this.props.state[1]}
                            <br/>
                            &nbsp;&nbsp;° Inicio Tardio: {this.props.state[2]}
                            <br/>
                            &nbsp;&nbsp;° Termino Tardio: {this.props.state[3]}
                            <br/>
                            &nbsp;&nbsp;° Holgura: {this.props.state[4]}
    
                        </font></p> 
                    </div>
                </div>    
            )

        }
    }
}
/*
    Verde       <div className="card border-primary text-center bg-success" >                  
    Amarillo    <div className="card border-primary text-center bg-warning" >
    Azul        <div className="card border-primary text-center bg-info" >  


*/