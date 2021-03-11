import React, { Component } from 'react'
import RamoE from './RamoE'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2020Extra3 extends Component {
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
                    <RamoE codigo = {"CIT-2206"} ramo = {"Gestión Organizacional"} numero = {"34"} creditos = {"6"} prerequisitos = {"Práctica I"} formacion = {"Ciencias de la Ingeniería"} />      
                    <RamoE codigo = {"CII-2100"} ramo = {"Introducción a la Economía"} numero = {"39"} creditos = {"6"} prerequisitos = {"Cálculo II"} formacion = {"Ciencias de la Ingeniería"} />                     
                                       
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <RamoE codigo = {"CIT-2011"} ramo = {"Sistemas Distribuidos"} numero = {"35"} creditos = {"6"} prerequisitos = {"Redes de Datos - Sistemas Operativos"} formacion = {"Ingeniería Aplicada - Informática"} />      
                    <RamoE codigo = {"CIT-2112"} ramo = {"Tecnologías Inalámbricas"} numero = {"40"} creditos = {"6"} prerequisitos = {"Ingeniería de Software"} formacion = {"Ingeniería Aplicada - Telecomuniaciones"} />                     
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-3'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                    </div> 
                    <RamoE codigo = {"CIT-2111"} ramo = {"Comunicaciones Digitales"} numero = {"36"} creditos = {"6"} prerequisitos = {"Señales y Sistemas"} formacion = {"Ingeniería Aplicada"} />      
                    <RamoE codigo = {"CIT-2113"} ramo = {"Criptografía y Seguridad en Redes"} numero = {"41"} creditos = {"6"} prerequisitos = {"Sistemas Operativos"} formacion = {"Ingeniería Aplicada"} />                     
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-5'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </Link>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2012</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Ingeniería de Software
                                <br/>
                                &nbsp;&nbsp;° Número: 37
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Base de Datos - Proyecto en TICs I
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Informática
                                <br/>
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2201</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Inteligencia Artificial
                                <br/>
                                &nbsp;&nbsp;° Número: 42
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Probabilidad y Estadistica - Base de Datos - Optimización
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
                    <RamoE codigo = {" - "} ramo = {"Minor / CFG"} numero = {"38"} creditos = {"5"} prerequisitos = {" - "} formacion = {"Transversal"} />                               
                    <RamoE codigo = {"CIT-2207"} ramo = {"Evaluación de Proyectos TIC"} numero = {"43"} creditos = {"6"} prerequisitos = {"Contabilidad y Costos - Gestión Org. -  Ing. de Software"} formacion = {"Ingeniería Aplicada - Proyetos e Integración"} />      
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> 
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
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