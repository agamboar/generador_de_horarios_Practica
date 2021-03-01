import React, { Component } from 'react'



export default class Bloque extends Component {
    render() {
        if(this.props.ramo === null){
        return (
<<<<<<< HEAD
            <div className="col col-md-2">  
                <div className="card border-primary text-center" >      
                    <h6 className="card-text d-inline-block text-truncate" ><font size="2">&nbsp;</font></h6> 
                    <p className="card-texts"><font size="2">&nbsp;</font></p> 
                </div>
            </div>    
        )
        }else{

        return (
            <div className="col col-md-2">  
                <div className="card border-primary text-center" style={{background: '#48DAFF'}} >      
                    <h6 className="card-text d-inline-block text-truncate" ><font size="2">&nbsp;{this.props.ramo.nombre}</font></h6> 
                    <p className="card-texts"><font size="2">&nbsp;  Sección {this.props.ramo.nro_seccion} </font></p> 
=======
            <div className="col col-md-2" >  
                <div className="card border-primary text-center" style={{background: this.props.color}}>      
                    <h6 className="card-text d-inline-block text-truncate" ><font size="2">&nbsp;{this.props.ramo}</font></h6> 
                    <p className="card-texts"><font size="2">&nbsp;{this.props.seccion}</font></p> 
>>>>>>> 5e41abe50b223e19f5f108918e4f1a6e88bb41ba
                </div>
            </div>    
        )
        }
    }
}
/*
    style={{background: '#81C53D'}}


*/