import React, { Component } from 'react'



export default class RamoE extends Component {

    render() {
        console.log(this.props)
        if (this.props.staff === true) {
            return (
                <div className = "card border-primary shadow-lg p-3 mb-5 bg-white"> 
                    Nombre Usuario: ejemplo 
                    <br/>
                    Usuario Staff: true
                    <button type="button" class="btn btn-danger"  > Eliminar de Staff</button>
                </div>
            )

        }else if(this.props.staff===false){

            return (
                <div className = "card border-primary shadow-lg p-3 mb-5 bg-white"> 
                    Nombre Usuario: ejemplo 
                    <br/>
                    Usuario Staff: false
                    <button type="button" class="btn btn-success"  > Agregarlo a Staff</button>
                </div>
            )
        }else{
            return (
                <div/>
            )
        }
    }
}
