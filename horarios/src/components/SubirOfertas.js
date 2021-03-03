import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';



export default class CrearHorario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oferta_inf: null,
            oferta_cfg: null
        }
        this.onFormSubmit1 = this.onFormSubmit1.bind(this)
        this.onFormSubmit2 = this.onFormSubmit2.bind(this)
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.upload_inf = this.upload_inf.bind(this)
        this.upload_cfg = this.upload_cfg.bind(this)
    }

    onFormSubmit1(e) {
        e.preventDefault()
        this.fileUpload(this.state.upload_inf).then((response) => {
            console.log(response.data)
        })
    }

    onFormSubmit2(e) {
        e.preventDefault()
        this.fileUpload(this.state.upload_cfg).then((response) => {
            console.log(response.data)
        })
    }

    onChange1(e) {
        this.setState({ oferta_inf: e.target.files[0] })
    }

    onChange2(e) {
        this.setState({ oferta_cfg: e.target.files[0] })
    }

    upload_inf(oferta_inf) {

        const formData = new FormData();

        formData.append('oferta_inf', oferta_inf)

        var config = {
            method: 'post',
            url: 'http://200.14.84.238:443/upload/',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token 372daae409f639993f9cf376f2058914dcd07a9c'
            },
            formData: formData
        };
        return axios(config)
    }

    upload_cfg(oferta_cfg) {

        const formData = new FormData();

        formData.append('oferta_inf', oferta_cfg)

        var config = {
            method: 'post',
            url: 'http://200.14.84.238:443/uploadcfg/',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token 372daae409f639993f9cf376f2058914dcd07a9c'
            },
            formData: formData
        };
        return axios(config)
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
                        <form onSubmit={this.onSubmit1}>
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
                                    </div>
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
                                                onChange={this.onChange1}
                                                value={this.state.oferta_inf}
                                                multiple />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Subir Oferta Informática</button>
                                    </div>

                                </div>

                            </div>

                        </form>
                        <form onSubmit={this.onSubmit2}>
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
                                    </div>
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
                                                onChange={this.onChange2}
                                                value={this.state.oferta_cfg}
                                                multiple />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Subir Oferta CFG</button>
                                    </div>

                                </div>

                            </div>

                        </form>
                        <div className="col-sm-2 " />
                    </div>

                </div>
                <Derechos />
            </div>
        )
    }
}
