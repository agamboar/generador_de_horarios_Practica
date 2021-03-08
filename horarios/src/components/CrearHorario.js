import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Derechos from './Derechos'
import NotAuth from './NotAuth'
import axios from 'axios';


export default class CrearHorario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onChange = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClick = () => {
        const data = new FormData()
        console.log(this.state.selectedFile)
        data.append('file', this.state.selectedFile)
        axios.post("http://200.14.84.238::443/ramosaprobados/", data).then(res => {
            console.log(res.statusText)
        })
    }

    render() {
        return (
            <div>
                {(localStorage.getItem("token")) ?
                    <div>
                        <Navbar />

                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="container">


                            <div className="row">

                                <div className="col-sm-4 custom3">
                                    <div className="card custom4">
                                        <div className="container">
                                            <br />
                                            <br />
                                            <h1 className="title text-primary text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                    <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                </svg>
                                            </h1>
                                            <br />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Ingreso de Avance Curricular Manual</h5>
                                            <p className="card-text">En el siguiente link se encentra una página en la que podras ingrear el avance curricular que has logrado durante la carrera de manera manual. Tambien podras ver información correspondiente a cada malla curricular</p>
                                            <br />
                                            <Link className="nav-link text-center" to={{ pathname: '/users/usr/mallas/' }} style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                            <br />


                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 custom3">
                                    <div className="card custom4">
                                        <div className="container">
                                            <br/>
                                            <br/>
                                            <h1 className="title text-primary text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-file-excel" viewBox="0 0 16 16">
                                                    <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z" />
                                                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                                </svg>
                                            </h1>
                                            <br />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Ingreso de Avance Curricular Excel</h5>
                                            <p className="card-text">En la siguiente debes ingresar el excel que posee tú avance curricular que has logrado durante la carrera, ingresalo en la casilla continua.</p>
                                            <br/>
                                            <div className="form-group">
                                                <div>
                                                <input type="file" name="file" onChange={this.onChange} />
                                                <br/>
                                                <br/>
                                                </div>
                                                <button type="button" className="btn btn-primary btn-block" onClick={this.onClick}>Subir mi Excel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 custom3">
                                    <div className="card custom4">
                                        <div className="container">
                                            <br />
                                            <br />
                                            <h1 className="title text-primary text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
                                                    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                                </svg>
                                            </h1>
                                            <br />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Ingreso de Avance Curricular Automático</h5>
                                            <p className="card-text">En el siguiente link se encuentra una página donde podras ingresar tus datos de ingreso del portal académico, esto para poder extraer tus datos a través del. Si no te sientes comodo ingresando tus datos te recomendamos las otras dos opciones. </p>
                                            <br />
                                            <Link className="nav-link text-center" to={{ href: "https://portal.udp.cl/irj" }} style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                            <br />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Derechos />

                    </div>
                    : <NotAuth />}
            </div>
        )
    }
}
