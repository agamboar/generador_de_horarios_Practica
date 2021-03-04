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
        /*this.setState({
            [e.target.name]: e.target.value
        })*/
        console.log(e.target.files[0]);
        this.setState({
            informatica: e.target.files[0],
          })

    }

    addInformatica = async (informatica_excel) => {
        console.log(informatica_excel)
        await axios.post("http://200.14.84.238:443/upload/", informatica_excel).then(res => { 
            console.log(res.statusText)
         })
   


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

               
                <Derechos />
            </div>
        )
    }
}
