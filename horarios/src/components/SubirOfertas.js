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
    onChange_oferta=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

    onChange_cfg=event=>{
        console.log( event.target.files)
        this.setState({
          selectedFile_cfg: event.target.files[1],
          loaded: 0,
        })
      }

    onClick_oferta = () => {
        const data = new FormData()
        console.log(this.state.selectedFile)
        data.append('file', this.state.selectedFile)
        axios.post("http://200.14.84.238:443/upload/", data).then(res => { // then print response status
        console.log(res.statusText)
     })
    }
    onClick_cfg = () => {
        const data = new FormData()
        console.log(this.state.selectedFile_cfg)
        data.append('excel_file', this.state.selectedFile_cfg)
        axios.post("http://200.14.84.238:443/uploadcfg/", data).then(res => { // then print response status
        console.log(res.statusText)
     })
    }
    render() {
        return (
            <div>
                <Navbar />

                <input type="file" name="file" onChange={this.onChange_oferta}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClick_oferta}>Subir oferta </button> {/* mejorar front*/ }

                <input type="file" name="file" onChange={this.onChange_cfg}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClick_cfg}>Subir CFG</button>

                <Derechos />
            </div>
        )
    }
}
