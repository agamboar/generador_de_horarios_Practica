import React, { Component } from 'react'



export default class Bloque extends Component {
    render() {
        return (

            
            <div className="col col-md-2" >  
                <div className="card border-primary text-center" style={{background: this.props.color}}>      
                    <h6 className="card-text d-inline-block text-truncate" ><font size="2">&nbsp;{this.props.ramo}</font></h6> 
                    <p className="card-texts"><font size="2">&nbsp;{this.props.seccion}</font></p> 
                </div>
            </div>    
        )
    }
}
/*
    style={{background: '#81C53D'}}


*/