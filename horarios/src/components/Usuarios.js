import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';
import NotAuth from './NotAuth';
import { toast } from 'react-toastify'

toast.configure()

export default class CrearHorario extends Component {


    state = {
        username: null
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    set_staff = async ()=>{

        const payload = this.state.username

        const notify = (e) => {
            toast.info(e, { position: toast.POSITION.TOP_CENTER })
          }

        const err = (e) => {
            toast.error(e, { position: toast.POSITION.TOP_CENTER })
          }
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

        await axios(config).then(response => {
            if (response.status === 200) {
              notify("Se ha modificado el usuario satisfactoriamente.")
            } else {
              err("No se ha podido modificar el usuario.")
            }
      
          }).catch(function (error) {
            if (error.response) {
      
              if (error.response.data.noUser){ err(`No User:  ${error.response.data.noUser[0]}`); }
              if (error.response.data.notStaff) { err(`Not Staff:  ${error.response.data.notStaff[0]}`); }
              if (error.response.data.unauthorized) { err(`Not Authorized:  ${error.response.data.unauthorized[0]}`);}
              console.log(error.response.data);
            }
          });
    }
    remove_staff(){

        const payload = this.state.username

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

        //await axios(config)
          //axios(config) //url: 'http://200.14.84.238:80/remove_staff/',
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
                            <div> 
                            <button type="submit" className="btn btn-success" onClick= { this.set_staff}> Hacer Staff</button>&nbsp;&nbsp;
                            <button type="submit" className="btn btn-danger" onClick= { this.remove_staff}> Eliminar de Staff</button>&nbsp;&nbsp;
                            </div>

                        <br/>
                    </div> 
                </div>
                </div>
                <div className = 'col'> </div>
                </div>
                {console.log(this.state.username2)}
                <Derechos staff = {this.state.username2}/>
            </div>
            : <NotAuth/> }</div>
        )
    }
}
