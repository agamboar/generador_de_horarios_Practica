import React, { Component } from 'react'
import Navbar from './Navbar'
import AvanceManual2010 from './AvanceManual2010'



export default class AManual extends Component {

    state = {
        ramos_aprobados: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://200.14.84.238:80/asignaturasCursadas/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"), //cambiiar a localStorage
                'Content-Type': 'application/json'
            }
        };

        var ramos_aprobados= await axios(config)
        console.log(ramos_aprobados)

        this.setState({
            ramos: ramos_aprobados.data
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                
                <AvanceManual2010 ramos={this.state.ramos_aprobados}/>

                
                
            </div>
        )
    }
}
