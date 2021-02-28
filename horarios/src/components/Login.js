import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="col-md-4 offset-md-4 align-self-sm-end">
            <div className="card card-body border border-primary shadow-lg p-3 mb-5 bg-white rounded">
                <h4 className= " align-self-center">Inicio de Sesión</h4>
                <br/>
                <h5>
                &nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-envelope" viewBox="0 0 22 22">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                E-Mail
                </h5>
                <div className="form-group">
                    <input type="Tel" className="form-control rounded-pill" placeholder="Ej: prueba@mail.cl" name="email" />
                </div>
                <h5>
                &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-lock" viewBox="0 0 22 22">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                </svg>
                Password
                </h5>
                <div className="form-group">
                    <input type="password" className="form-control rounded-pill" placeholder="********" name="password" />
                </div>
                
                
                <div className = "align-self-center">
                <button type="submit" className="btn btn-primary rounded-pill btn-sm">
                        <Link className="nav-link" to={{ pathname: '/users/usr'}}style={{ color: '#FFF' }} >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Ingresar Con Tú Email
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                </button>
                
                </div>
                <p className="lead align-self-center"> o </p>
                <div className = "align-self-center">
                <button type="submit" className="btn btn-secondary  rounded-pill btn-sm">
                        <Link className="nav-link" to={{ pathname: '/users/usr'}}style={{ color: '#FFF' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                            </svg>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Ingresar Con Tú Cuenta Google
                            &nbsp;&nbsp;&nbsp;
                        </Link>
                </button>
                
                </div>
                <br/>
                <div className = " align-self-end">
                <Link className="nav-link" to={{ pathname: '/users/usr'}} >Registrarse </Link>
                </div>
            </div>
        </div>         
        )
    }
}