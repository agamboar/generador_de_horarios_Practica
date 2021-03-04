import React, { Component } from 'react'
import Navbar from './Navbar'
import RamoCritico from './RamoCritico'
import NotAuth from './NotAuth'
import axios from 'axios';




export default class PriorizarRamos extends Component {

    state ={
        ramos: null,
        p: [null,null,null,null,null,null,null,null,null,null],
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
        for (let i = 0; i < this.state.ramos.length; i++) {
            const mov = i;
            this.setState({
                p,[this.state.ramos[mov].holgura]: [...this.state.p[this.state.ramos[mov].holgura],this.state.ramos[mov]]
            })            
        }

        
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
                <RamoCritico name='0' resultado = {this.state.p[0]} ramos = {this.state.ramos}/>
                <RamoCritico name='1' resultado = {this.state.p[1]} ramos = {this.state.ramos}/>
                <RamoCritico name='2' resultado = {this.state.p[2]} ramos = {this.state.ramos}/>
                <RamoCritico name='3' resultado = {this.state.p[3]} ramos = {this.state.ramos}/>
                <RamoCritico name='4' resultado = {this.state.p[4]} ramos = {this.state.ramos}/>
                <RamoCritico name='5' resultado = {this.state.p[5]} ramos = {this.state.ramos}/>
                <RamoCritico name='6' resultado = {this.state.p[6]} ramos = {this.state.ramos}/>
                <RamoCritico name='7' resultado = {this.state.p[7]} ramos = {this.state.ramos}/>
                <RamoCritico name='8' resultado = {this.state.p[8]} ramos = {this.state.ramos}/>
                <RamoCritico name='9' resultado = {this.state.p[9]} ramos = {this.state.ramos}/>
                
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
