import React, { Component } from 'react'
import Ramo from './RamoC'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';




export default class Malla2010 extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="row row-cols-10">
                    <Semestre semestre = {"1"}/>
                    <Semestre semestre = {"2"}/>
                    <Semestre semestre = {"3"}/>
                    <Semestre semestre = {"4"}/>
                    <Semestre semestre = {"5"}/>
                    <Semestre semestre = {"6"}/>
                    <Semestre semestre = {"7"}/>
                    <Semestre semestre = {"8"}/>
                    <Semestre semestre = {"9"}/>
                    <Semestre semestre = {"10"}/>
                </div>

                <br/>                
                <div className="row row-cols-10">
                    <Ramo codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} state = {true}/>                    
                    <Ramo codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} state = {true} />                    
                    <Ramo codigo = {"CBM-1005"} ramo = {"Ecuaciones Diferenciales"} state = {true}/>                    
                    <Ramo codigo = {"CIT-2204"} ramo = {"Prob. y Estadisticas"}state = {true} />                                     
                    <Ramo codigo = {"CIT-2750"} ramo = {"Optimización"} state = {true}/>                    
                    <Ramo codigo = {"CIT-2000"} ramo = {"Introducción a la Economía"} state = {true}/>                    
                    <Ramo codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"} state = {true}/>
                    <Ramo codigo = {"CIT-2203"} ramo = {"Gestión Organizacional"} state = {false}/>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} state = {false}/>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"}state = {false} />
                </div>
                        
                <br/>

                <div className="row row-cols-10">                  
                    <Ramo codigo = {"CBM-1001"} ramo = {"Cálculo I"} state = {null}/>                    
                    <Ramo codigo = {"CBM-1003"} ramo = {"Cálculo II"} state = {null}/>                    
                    <Ramo codigo = {"CBM-1006"} ramo = {"Cálculo III"} state = {null}/>                    
                    <Ramo codigo = {"CBM-2200"} ramo = {"Métodos Numéricos"}state = {null} />                    
                    <Ramo codigo = {"CIT-2106"} ramo = {"Electrónica y Electrotecnia"} state = {null}/>                    
                    <Ramo codigo = {"CIT-2202"} ramo = {"Modelos Estoc. y Simul."} state = {null}/>              
                    <Ramo codigo = {"CIT-2005"} ramo = {"Ingeniería de Software"} state = {null}/>
                    <Ramo codigo = {"CIT-2004"} ramo = {"Arquitectura de Sistemas"} state = {null}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} state = {null}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} state = {null}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"CBQ-1000"} ramo = {"Química"}   state = {true}  />                    
                    <Ramo codigo = {"CBF-1000"} ramo = {"Mecánica"}   state = {true}   />                    
                    <Ramo codigo = {"CBF-1001"} ramo = {"Calor y Ondas"}   state = {true}  />                    
                    <Ramo codigo = {"CBF-1002"} ramo = {"Electricidad y Magnetismo"}   state = {true}    />                    
                    <Ramo codigo = {"CIT-2200"} ramo = {"Proyectos en TICs I"}state = {true} />                    
                    <Ramo codigo = {"CIT-2101"} ramo = {"Señales y Sistemas"} state = {true}/>                    
                    <Ramo codigo = {"CIT-2102"} ramo = {"Comunicacio -nes Digitales"}  state = {true} />
                    <Ramo codigo = {"CIT-2105"} ramo = {"Criptografía y Seg. en Redes"} state = {true}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"}state = {true} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} state = {true}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"CIT-1000"} ramo = {"Programación"} state = {false}/>                    
                    <Ramo codigo = {"CIT-1010"} ramo = {"Programación Avanzada"} state = {false}/>                    
                    <Ramo codigo = {"CIT-2000"} ramo = {"Estructura de Datos"}state = {false} />                    
                    <Ramo codigo = {"CIT-2001"} ramo = {"Dis. y Análisis de Algoritmos"}state = {false} />                    
                    <Ramo codigo = {"CIT-2002"} ramo = {"Bases de Datos"} state = {false}/>                    
                    <Ramo codigo = {"CIT-2003"} ramo = {"Sistemas Operativos"}state = {false} />                    
                    <Ramo codigo = {"FIC-1003"} ramo = {"Derecho en Ingeniería"} state = {false}/>
                    <Ramo codigo = {"CIT-2201"} ramo = {"Proyecto en TICs II"}state = {false} />
                    <Ramo codigo = {"CIT-3200"} ramo = {"Evaluación de Proyectos TIC"}state = {false} />
                    <Ramo codigo = {"CIT-3201"} ramo = {"Proyecto en TICs III"} state = {false}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"FIC-1000"} ramo = {"Comunicación para la Ing."} state = {true}/>                                   
                    <Ramo codigo = {"CFG1"} ramo = {"Minor / CFG"} state = {true}/>   
                    <Ramo codigo = {"CIT-2100"} ramo = {"Redes de Datos"} state = {true}/>                    
                    <Ramo codigo = {"CFG2"} ramo = {"Minor / CFG"} state = {true}/>  
                    <Ramo codigo = {"CFG3"} ramo = {"Minor / CFG"} state = {true}/>                    
                    <Ramo codigo = {"CIT-2103"} ramo = {"Sistemas Digitales"} state = {true} />                    
                    <Ramo codigo = {"CIT-2104"} ramo = {"Arq. de Computadores"} state = {true}/>
                    <Ramo codigo = {"CFG4"} ramo = {"Minor / CFG"} state = {true}/>  
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} state = {true}/>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} state = {true}/>
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <Ramo codigo = {"FIC-1001"} ramo = {"Inglés I"} state = {false}/>   
                <Ramo codigo = {"FIC-1002"} ramo = {"Inglés"} state = {null}/>  
                <div className="col"> </div>  
                <div className="col"> </div>     
                <div className="col"> </div>    
                <div className="col"> </div>
                <div className="col">
                    <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra1'}} >Ver + Detalles</Link>    
                </div>
             
                </div>

                
           </div>
     
           
        )
    }
}