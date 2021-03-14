import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';
import NotAuth from './NotAuth';



export default class CrearHorario extends Component {


    state = {
        username: null
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    set_staff = async (username)=>{

        const payload = username

        var data = JSON.stringify(payload);
        console.log(data)

        var config = {
        method: 'post',
        url: 'http://200.14.84.238:80/set_staff/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem("token")
        },
        data: data
        };

        await axios(config) //url: 'http://200.14.84.238:80/set_staff/',
    }
    remove_staff(username){

        const payload = username

        var data = JSON.stringify(payload);
        console.log(data)

        var config = {
        method: 'post',
        url: 'http://200.14.84.238:80/remove_staff/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem("token")
        },
        data: data
        };

        await axios(config)
          //axios(config) //url: 'http://200.14.84.238:80/remove_staff/',
    }

    onSubmit = e => {
        /*e.preventDefault();
        this.set_staff(this.state.username)*/
    }
    onClick = e =>{
        /*e.preventDefault();
        this.remove_staff(this.state.username)*/
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
                <div className="container align-self-center">
                   <div className = "card border-primary shadow-lg p-3 mb-5 bg-white custom5">
                       <br/>
                        <h3 className="text-center ">Usuarios</h3>
                        <br/>
                        <h5>Hacer parte del staff a un usuario</h5>
                        <form onSubmit={this.onSubmit}>
                        
                        <div className="form-group">
                                <input
                                    type="Tel"
                                    name="username"
                                    className="form-control rounded-pill"
                                    placeholder="Ej: usuario"
                                    onChange={this.onChange}
                                    value={this.state.username}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary"> Hacer Staff</button>&nbsp;&nbsp;
                           <button type="button" class="btn btn-danger"  onClick={this.onClick} > Eliminar de Staff</button>
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
