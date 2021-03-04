import React, { Component } from 'react'



export default class Ramo extends Component {
    render() {
        console.log(this.props)
        if(this.props.state[0]===true){
        return (
            <div className="col" >  
                <div className="card border-primary text-center custom" style={{background: '#FF3E17' }}  >                  
                    <h6 className="card-title"><font size="2">{this.props.codigo}</font></h6>
                    <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                </div>
            </div>    
        )}else if(this.props.state[0]===false){
            if (this.props.state[1]===1){
            return (
                <div className="col" >  
                    <div className="card border-primary text-center custom" style={{background: '#FFED56' }} >                  
                        <h6 className="card-title"><font size="2">{this.props.codigo}</font></h6>
                        <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                    </div>
                </div>    
            )
            }else{
                return (
                    <div className="col" >  
                        <div className="card border-primary text-center custom"   >                  
                            <h6 className="card-title"><font size="2">{this.props.codigo}</font></h6>
                            <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                        </div>
                    </div>    
                )
            }

         }else{
                return (
                    <div className="col" >  
                        <div className="card border-primary text-center custom" style={{background: '#28B463' }} >                  
                            <h6 className="card-title"><font size="2">{this.props.codigo}</font></h6>
                            <p className="card-text"><font size="2">{this.props.ramo}</font></p> 
                        </div>
                    </div>    
                )  
            } 
        }
    }

/*
     verde #28B463     rojo #FF3E17      
     
*/
