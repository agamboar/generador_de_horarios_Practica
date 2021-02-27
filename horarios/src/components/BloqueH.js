import React, { Component } from 'react'



export default class BloqueH extends Component {
    render() {
        return (

            
            <div className="col mt-1" >                  
                
                <h6 className="card-title"><font size="2">Bloque {this.props.bloque}</font></h6>
                <p className="card-texts"><font size="2">{this.props.hora}</font></p> 
            </div>    
        )
    }
}
/*
    style={{background: '#81C53D'}}


*/