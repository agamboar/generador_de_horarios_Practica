import React, { Component } from 'react'
import Navbar from './Navbar'
import Horarios from './Horarios'
import axios from 'axios';
import NotAuth from './NotAuth'
import { Redirect } from 'react-router';

export default class HPosibles extends Component {
    aux =()=>{
        //console.log("si")
        
        setTimeout(function () { window.location.href = 'https://asistente-eit.udp.cl/users/usr/PERT' }, 3000);
    } 
    state = {
        Horarios: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'https://asistente-eit.udp.cl/clique/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        };

       axios(config).then(response => { this.setState({Horarios: response.data})})
        
       
    }

    render() {
        if (localStorage.getItem("token")) {
            console.log(this.state.Horarios)
            if (this.state.Horarios === null) {
                return (
                    <div>
                        <Navbar />

                        <br />
                        <br />


                        <p className="lead">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                    </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="d-flex justify-content-center">
                            <h1 className="display-6">Un Momento, Se están calculando tús horarios</h1>
                        </div>
                        <br />
                        <br />
                        <div className="d-flex justify-content-center">

                            <div className="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="spinner-border text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="spinner-grow text-primary" role="status" />
                        &nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                        <br />
                        <br />
                        <br />




                    </div>
                )

            }else  if (this.state.Horarios === "n" ) {

                    return(
                        <div>
                        
                        <br />
                                <div className="row row-cols-4">
                                    <div className="col-6">
                                        <h2 className="title text-primary text-center">Generador de Horarios</h2>
                                    </div>
                                    <div className="col"></div>
                                    <div className="col"></div>
                                    <div className="col"></div>
                                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="d-flex justify-content-center">
                                    <h2 className="display-6">Te has saltado un paso o no hay un horarios posibles </h2>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h4 className="display-6">Seras redirigido</h4>
                                    {this.aux()}
                                </div>
                                <br />
                                <br />
                                <div className="d-flex justify-content-center">

                                    <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-border text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="spinner-grow text-primary" role="status" />
                                &nbsp;&nbsp;&nbsp;&nbsp;

                                </div>
                                <br />
                                <br />
                                <br />
                        </div>
                    )
                }else{

                return (
                    <div>
                        <Navbar />

                        <br />
                        <br />

                        {console.log(this.state.Horarios)}
                        <p className="lead">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                </p>
                        <br />
                        <br />
                        <Horarios horarios={this.state.Horarios} />

                        <br />

                        <br />





                    </div>
                )
            }
        
        } else {
            return (<NotAuth />)
        }
    }
}
