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
        console.log(this.state.username)
    }

    set_staff = async (login)=>{
        const newUser = {
            username: login,
        }
        const notify = (e) => {
            toast.error(e, { position: toast.POSITION.TOP_CENTER })
          }
      
          var qs = require('qs');
          console.log(this.state.username)
          var data = qs.stringify(newUser);
          var config = {
            method: 'post',
            url: 'http://200.14.84.238:80/set_staff/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem("token")
            },
            data: data
          };
      
          axios(config).then(response => {
            if (response.status === 201) {
              notify("Se ha modificado el usuario correctamente")
            } else {
              notify("No se ha podido modifiar")
            }
      
          }).catch(function (error) {
            if (error.response) {
              if (error.response.data.username) { notify(`error:  ${error.response.data.error[0]}`); }
            }
          });
    }
    remove_staff(){
        const notify = (e) => {
            toast.error(e, { position: toast.POSITION.TOP_CENTER })
          }
      
          var qs = require('qs');
          var data = qs.stringify(this.state);
          console.log(this.state)
          var config = {
            method: 'post',
            url: 'http://200.14.84.238:80/remove_staff/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem("token")
            },
            data: data
          };
      
          axios(config).then(response => {
            if (response.status === 201) {
              notify("Se ha modificado el usuario correctamente")
            } else {
              notify("No se ha podido modifiar")
            }
      
          }).catch(function (error) {
            if (error.response) {
              if (error.response.data.username) { notify(`error:  ${error.response.data.error[0]}`); }
            }
          });
    }
    onSubmit = e => {
        e.preventDefault();
        this.set_staff(this.state.username)

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
                            <button type="button" class="btn btn-danger"  onClick={this.remove_staff} > Eliminar de Staff</button>
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
