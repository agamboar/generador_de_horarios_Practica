import React, { Component } from 'react'
import RamoE from './RamoE'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2020Extra2 extends Component {
    render() {
        return (
        
            

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>  
                    <Semestre semestre = {"4"}/>
                    <Semestre semestre = {"5"}/>
                    <Semestre semestre = {"6"}/>
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>
               
            

                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>  
                    <RamoE codigo = {"CIT-2204"} ramo = {"Probabilidades y Estadistica"} numero = {"16"} creditos = {"6"} prerequisitos = {"Cálculo II"} formacion = {"Ciencias de la Ingeniería"} />      
                    <RamoE codigo = {"CII-2750"} ramo = {"Optimización"} numero = {"22"} creditos = {"6"} prerequisitos = {"Álgebra Lineal - Cálculo II"} formacion = {"Ciencias de la Ingeniería"} />                     
                    <RamoE codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"} numero = {"28"} creditos = {"6"} prerequisitos = {"Cálculo I"} formacion = {"Ciencias de la Ingeniería"} />      
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2107</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Electrónica y Electrotecnia
                                <br/>
                                &nbsp;&nbsp;° Número: 17
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Mecánica - Ecuaciones  
                                <br/>
                                &nbsp; &nbsp; Diferenciales - Calculo III  
                                <br/>
                                &nbsp;&nbsp;° Formación: Ciencias de la Ingeniería
                                <br/>
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2106</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Taller de Redes y Servicios
                                <br/>
                                &nbsp;&nbsp;° Número: 23
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Redes de Datos - 
                                <br/>
                                &nbsp; &nbsp; Probabilidades y Estadistica
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Telec.
                                <br/>
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2202</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Arq. y Org. de Computadores
                                <br/>
                                &nbsp;&nbsp;° Número: 29
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Redes de Datos - 
                                <br/>
                                &nbsp;&nbsp;&nbsp; Electrónica y Electrotecnia
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Telec.
                                <br/>
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-1'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CBF-1002</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Electricidad y Magnetismo
                                <br/>
                                &nbsp;&nbsp;° Número: 18
                                <br/>
                                &nbsp;&nbsp;° Creditos: 7
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Ecuaciones Diferenciales -
                                <br/>
                                &nbsp;&nbsp;&nbsp; Cálculo III
                                <br/>
                                &nbsp;&nbsp;° Formación: Ciencias Básicas
                                <br/>
                                
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2205</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Proyectos en TICs I
                                <br/>
                                &nbsp;&nbsp;° Número: 24
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Redes de Datos - 
                                <br/>
                                &nbsp;&nbsp;&nbsp; Desarrollo Web y Móvil
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Proy. e Int.
                                <br/>
                                
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2110</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Señales y Sistemas 
                                <br/>
                                &nbsp;&nbsp;° Número: 30
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Calor y Ondas - 
                                <br/>
                                &nbsp;&nbsp;&nbsp; Electrónica y Electrotecnia
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Telec.
                                <br/>
                            </font></p> 
                        </div>
                    </div>  
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-3'}} >
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
                            <h6 className="card-title text-center"><font size="2">CIT-2001</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Bases de Datos
                                <br/>
                                &nbsp;&nbsp;° Número: 19
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Estructura de Datos y 
                                <br/>
                                &nbsp; &nbsp; Algoritmos
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Informática
                                <br/>
                                
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2002</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Bases de Datos Avanzadas
                                <br/>
                                &nbsp;&nbsp;° Número: 25
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Base de Datos
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Informática
                                <br/>
                                <br/>
                                
                            </font></p> 
                        </div>
                    </div> 
                    <div className="col">  
                        <div className="card border-primary">                  
                            <h6 className="card-title text-center"><font size="2">CIT-2003</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Sistemas Operativos
                                <br/>
                                &nbsp;&nbsp;° Número: 31
                                <br/>
                                &nbsp;&nbsp;° Creditos: 6
                                <br/>
                                &nbsp;&nbsp;° Pre-Requisitos: Estructura de Datos y Alg. 
                                <br/>
                                &nbsp;&nbsp;&nbsp; - Taller de Redes y Servicios 
                                <br/>
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada - Informática
                                <br/>
                            </font></p> 
                        </div>
                    </div> <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoE codigo = {" CIT-2008 "} ramo = {"Desarrollo Web y Móvil"} numero = {"20"} creditos = {"6"} prerequisitos = {" Programación Avanzada"} formacion = {"Ingeniería Aplicada - Informática"} />                     
                    <RamoE codigo = {" - "} ramo = {"Minor / CFG"} numero = {"26"} creditos = {"5"} prerequisitos = {" - "} formacion = {"Transversal"} />                     
                    <RamoE codigo = {" - "} ramo = {"Minor / CFG"} numero = {"32"} creditos = {"5"} prerequisitos = {" - "} formacion = {"Transversal"} />                     
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>
                
                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoE codigo = {"CIG-1012"} ramo = {"Inglés I"} numero = {"21"} creditos = {"5"} prerequisitos = {""} formacion = {"Transversal"} />      
                    <RamoE codigo = {"CIG-1013"} ramo = {"Inglés II"} numero = {"27"} creditos = {"5"} prerequisitos = {"Inglés I"} formacion = {"Transversal"} />                     
                    <RamoE codigo = {"CIG-1014"} ramo = {"Inglés III"} numero = {"33"} creditos = {"5"} prerequisitos = {"Inglés II"} formacion = {"Transversal"} />                     
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>

                

                <div className="row row-cols-10">
                <div className="col"> 
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </Link>
                </div>
                <RamoE codigo = {"CIT-4000"} ramo = {"Práctica I"} numero = {"54"} creditos = {"7"} prerequisitos = {"4 Semestre Cursado"} formacion = {"Práctica"} />      
                <div className="col"> </div>  
                <div className="col"> </div>              
                </div>
                <br/>
                <br/>

                
           </div>
     
           
        )
    }
}