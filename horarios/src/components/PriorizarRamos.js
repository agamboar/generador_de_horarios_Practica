import React, { Component } from 'react'
import Navbar from './Navbar'
import RamoCritico from './RamoCritico'
import NotAuth from './NotAuth'
import axios from 'axios';




export default class PriorizarRamos extends Component {

    state = {
        ramos: null,
        critico: [null, null, null, null, null, null, null, null, null, null, null], 
        p0: [null, null, null, null, null, null, null, null, null, null, null],
        p1: [null, null, null, null, null, null, null, null, null, null, null],
        p2: [null, null, null, null, null, null, null, null, null, null, null],
        p3: [null, null, null, null, null, null, null, null, null, null, null],
        p4: [null, null, null, null, null, null, null, null, null, null, null],
        p5: [null, null, null, null, null, null, null, null, null, null, null],
        p6: [null, null, null, null, null, null, null, null, null, null, null],
        p7: [null, null, null, null, null, null, null, null, null, null, null],
        p8: [null, null, null, null, null, null, null, null, null, null, null],
        p9: [null, null, null, null, null, null, null, null, null, null, null]
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
                    for (let j=0 ; j < this.state.p0.length; j++){
                        const mov2= j;
                        if (this.state.p0[mov2]===null){
                            this.state.p0[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 1) {
                    for (let j=0 ; j < this.state.p1.length; j++){
                        const mov2= j;
                        if (this.state.p1[mov2]===null){
                            this.state.p1[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 2) {
                    for (let j=0 ; j < this.state.p2.length; j++){
                        const mov2= j;
                        if (this.state.p2[mov2]===null){
                            this.state.p2[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 3) {
                    for (let j=0 ; j < this.state.p3.length; j++){
                        const mov2= j;
                        if (this.state.p3[mov2]===null){
                            this.state.p3[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 4) {
                    for (let j=0 ; j < this.state.p4.length; j++){
                        const mov2= j;
                        if (this.state.p4[mov2]===null){
                            this.state.p4[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 5) {
                    for (let j=0 ; j < this.state.p5.length; j++){
                        const mov2= j;
                        if (this.state.p5[mov2]===null){
                            this.state.p5[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 6) {
                    for (let j=0 ; j < this.state.p6.length; j++){
                        const mov2= j;
                        if (this.state.p6[mov2]===null){
                            this.state.p6[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 7) {
                    for (let j=0 ; j < this.state.p7.length; j++){
                        const mov2= j;
                        if (this.state.p7[mov2]===null){
                            this.state.p7[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 8) {
                    for (let j=0 ; j < this.state.p8.length; j++){
                        const mov2= j;
                        if (this.state.p8[mov2]===null){
                            this.state.p8[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
                if (this.state.ramos[mov].holgura === 9) {
                    for (let j=0 ; j < this.state.p9.length; j++){
                        const mov2= j;
                        if (this.state.p9[mov2]===null){
                            this.state.p9[mov2]= this.state.ramos[mov];
                            break;
                        }
                    }
                }
            }
        }
        console.log(this.state.critico)
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
                        <RamoCritico name='Críticos' resultado={this.state.critico[0]} />
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
