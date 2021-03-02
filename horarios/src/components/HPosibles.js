import React, { Component } from 'react'
import Navbar from './Navbar'
import Horarios from './Horarios'
import Horario from './Horario'
import axios from 'axios';

export default class HPosibles extends Component {

    state = {
        Horarios: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://127.0.0.1:443/clique',
            headers: {
                'Authorization': 'Token 372daae409f639993f9cf376f2058914dcd07a9c',
                'Content-Type': 'application/json'
            }
        };

        var horarios_posibles = await axios(config)

        this.setState({
            Horarios: horarios_posibles.data
        })

    }

    render() {
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
                    <Horario />
                    <br />

                    <br />





                </div>
            )
        }
    }
}
