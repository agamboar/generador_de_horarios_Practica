import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';
import NotAuth from './NotAuth';



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
        axios.post("http://200.14.84.238:80/upload/", data).then(res => { // then print response status
            console.log(res.statusText)
        })
    }
    onClick_cfg = () => {
        const data = new FormData()
        console.log(this.state.selectedFile_cfg)
        data.append('excel_file', this.state.selectedFile_cfg)
        axios.post("http://200.14.84.238:80/uploadcfg/", data).then(res => { // then print response status
            console.log(res.statusText)
        })
    }
    render() {
        return (
            <div>{localStorage.getItem("is_staff") === "si" ?
            <div>
                <Navbar />

                <br />
                <br />
                <br />
                <br />

                <div className="container">

                   

                </div>


                <Derechos />
            </div>
            : <NotAuth/> }</div>
        )
    }
}
