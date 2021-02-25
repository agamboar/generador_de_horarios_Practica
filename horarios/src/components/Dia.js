import React, { Component } from 'react'



export default class Dia extends Component {
    render() {
        return (
            <div className="col text-center col-md-2">
                <div className="badge bg-primary text-wrap badge " style={{ color: '#FFF' }} >
                   <h5> {this.props.dia} </h5>
                </div>
            </div>  
        )
    }
}