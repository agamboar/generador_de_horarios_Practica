import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import googleLogin from "../services/googleLogin"
import Cookies from 'js-cookie';



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

getCsrfToken().then(val => Cookies.set('csrftoken', val, { path: '' }))

export default class GoogleSocialAuth extends Component {

    state = {
        user: null,
        password: null
    }

    verificar_user = async (login, password) => {
        const newUser = {
            username: login,
            password: password
        }

        var csrftoken = Cookies.get('csrftoken');
        var axios = require('axios');
        var qs = require('qs');

        var data = qs.stringify(newUser);
        console.log(data)
        var config = {
            method: 'post',
            url: 'http://200.14.84.238:443/dj-rest-auth/login/',
            data: data
        };

        await axios(config).then(response => sessionStorage.setItem('token', response.data.key))
        console.log(sessionStorage.getItem("token"))



    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.verificar_user(this.state.user, this.state.password)

    }

    render() {
        /*const googleResponse = async (response) => {
            let responseGoogle = await googleLogin(response.accessToken)
            console.log(responseGoogle);
            sessionStorage.setItem('token', response.accessToken)
            sessionStorage.setItem('key', responseGoogle.key)
            console.log(responseGoogle.data)
        }*/
        return (
            <div className="col-md-4 offset-md-4 align-self-sm-end">
                <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                    <h4 className=" align-self-center">Inicio de Sesión</h4>
                    <br />
                    <h5>
                        &nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                Usuario
                </h5>
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
                        <h5>
                            &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                            </svg>
                Password
                </h5>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                placeholder="********"
                                name="password"
                                onChange={this.onChange}
                                value={this.state.password}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary rounded-pill"> Ingresar
                        <Link className="nav-link" to={{ pathname: '/users/usr' }} >Registrarse </Link>
                        </button>
                    </form>
                    <p className="lead align-self-center"> o </p>
                    <div className="App">
                        <h1> Login con Google </h1>

                        { /* <GoogleLogin
                            clientId="822886799677-jgmhd4dtp3v0jqqleaj04k832uv14sb8.apps.googleusercontent.com"
                            buttonText="Login con Google"
                            onSuccess={googleResponse}
                            onFailure={googleResponse}
                            uxMode='redirect'
                            redirectUri='http://localhost:3000/users/usr/'
                        />*/}

                    </div>
                    <br />
                    <div className=" align-self-end">
                        <Link className="nav-link" to={{ pathname: '/Registro' }} >Registrarse </Link>
                    </div>
                </div>
            </div>
        )
    }
}

