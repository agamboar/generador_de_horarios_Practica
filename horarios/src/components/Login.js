import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import googleLogin from "../services/googleLogin"




export default class GoogleSocialAuth extends Component {

    render() {
        const googleResponse = async (response) => {
            let responseGoogle = await googleLogin(response.accessToken)
            console.log(responseGoogle);
            sessionStorage.setItem('token', response.accessToken)
            sessionStorage.setItem('key', responseGoogle.key)
            console.log(responseGoogle.data)
        }
        return (
            <div className="col-md-4 offset-md-4 align-self-sm-end">
                <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                    <h4 className=" align-self-center">Inicio de Sesión</h4>
                    <br />
                    <h5>
                        &nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-envelope" viewBox="0 0 22 22">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg>
                E-Mail
                </h5>
                    <div className="form-group">
                        <input type="Tel" className="form-control rounded-pill" placeholder="Ej: prueba@mail.cl" name="email" />
                    </div>
                    <h5>
                        &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                        </svg>
                Password
                </h5>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill" placeholder="********" name="password" />
                    </div>


                    <div className="align-self-center">
                        <button type="submit" className="btn btn-primary rounded-pill btn-sm">
                            <Link className="nav-link" to={{ pathname: '/users/usr' }} style={{ color: '#FFF' }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Ingresar Con Tú Email
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        </button>

                    </div>
                    <p className="lead align-self-center"> o </p>
                    <div className="App">
                        <h1> Login con Google </h1>

                        <GoogleLogin
                            clientId="822886799677-jgmhd4dtp3v0jqqleaj04k832uv14sb8.apps.googleusercontent.com"
                            buttonText="Login con Google"
                            onSuccess={googleResponse}
                            onFailure={googleResponse}
                            uxMode='redirect'
                            redirectUri='http://localhost:3000/users/usr/'
                        />

                    </div>
                    <br />
                    <div className=" align-self-end">
                        <Link className="nav-link" to={{ pathname: '/register/' }} >Registrarse </Link>
                    </div>
                </div>
            </div>
        )
    }
}

