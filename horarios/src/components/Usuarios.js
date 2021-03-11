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
                <div className = 'row row-cols-3'>
                <div className = 'col'> </div>
                <div className = 'col'> 
                <div className="container align-self-center">
                   <div className = "card border-primary text-center custom5">


                    </div> 
                </div>
                </div>
                <div className = 'col'> </div>
                </div>

                <Derechos />
            </div>
            : <NotAuth/> }</div>
        )
    }
}
