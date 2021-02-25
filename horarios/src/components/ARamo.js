import React, { Component } from 'react'



export default class ARamo extends Component {

   
    render() {
        if(!this.props.show){
            return (
                <div className="col">
                        <button type="button" className="btn btn-outline-success custom btn-block text" onClick = {this.props.onChange1}>
                            <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                        </button>
                </div>    
            )
        }else{
            return (
                <div className="col"> 
                    
                        <button type="button" className="btn btn-success d-inline-block text-truncate custom btn-block" onClick = {this.props.onChange1}>
                            <h6 className="card-title"><font size="2">{"Aprobe"}</font></h6>
                            <p className="card-text"><font size="2">{this.props.codigo}</font></p> 
                        </button>
                    
                </div>    
            )
        }
        
    }
}
