import React, { Component } from 'react'



export default class Ramo extends Component {
    render() {
        return (

            
            <div className="col" >  
                <div className="card border-primary text-center" style={{background: this.props.color}} id='bordes' >                  
                    <h6 className="card-title"><font size="2">{this.props.codigo}</font></h6>
                    <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                </div>
            </div>    
        )
    }
}
/*
    style={{background: '#81C53D'}}
    Amarillo    <div className="card border-primary text-center bg-warning" >
    Azul        <div className="card border-primary text-center bg-info" >  


*/