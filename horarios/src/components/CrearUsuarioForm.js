import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import cookie from "react-cookies";
import $ from 'jquery';

const API_HOST = 'http://200.14.84.238:443';

let _csrfToken = null;

async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await fetch(`${API_HOST}/csrf/`, {
      credentials: 'include',
    });
    const data = await response.json();
    _csrfToken = data.csrfToken;
  }
  return _csrfToken;
}

function getCookie(name) {
  var cookieValue = getCsrfToken().csrfToken;
  console.log("funcion cookie")
  if (cookieValue && cookieValue !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].toString().replace(/^([\s]*)|([\s]*)$/g, "");
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export default class CrearUsuarioForm extends Component {

  state = {
    username: '',
    password1: '',
    password2: '',
    email: ''
  }

  addUsuario = async (username, email, password1, password2) => {
    const newUsuario = {
      username: username,
      email: email,
      password1: password1,
      password2: password2

    }
    console.log("aca")
    console.log(await getCsrfToken())
    var qs = require('qs');
    var data = qs.stringify({
      'username': 'CristobalUrra121',
      'email': 'curra545@gmail.com',
      'password1': 'asistente2021',
      'password2': 'asistente2021'
    });
    var config = {
      method: 'post',
      url: 'http://200.14.84.238:443/accounts/signup/',
      headers: {
        'X-CSRFToken': "csrftoken="+getCsrfToken(), 
        'Content-Type': 'application/x-www-form-urlencoded',  
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit = e => {
    e.preventDefault();
    this.addUsuario(this.state.username, this.state.email, this.state.password1, this.state.password2)

  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  }


  render() {
    return (
      <div className="col-md-4 offset-md-4 align-self-sm-end">
        <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center " >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
                &nbsp;Registro de Usuario
              </h2>
          <br />
          <br />
          <form onSubmit={this.onSubmit}>
            <h5>
              &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
                Usuario
                </h5>
            <div className="input-group mb-3">
              <input
                type="text"
                name="username"
                placeholder="Diego Portales"
                className="form-control rounded-pill"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.onChange}
                value={this.state.username}
              />
            </div>
            <h5>
              &nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-envelope" viewBox="0 0 22 22">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
                E-Mail
                </h5>
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Ej: prueba@mail.cl"
                name="email"
                className="form-control rounded-pill"
                aria-label="Amount (to the nearest dollar)"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <h5>
              &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
                Password
                </h5>
            <div className="input-group mb-3">
              <input
                type="password"
                name="password1"
                placeholder="********"
                className="form-control rounded-pill"
                aria-label="Amount (to the nearest dollar)"
                onChange={this.onChange}
                value={this.state.password1}
              />
            </div>
            <h5>
              &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
                Repetir Password
                </h5>
            <div className="input-group mb-3">
              <input
                type="password"
                name="password2"
                placeholder="********"
                className="form-control rounded-pill"
                aria-label="Amount (to the nearest dollar)"
                onChange={this.onChange}
                value={this.state.password2}
              />
            </div>
            <button type="submit" className="btn btn-primary">Crear Usuario</button>
          </form>


          <div className=" align-self-end">
            <Link className="nav-link" to={{ pathname: '/' }} >Volver </Link>
          </div>
        </div>
      </div>
    )
  }

}