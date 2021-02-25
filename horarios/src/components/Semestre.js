import React, { Component } from 'react'



export default class Semestre extends Component {
    render() {
        return (
            <div className="col text-center">
                <div className="badge bg-primary text-wrap " style={{ color: '#FFF' }} >
                    Semestre {this.props.semestre}
                </div>
            </div>  
        )
    }
}