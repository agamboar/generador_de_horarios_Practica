import React, { Component } from 'react'
import RamoE from './RamoP'
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
                    <RamoE codigo = {"CIT-2204"} ramo = {"Probabilidades y Estadistica"} />      
                    <RamoE codigo = {"CII-2750"} ramo = {"Optimización"} />                     
                    <RamoE codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"} />      
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <RamoE codigo = {"CIT-2107"} ramo = {"Electrónica y Electrotecnia"} />     
                    <RamoE codigo = {"CIT-2108"} ramo = {"Taller de Redes y Servicios"} />    
                    <RamoE codigo = {"CIT-2202"} ramo = {"Arq. y Org. de Computadores"} />    
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
                    <RamoE codigo = {"CBF-1002"} ramo = {"Electricidad y Magnetismo"} />   
                    <RamoE codigo = {"CIT-2205"} ramo = {"Proyectos en TICs I"} />   
                    <RamoE codigo = {"CIT-2110"} ramo = {"Señales y Sistemas "} />   
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
                    <RamoE codigo = {"CIT-2007"} ramo = {"Bases de Datos"} />   
                    <RamoE codigo = {"CIT-2009"} ramo = {"Bases de Datos Avanzadas"} />   
                    <div className="col">  
                    <RamoE codigo = {"CIT-2010"} ramo = {"Sistemas Operativos"} />  
                    <div className="col col-md-1"> </div>                 
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
           </div>
     
           
        )
    }
}
