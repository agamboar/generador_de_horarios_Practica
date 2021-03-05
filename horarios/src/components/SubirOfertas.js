import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';



export default class CrearHorario extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            selectedFile_cfg: null
        }
    }

    onChange_oferta = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onChange_cfg = event => {
        this.setState({
            selectedFile_cfg: event.target.files[0],
            loaded: 0,
        })
    }

    onClick_oferta = () => {
        const data = new FormData()
        console.log(this.state.selectedFile)
        data.append('file', this.state.selectedFile)
        axios.post("https://200.14.84.238:443/upload/", data).then(res => { // then print response status
            console.log(res.statusText)
        })
    }
    onClick_cfg = () => {
        const data = new FormData()
        console.log(this.state.selectedFile_cfg)
        data.append('excel_file', this.state.selectedFile_cfg)
        axios.post("https://200.14.84.238:443/uploadcfg/", data).then(res => { // then print response status
            console.log(res.statusText)
        })
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
                                            <input type="file" name="file" onChange={this.onChange_oferta} />


                                            <button type="button" class="btn btn-success btn-block" onClick={this.onClick_oferta}>Subir Oferta Informática </button> {/* mejorar front*/}
                                        </div>

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
                                            <input type="file" name="file" onChange={this.onChange_cfg} />
                                            <button type="button" class="btn btn-success btn-block" onClick={this.onClick_cfg}>Subir Oferta CFG</button>
                                        </div>


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
