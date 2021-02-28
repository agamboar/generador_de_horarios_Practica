import React, { Component } from 'react'
import RamoP from './RamoP'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2010Extra1 extends Component {
    render() {
        return (
        
            

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>  
                    <Semestre semestre = {"1"}/>
                    <Semestre semestre = {"2"}/>
                    <Semestre semestre = {"3"}/>
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>
               
            

                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>  
                    <RamoP codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} />                    
                    <RamoP codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} />      
                    <RamoP codigo = {"CBM-1005"} ramo = {"Ecuaciones Diferenciales"} />      
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <RamoP codigo = {"CBM-1001"} ramo = {"Cálculo I"} />      
                    <RamoP codigo = {"CBM-1003"} ramo = {"Cálculo II"} />      
                    <RamoP codigo = {"CBM-1006"} ramo = {"Cálculo III"} />                       
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </div> 
                    <RamoP codigo = {"CBQ-1000"} ramo = {"Química"} />      
                    <RamoP codigo = {"CBF-1000"} ramo = {"Mecánica"} />      
                    <RamoP codigo = {"CBF-1001"} ramo = {"Calor y Ondas"} />      
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra2'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </Link>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoP codigo = {"CIT-1000"} ramo = {"Programación"} />      
                    <RamoP codigo = {"CIT-1010"} ramo = {"Programación Avanzada"} />                     
                    <RamoP codigo = {"CIT-2000"} ramo = {"Estructura de Datos"} />      
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoP codigo = {"FIC-1000"} ramo = {"Comunicación para la Ingeniería"} />      
                    <RamoP codigo = {" - "} ramo = {"Minor / CFG"} />                     
                    <RamoP codigo = {"CIT-2100"} ramo = {"Redes de Datos"} />      
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> 
                    <Link className="nav-link" to={{ pathname: '/users/usr/PERT'}} >
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