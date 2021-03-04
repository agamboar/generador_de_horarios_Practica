import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';



export default class CrearHorario extends Component {

    state = {
        informatica: null,
        cfg: null
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    addInformatica = async (informatica) => {
        const newInformatica = {
            informatica: informatica

        }
        // aqui va el axios

        let informatica = this.state.newInformatica

        let formdata = new FormData()
        formdata.append('informatica', informatica)

        var config = {
            method: 'post',
            url: 'http://200.14.84.238:443/upload/',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + sessionStorage.getItem("token"),
                'Cookie': 'csrftoken=' + sessionStorage.getItem("token"),
                'X-CSRFTOKEN': sessionStorage.getItem("token")  //cambiiar a localStorage
            },
            data: formdata
        };
        console.log(sessionStorage.getItem("token"))
        axios(config)
            .then(function (response) {
                console.log('Subida exitosa del archivo.');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    addCfg = async (cfg) => {
        const newCfg = {
            cfg: cfg

        }
        // aqui va el axios

    }


    onSubmit1 = e => {
        e.preventDefault();
        this.addInformatica(this.state.informatica)

    }

    onSubmit2 = e => {
        e.preventDefault();
        this.addCfg(this.state.cfg)

    }

    render() {
        return (
            <div>
                <Navbar />

                <br />
                <br />
                <br />
                <br />

                <div className="container">

                    <div className="row">
                        <div className="col-sm-2 " />

                        <div className="col-sm-4 ">
                            <div className="card ">
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

                                    <div className="card-body">
                                        <h5 className="card-title text-center">Ingreso de Oferta Académica Informática</h5>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="form-group">
                                            <input className="form-control form-control-sm"
                                                type="file"
                                                name="informatica"
                                                id="formFile"
                                                onChange={this.onChange}
                                                value={this.state.informatica}
                                                multiple />
                                        </div>
                                        <form onSubmit={this.onSubmit1}>
                                            <button type="submit" className="btn btn-primary" onClick={(e) => this.addInformatica(e)}>Subir Oferta Informática</button>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <div className="col-sm-4 ">
                            <div className="card ">
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

                                    <div className="card-body">
                                        <h5 className="card-title text-center">Ingreso Oferta Académica CFG</h5>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="form-group">
                                            <input
                                                className="form-control form-control-sm"
                                                type="file"
                                                name="cfg"
                                                id="formFile"
                                                onChange={this.onChange}
                                                value={this.state.cfg}
                                                multiple />
                                        </div>
                                        <form onSubmit={this.onSubmit2}>
                                            <button type="submit" className="btn btn-primary">Subir Oferta CFG</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-2 " />
                    </div>

                </div>
                <Derechos />
            </div>
        )
    }
}
