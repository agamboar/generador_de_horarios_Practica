import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';
import NotAuth from './NotAuth';



export default class CrearHorario extends Component {




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
                   <div className = "card border-primary text-center custom2">


                    </div> 
                </div>


                <Derechos />
            </div>
            : <NotAuth/> }</div>
        )
    }
}
