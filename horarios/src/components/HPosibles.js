import React, { Component } from 'react'
import Navbar from './Navbar'
import Horarios from './Horarios'
import Horario from './Horario'
import axios from 'axios';
import NotAuth from './NotAuth'

export default class HPosibles extends Component {

    state = {
        Horarios: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://200.14.84.238:443/clique',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        };

        var horarios_posibles = await axios(config)

        this.setState({
            Horarios: horarios_posibles.data
        })

    }

    render() {
        if (localStorage.getItem("token")) {
            if (this.state.Horarios === null) {
                return (
                    <div>
                        <Navbar />

                        <br />
                        <br />


                        <p className="lead">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                    </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="d-flex justify-content-center">
                            <h1 class="display-6">Un Momento, Se esta calculando tús horarios</h1>
                        </div>
                        <br />
                        <br />
                        <div class="d-flex justify-content-center">

                            <div class="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-border text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                        <br />
                        <br />
                        <br />




                    </div>
                )

            } else {


                return (
                    <div>
                        <Navbar />

                        <br />
                        <br />


                        <p className="lead">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                </p>
                        <br />
                        <br />

                        <Horarios horarios={this.state.Horarios} />

                        <br />

                        <br />





                    </div>
                )
            }
        } else {
            return (<NotAuth />)
        }
    }
}
