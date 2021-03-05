import React, { Component } from 'react'
import NotAuth from './NotAuth'
import PriorizarSecciones2010 from "./PriorizarSecciones2010"
import PriorizarSecciones2018 from "./PriorizarSecciones2018"
import PriorizarSecciones2020 from "./PriorizarSecciones2020"
import axios from 'axios';




export default class PriorizarSecciones extends Component {

    state = {
        ramos: null,
        malla: null

    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'http://200.14.84.238:443/PERT/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"), //cambiar a localStorage
                'Content-Type': 'application/json'
            }
        };

        var PERT_j = await axios(config)

        console.log(PERT_j)
        this.setState({
            malla: PERT_j.data.malla,
            ramos: PERT_j.data.PERT
        })
    }

    render() {
        if (localStorage.getItem("token")) {
            if (this.state.malla === 2010) {
                return (

                    <PriorizarSecciones2010 ramos={this.state.ramos} />

                )
            } else if (this.state.malla === 2018) {
                return (

                    <PriorizarSecciones2018 ramos={this.state.ramos} />

                )
            } else {
                return (

                    <PriorizarSecciones2020 ramos={this.state.ramos} />

                )
            }
        } else {
            return (<NotAuth />)
        }
    }
}
