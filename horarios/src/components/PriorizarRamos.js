import React, { Component } from 'react'
import Navbar from './Navbar'
import RamoCritico from './RamoCritico'
import NotAuth from './NotAuth'
import axios from 'axios';




export default class PriorizarRamos extends Component {

    state ={
        ramos: null,
        p: [10],
        p1:null,
        p2:null,
        p3:null,
        p4:null,
        p5:null,
        p6:null,
        p7:null,
        p8:null,
        p9:null,
        p10:null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://200.14.84.238:443/PERT/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"), //cambiar a localStorage
                'Content-Type': 'application/json'
            }
        };

        var PERT_j = await axios(config)

        console.log(PERT_j)
        this.setState({
            ramos: PERT_j.data.PERT
        })
        console.log(this.state.p)
        console.log(this.state.ramos)

        
    }

    onSubmit = e => {
        e.preventDefault();
     

    }

    render() {
        return (
            <div>
            {(localStorage.getItem("token"))?  
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ahora deberas elegir que ramos prefieres asignarles una mayor prioridad en tu horario
                </p>
                <br/>
                <br/>
                {/* en ramo critico se filtrara por prioridad  */}
                <RamoCritico name='1' resultado = {this.state.p1} ramos = {this.state.ramos}/>
                <RamoCritico name='2' resultado = {this.state.p2} ramos = {this.state.ramos}/>
                <RamoCritico name='3' resultado = {this.state.p3} ramos = {this.state.ramos}/>
                <RamoCritico name='4' resultado = {this.state.p4} ramos = {this.state.ramos}/>
                <RamoCritico name='5' resultado = {this.state.p5} ramos = {this.state.ramos}/>
                <RamoCritico name='6' resultado = {this.state.p6} ramos = {this.state.ramos}/>
                <RamoCritico name='7' resultado = {this.state.p7} ramos = {this.state.ramos}/>
                <RamoCritico name='8' resultado = {this.state.p8} ramos = {this.state.ramos}/>
                <RamoCritico name='9' resultado = {this.state.p9} ramos = {this.state.ramos}/>
                <RamoCritico name='10' resultado = {this.state.p10} ramos = {this.state.ramos}/>
                
                <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className=" align-self-end">
                        <button type="submit" className="btn btn-primary rounded-pill"> Guardar Prioridades</button>
                    </div>
                </div>
                </form>
                           
                <br/>
                <br/> 
                <br/>
                <br/>

            </div>
            : <NotAuth />}
            </div>
        )
    }
}
