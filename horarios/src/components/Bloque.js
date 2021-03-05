import React, { Component } from 'react'



export default class Bloque extends Component {
    render() {
        this.forceUpdate();
        console.log(this.props)
        if(this.props.ramo === null){
        return (
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
                    <h6 className="card-text d-inline-block text-truncate" ><font size="2">&nbsp;    </font></h6> 
                    <p className="card-texts"><font size="2">&nbsp;  Sección    </font></p> 
                </div>
            </div>    
        )
        }
    }
}
/*
    style={{background: '#81C53D'}}


*/