import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';
import NotAuth from './NotAuth';



export default class CrearHorario extends Component {


    state = {
        user: null
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(){
        //
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
                <div className = 'row row-cols-3'>
                <div className = 'col'> </div>
                <div className = 'col'> 
                <div className="col-20">
                   <div className = "card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded custom5">
                       <br/>
                        <h3 className="text-center ">Usuarios</h3>
                        <br/>
                        <h5>Buscar un Usuario</h5>
                        <form onSubmit={this.onSubmit}>
                        
                        <div className="form-group">
                                <input
                                    type="Tel"
                                    name="user"
                                    className="form-control rounded-pill"
                                    placeholder="Ej: usuario"
                                    onChange={this.onChange}
                                    value={this.state.user}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary rounded-pill"> Buscar</button>
                        </form>

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
