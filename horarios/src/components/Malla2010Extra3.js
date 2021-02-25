import React, { Component } from 'react'
import RamoE from './RamoE'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2010Extra3 extends Component {
    render() {
        return (
        
            

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>  
                    <Semestre semestre = {"7"}/>
                    <Semestre semestre = {"8"}/>
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>
               
            

                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>  
                    <RamoE codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"} numero = {"33"} creditos = {"6"} prerequisitos = {"Cálculo I"} formacion = {"Ciencias de la Ingeniería"} />      
                    <RamoE codigo = {"CIT-2203"} ramo = {"Gestión Organizacional"} numero = {"38"} creditos = {"6"} prerequisitos = {"Comuniación para la Ingeniería"} formacion = {"Ciencias de la Ingeniería"} />                     
                                       
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <RamoE codigo = {"CIT-2005"} ramo = {"Ingeniería de Software"} numero = {"34"} creditos = {"6"} prerequisitos = {"Proyecto en TICs I - Bases de Datos"} formacion = {"Ingeniería Aplicada "} />      
                    <RamoE codigo = {"CIT-2004"} ramo = {"Arquitectura de Sistemas"} numero = {"39"} creditos = {"6"} prerequisitos = {"Ingeniería de Software"} formacion = {"Ingeniería Aplicada"} />                     
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010/DatosExtraM2010-2'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                    </div> 
                    <RamoE codigo = {"CIT-2102"} ramo = {"Comunicaciones Digitales"} numero = {"35"} creditos = {"6"} prerequisitos = {"Señales y Sistemas"} formacion = {"Ingeniería Aplicada"} />      
                    <RamoE codigo = {"CIT-2105"} ramo = {"Criptografía y Seguridad en Redes"} numero = {"40"} creditos = {"6"} prerequisitos = {"Sistemas Operativos"} formacion = {"Ingeniería Aplicada"} />                     
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010/DatosExtraM2010-4'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </Link>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">FIC-1003</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Derecho en Ingeniería
                                <br/>
                                &nbsp;&nbsp;° Número: 35
                                <br/>
                                &nbsp;&nbsp;° Creditos: 5
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: 180 Creditos
                                <br/>
                                &nbsp;&nbsp;° Formación: Transversal
                                <br/>
                                <br/>
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2201</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Proyecto en TICs II
                                <br/>
                                &nbsp;&nbsp;° Número: 41
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Proyecto en TICs I - Ingeniería de Software -
                                &nbsp;&nbsp;&nbsp;Comunicaciones Digitales
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada
                                <br/>
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoE codigo = {"CIT-2104"} ramo = {"Arquitectura de Computadores"} numero = {"37"} creditos = {"6"} prerequisitos = {"Sistemas Digitales"} formacion = {"Ingeniería Aplicada"} />      
                    <RamoE codigo = {" - "} ramo = {"Minor / CFG"} numero = {"42"} creditos = {"5"} prerequisitos = {" - "} formacion = {"Transversal"} />                               
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> 
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </Link>
                </div>
                <div className="col"> </div>
                <div className="col"> </div>  

             
                </div>

                
           </div>
     
           
        )
    }
}