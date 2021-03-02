import React, { Component } from 'react'
import Navbar from './Navbar'
import PERTMalla2010 from './PERTMalla2010'
import PERTMalla2018 from './PERTMalla2018'
import PERTMalla2020 from './PERTMalla2020'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class PERT extends Component {

    state = {
        malla: null,
        ramos: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://200.14.84.238/PERT/',
            headers: {
                'Authorization': 'Token 372daae409f639993f9cf376f2058914dcd07a9c',
                'Content-Type': 'application/json'
            }
        };

        PERT_j = axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            malla: PERT_j.data.malla,
            ramos: PERT_j.data.PERT
        })
    }

    render() {
        if (this.state.malla === 2010) {
            return (
                <div>
                    <Navbar />
                    <br />
                    <div className="row row-cols-3">
                        <div className="col">
                            <h1 className="title text-primary text-center">PERT</h1>
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <br />
                            <div className="align-self-center">
                                <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                    <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }} style={{ color: '#FFF' }} >
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <font size="3">Generar Horarios</font>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <PERTMalla2010 ramos={this.state.ramos} />
                    <br />

                </div>
            )
        } else if (this.state.malla === 2018) {
            return (
                <div>
                    <Navbar />
                    <br />
                    <div className="row row-cols-3">
                        <div className="col">
                            <h1 className="title text-primary text-center">PERT</h1>
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <br />
                            <div className="align-self-center">
                                <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                    <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }} style={{ color: '#FFF' }} >
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Generar Horarios</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <PERTMalla2018 ramos={this.state.ramos} />
                    <br />

                </div>
            )
        } else if (this.state.malla === 2018) {
            return (
                <div>
                    <Navbar />
                    <br />
                    <div className="row row-cols-3">
                        <div className="col">
                            <h1 className="title text-primary text-center">PERT</h1>
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <br />
                            <div className="align-self-center">
                                <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                    <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }} style={{ color: '#FFF' }} >
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Generar Horarios</font>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <PERTMalla2020 ramos={this.state.ramos} />
                    <br />

                </div>
            )
        } else {
            return (
                <div>
                    <Navbar />
                    <br />
                    <div className="row row-cols-3">
                        <div className="col">
                            <h1 className="title text-primary text-center">PERT</h1>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="d-flex justify-content-center">
                        <h1 class="display-6">Un Momento, Se esta calculando tú PERT</h1>
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
        }

    }
}
