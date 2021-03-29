import React, { Component } from 'react'
import Navbar from './Navbar'
import PERTMalla2010 from './PERTMalla2010'
import PERTMalla2018 from './PERTMalla2018'
import PERTMalla2020 from './PERTMalla2020'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NotAuth from './NotAuth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from 'react-router';


export default class PERT extends Component {

    aux =()=>{
        //console.log("si")
        setTimeout(function () { window.location.href = 'https://asistente-eit.udp.cl/users/usr/crearHorario' }, 3000);
    }    
    state = {
        malla: null,
        ramos: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'https://asistente-eit.udp.cl/PERT/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"), //cambiiar a localStorage
                'Content-Type': 'application/json'
            }
        };
        //aqui creo que va un the para setear los stear los state y asi poder decirle al alumno cuando no escogido una malla

        var PERT_j = await axios(config)


        this.setState({
            malla: PERT_j.data.malla,
            ramos: PERT_j.data.PERT
        })     
    }

    onSubmit = () => {
        const notify = (e) => {
            toast.info(e, { position: toast.POSITION.TOP_CENTER })
        }
        setTimeout(function () { notify("Seras redirigido para priorizar tus Ramos"); }, 1000);
        //setTimeout(function () { window.location.href = 'https://asistente-eit.udp.cl/users/usr/priorizarRamos'; }, 4500);
    }

    render() {
        if (localStorage.getItem("token")) {
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
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Ramos</font>
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
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Ramos</font>
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
            } else if (this.state.malla === 2020) {
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
                                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font size="3">Priorizar Ramos</font>
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
                        
                        {/*aca deberia haber algo que diga que no se escogio una malla*/}
                        {this.state.malla === "empty"?
                            <div>
                                <br />
                                <div className="row row-cols-3">
                                    <div className="col-6">
                                        <h1 className="title text-primary text-center">Ramos Críticos</h1>
                                    </div>
                                    <div className="col"></div>
                                    <div className="col"></div>
                                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="d-flex justify-content-center">
                                    <h2 className="display-6">No has elegido ninguna malla</h2>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h4 className="display-6">Seras redirigido</h4>
                                    {this.aux()}
                                </div>
                                <br />
                                <br />
                                <div className="d-flex justify-content-center">

                                    <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-border text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;

                                </div>
                                <br />
                                <br />
                                <br />
                            </div>:
                            <div> 
                            <br />
                            <div className="row row-cols-3">
                                <div className="col">
                                    <h1 className="title text-primary text-center">Ramos Críticos</h1>
                                </div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                                <h1 className="display-6">Un Momento, Se esta obteniendo tú ramos críticos...</h1>
                            </div>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">

                                <div className="spinner-grow text-primary" role="status" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="spinner-grow text-primary" role="status" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="spinner-border text-primary" role="status" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="spinner-grow text-primary" role="status" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="spinner-grow text-primary" role="status" />
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            </div>
                            <br />
                            <br />
                            <br />
                        </div>}
                        

                    </div>

                )
            }
        } else {
            return (<NotAuth />)
        }
    }
}
