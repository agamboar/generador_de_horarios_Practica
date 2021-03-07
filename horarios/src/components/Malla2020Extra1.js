import React, { Component } from 'react'
import RamoE from './RamoE'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2020Extra1 extends Component {
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
                    <RamoE codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} numero = {"1"} creditos = {"7"} prerequisitos = {" - "} formacion = {"Ciencias Básicas"} />                    
                    <RamoE codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} numero = {"6"} creditos = {"6"} prerequisitos = {"Álgebra y Geometría"} formacion = {"Ciencias Básicas"} />      
                    <RamoE codigo = {"CBM-1005"} ramo = {"Ecuaciones Diferenciales"} numero = {"11"} creditos = {"6"} prerequisitos = {"Álgebra Lineal - Cálculo II" } formacion = {"Ciencias Básicas"}  />      
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <RamoE codigo = {"CBM-1001"} ramo = {"Cálculo I"} numero = {"2"} creditos = {"7"} prerequisitos = {" - "}  formacion = {"Ciencias Básicas"}/>      
                    <RamoE codigo = {"CBM-1003"} ramo = {"Cálculo II"} numero = {"7"} creditos = {"6"} prerequisitos = {"Cálculo I"} formacion = {"Ciencias Básicas"} />      
                    <RamoE codigo = {"CBM-1006"} ramo = {"Cálculo III"} numero = {"12"} creditos = {"6"} prerequisitos = {"Cálculo II"}  formacion = {"Ciencias Básicas"}/>                       
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </div> 
                    <RamoE codigo = {"CBQ-1000"} ramo = {"Química"} numero = {"3"} creditos = {"6"} prerequisitos = {""} formacion = {"Ciencias Básicas"} />      
                    <RamoE codigo = {"CBF-1000"} ramo = {"Mecánica"} numero = {"8"} creditos = {"7"} prerequisitos = {"Cálculo I"} formacion = {"Ciencias Básicas"} />      
                    <RamoE codigo = {"CBF-1001"} ramo = {"Calor y Ondas"} numero = {"13"} creditos = {"7"} prerequisitos = {"Cálculo II - Mecánica"} formacion = {"Ciencias Básicas"} />      
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-2'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </Link>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoE codigo = {"CIT-1000"} ramo = {"Programación"} numero = {"4"} creditos = {"6"} prerequisitos = {" - "} formacion = {"Ciencias de la Ingeniería"} />      
                    <RamoE codigo = {"CIT-1010"} ramo = {"Programación Avanzada"} numero = {"9"} creditos = {"6"} prerequisitos = {"Programación"} formacion = {"Ciencias de la Ingeniería"} />                     
                    <RamoE codigo = {"CIT-2006"} ramo = {"Estructura de Datos y Algoritmos"} numero = {"14"} creditos = {"6"} prerequisitos = {"Programación Avanzada"} formacion = {"Ingeniería Aplicada - Informática"} />      
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <RamoE codigo = {"FIC-1000"} ramo = {"Comunicación para la Ingeniería"} numero = {"5"} creditos = {"5"} prerequisitos = {" - "} formacion = {"Transversal"} />      
                    <RamoE codigo = {" - "} ramo = {"Minor / CFG"} numero = {"10"} creditos = {"5"} prerequisitos = {" - "} formacion = {"Transversal"} />                     
                    <RamoE codigo = {"CIT-2114"} ramo = {"Redes de Datos"} numero = {"15"} creditos = {"6"} prerequisitos = {"Programación Avanzada"} formacion = {"Ingeniería Aplicada - Telec."} />      
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