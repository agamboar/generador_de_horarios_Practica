import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Derechos from './Derechos'
import NotAuth from './NotAuth'
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

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

        const notify = (e) => {
            toast.info(e, { position: toast.POSITION.TOP_CENTER })
        }
        const data = new FormData()
        console.log(this.state.selectedFile)
        data.append('file', this.state.selectedFile)
        data.append('id', localStorage.getItem('id'))
        axios.post("http://200.14.84.238:80/ramosaprobados/", data).then(res => {
            console.log(res.statusText)
        })
        setTimeout(function () { notify("Seras redirigido para calcular tus ramos críticos"); }, 1000);
        //setTimeout(function () { window.location.href = 'http://200.14.84.238:80/users/usr/PERT'; }, 4500);
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
                                            <Link className="nav-link text-center" to={`mallas/malla${localStorage.getItem("malla")}/AvanceCurricular`} style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                            <br />


                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 custom3">
                                    <div className="card custom4">
                                        <div className="container">
                                            <br />
                                            <br />
                                            <h1 className="title text-primary text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-file-excel" viewBox="0 0 16 16">
                                                    <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z" />
                                                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                                </svg>
                                            </h1>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Ingreso de Avance Curricular Excel Pt.1</h5>
                                            <p className="card-text">En los siguientes link podras descargar la malla que te corresponde, para que la puedas rellenar con tu avance curricular y ingresarla en el siguiente punto.</p>
                                            <br />
                                            <Link className="nav-link text-center" to='/resources/MiMalla.xlsx' target="_blank" style={{ color: '#0d6efd' }} >  Plantilla de Mi Malla </Link>
                                            <Link className="nav-link text-center" to='/resources/MallaCurricular2010.xlsx' target="_blank" style={{ color: '#0d6efd' }} >  Malla 2010 </Link>
                                            <Link className="nav-link text-center" to='/resources/MallaCurricular2018.xlsx' target="_blank" style={{ color: '#0d6efd' }} >  Malla 2018  </Link>
                                            <Link className="nav-link text-center" to='/resources/MallaCurricular2020.xlsx' target="_blank" style={{ color: '#0d6efd' }} >  Malla 2020  </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 custom3">
                                    <div className="card custom4">
                                        <div className="container">
                                            <br />
                                            <br />
                                            <h1 className="title text-primary text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-file-excel" viewBox="0 0 16 16">
                                                    <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z" />
                                                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                                </svg>
                                            </h1>
                                            <br />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Ingreso de Avance Curricular Excel Pt.2</h5>
                                            <p className="card-text">En la siguiente casilla debes ingresar el excel que contiene tú avance curricular logrado durante la carrera, adjuntalo en la casilla continua.</p>
                                            <br />
                                            <div className="form-group">
                                                <div>
                                                    <input type="file" name="file" onChange={this.onChange} />
                                                    <br />
                                                    <br />
                                                </div>
                                                <button type="button" className="btn btn-primary btn-block" onClick={this.onClick}>Subir mi Excel</button>
                                            </div>
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
