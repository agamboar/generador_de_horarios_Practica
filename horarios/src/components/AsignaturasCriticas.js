import React, { Component } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import Derechos from './Derechos'





export default class AsignaturasCriticas extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                <br/>
                <br/>
                


                <div className="container ">

                
                <div className="row row-cols-4">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4  ">
                        <div className="card ">
                        <div className="container">
                        <br/> 
                        <h4>&nbsp; Paso Crítico</h4> 
                        <h1 className="title text-primary text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-sort-numeric-up" viewBox="0 0 16 16">
                            <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
                            <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                            <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
                        </svg> 
                        </h1>
                        <br/>
                    </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Priorizar Ramos</h5>
                                <p className="card-text">En el siguiente link se encuentra una página en la que podras priorizar los ramos y secciones que quieras que tengan una mayor prioridad al armar tu horario </p>
                                <br/>
                                <Link className="nav-link text-center" to={{ pathname: '/users/usr/priorizarRamos/priorizar'}}style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                <br/>
                                <br/>                               
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card ">
                        <div className="container">
                        <br/> 
                        <h4>&nbsp; Información Adicional</h4> 
                        <h1 className="title text-primary text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                            </svg>   
                        </h1>
                        <br/>
                    </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">PERT</h5>
                                <p className="card-text">En el siguiente link se encuentra una página donde podras visualizar tu avance curricular, los ramos que puedes tomar en este semestre y los ramos críticos de tu malla</p>
                                
                                <Link className="nav-link text-center" to={{ pathname: "/users/usr/PERT"}}style={{ color: '#0d6efd' }} >  Presiona Aquí   </Link>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    
                </div>
                </div>
                <Derechos/>

                           


            </div>
        )
    }
}
