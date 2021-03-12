import React, { Component } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import Derechos from './Derechos'
import NotAuth from './NotAuth'
import { Redirect } from 'react-router';

export default class Mallas extends Component {
    
    render() {
        if (localStorage.getItem("token")){
            return (
                <div>
                    {(localStorage.getItem("malla"))?
                    <Redirect to={`/malla${localStorage.getItem("malla")}/AvanceCurricular`} /> : 
                    
                    <div>
                        <Navbar/>
                        
                        <br/>
                        <br/> 
                        <p className="lead">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            A continuación deberas elegir la malla que actualmente estas cursando
                        </p>

                        <br/>
                        <br/>


                        <div className="container">

                        
                        <div className="row">
                            
                            <div className="col-sm-4 ">
                                <div className="card ">
                                <div className="container">
                                <br/> 
                                <br/> 
                                <h1 className="title text-primary text-center">2010</h1>
                                <br/>
                            </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Malla Curricular Año 2010</h5>
                                        <p className="card-text">En el siguiente link podras elegir la malla que te corresponde, tambien podras ver información adicional a esta y agregar tu avance curricular</p>
                                        <Link className="nav-link text-center" to={{ pathname: '/users/usr/mallas/malla2010'}}style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 ">
                                <div className="card ">
                                <div className="container">
                                <br/> 
                                <br/> 
                                <h1 className="title text-primary text-center">2018</h1>
                                <br/>
                            </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Malla Curricular Año 2018</h5>
                                        <p className="card-text">En el siguiente link podras elegir la malla que te corresponde, tambien podras ver información adicional a esta y agregar tu avance curricular</p>
                                        <Link className="nav-link text-center" to={{ pathname: '/users/usr/mallas/malla2018'}}style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 ">
                                <div className="card ">
                                <div className="container">
                                <br/> 
                                <br/> 
                                <h1 className="title text-primary text-center">2020</h1>
                                <br/>
                            </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Malla Curricular Año 2020</h5>
                                        <p className="card-text">En el siguiente link podras elegir la malla que te corresponde, tambien podras ver información adicional a esta y agregar tu avance curricular</p>
                                        <Link className="nav-link text-center" to={{ pathname: '/users/usr/mallas/malla2020'}}style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <Derechos/>
                    </div>
                    }
                </div>
              )

        }else{
            return (<NotAuth />)
        }
        
    }
}
