import React, { Component } from 'react'
import Navbar from './Navbar'
import RamoCritico from './RamoCritico'
import NotAuth from './NotAuth'
import axios from 'axios';




export default class PriorizarRamos extends Component {

    state = {
        ramos: null,
        critico: [null, null, null, null, null, null, null, null, null, null, null],
        p0: [],
        p1: [],
        p2: [],
        p3: [],
        p4: [],
        p5: [],
        p6: [],
        p7: [],
        p8: [],
        p9: []
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://200.14.84.238:80/PERT/',
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
            if (this.state.ramos[mov].critico === true) {
                for (let j=0 ; j < this.state.critico.length; j++){
                    const mov2= j;
                    if (this.state.critico[mov2]===null){
                        this.state.critico[mov2]= this.state.ramos[mov];
                        break;
                    }
                }
            } else {
                if (this.state.ramos[mov].holgura === 0) {
                    this.setState({
                        p0: [...this.state.p0, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 1) {
                    this.setState({
                        p1: [...this.state.p1, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 2) {
                    this.setState({
                        p2: [...this.state.p2, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 3) {
                    this.setState({
                        p3: [...this.state.p3, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 4) {
                    this.setState({
                        p4: [...this.state.p4, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 5) {
                    this.setState({
                        p5: [...this.state.p5, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 6) {
                    this.setState({
                        p6: [...this.state.p6, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 7) {
                    this.setState({
                        p7: [...this.state.p7, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 8) {
                    this.setState({
                        p8: [...this.state.p8, this.state.ramos[mov]]
                    })
                }
                if (this.state.ramos[mov].holgura === 9) {
                    this.setState({
                        p9: [...this.state.p9, this.state.ramos[mov]]
                    })
                }
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();


    }

    render() {
        return (
            <div>
                {(localStorage.getItem("token")) ?
                    <div>
                        <Navbar />

                        <br />
                        <br />


                        <p class="lead">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Ahora deberas elegir que ramos prefieres asignarles una mayor prioridad en tu horario
                </p>
                        <br />
                        <br />
                        <RamoCritico name='Críticos' resultado={this.state.critico} />
                        <RamoCritico name='Prioridad 0' resultado={this.state.p0} />
                        <RamoCritico name='Prioridad 1' resultado={this.state.p1} />
                        <RamoCritico name='Prioridad 2' resultado={this.state.p2} />
                        <RamoCritico name='Prioridad 3' resultado={this.state.p3} />
                        <RamoCritico name='Prioridad 4' resultado={this.state.p4} />
                        <RamoCritico name='Prioridad 5' resultado={this.state.p5} />
                        <RamoCritico name='Prioridad 6' resultado={this.state.p6} />
                        <RamoCritico name='Prioridad 7' resultado={this.state.p7} />
                        <RamoCritico name='Prioridad 8' resultado={this.state.p8} />
                        <RamoCritico name='Prioridad 9' resultado={this.state.p9} />

                        <form onSubmit={this.onSubmit}>
                            <div className="container">
                                <div className=" align-self-end">
                                    <button type="submit" className="btn btn-primary rounded-pill"> Guardar Prioridades</button>
                                </div>
                            </div>
                        </form>

                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                    : <NotAuth />}
            </div>
        )
    }
}
