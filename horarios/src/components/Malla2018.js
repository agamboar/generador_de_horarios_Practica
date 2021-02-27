import React, { Component } from 'react'
import Ramo from './Ramo'
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

                <div className="row row-cols-10 align-items-start">
                    <Ramo codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} color = {'#45C8FF'} />                    
                    <Ramo codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} color =  {'#45C8FF'} />                    
                    <Ramo codigo = {"CBM-1005"} ramo = {"Ecuaciones Diferenciales"} color =  {'#45C8FF'} />                    
                    <Ramo codigo = {"CIT-2204"} ramo = {"Probabilidades y Estadisticas"} color =  {'#4FFF80'}/>                  
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#4FFF80'}}>                           
                            <h6 className="card-title"><font size="2">CII-2750</font></h6>
                            <p className="card-text"><font size="2">Optimización &nbsp;</font></p> 
                        </div>
                    </div>                 
                    <Ramo codigo = {"CII-2000"} ramo = {"Introducción a la Economía"} color =  {'#4FFF80'}   />                    
                    <Ramo codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"} color =  {'#4FFF80'}  />
                    <Ramo codigo = {"CIT-2203"} ramo = {"Gestión Organizacional"} color =  {'#4FFF80'}   />
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} color =  {'#FFDA27'} />
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} color =  {'#FFDA27'}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#45C8FF'}}>                    
                            <h6 className="card-title"><font size="2">CBM-1001</font></h6>
                            <p className="card-text"><font size="2">Cálculo I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div> 
                    <div className="col"> 
                        <div className="card border-primary text-center"  style={{background: '#45C8FF'}}>                
                            <h6 className="card-title"><font size="2">CBM-1003</font></h6>
                            <p className="card-text"><font size="2">Cálculo II &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center"  style={{background: '#45C8FF'}}>              
                            <h6 className="card-title"><font size="2">CBM-1006</font></h6>
                            <p className="card-text"><font size="2">Cálculo III &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                   
                    <Ramo codigo = {"CBM-2000"} ramo = {"Métodos Numéricos"} color =  {'#4FFF80'}   />                    
                    <Ramo codigo = {"CIT-2106"} ramo = {"Electrónica y Electrotecnia"} color =  {'#4FFF80'}  />                    
                    <Ramo codigo = {"CIT-2202"} ramo = {"Modelos Estoc. y Simul."} color =  {'#4FFF80'}  />                    
                    <Ramo codigo = {"CIT-2005"} ramo = {"Ingeniería de Software"} color =  {'#FFDA27'}/>
                    <Ramo codigo = {"CIT-2004"} ramo = {"Arquitectura de Sistemas"} color =  {'#FFDA27'} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"}color =  {'#FFDA27'} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} color =  {'#FFDA27'}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center"  style={{background: '#45C8FF'}}>                         
                            <h6 className="card-title"><font size="2">CBQ-1000</font></h6>
                            <p className="card-text"><font size="2">Química &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#45C8FF'}}>                                           
                            <h6 className="card-title"><font size="2">CBF-1000</font></h6>
                            <p className="card-text"><font size="2">Mecánica &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#45C8FF'}}>                                         
                            <h6 className="card-title"><font size="2">CBF-1001</font></h6>
                            <p className="card-text"><font size="2">Calor y Ondas &nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CBF-1002"} ramo = {"Electricidad y Magnetismo"} color =  {'#45C8FF'} />                    
                    <Ramo codigo = {"CIT-2200"} ramo = {"Proyectos en TICs I"} color =  {'#FFDA27'} />                    
                    <Ramo codigo = {"CIT-2101"} ramo = {"Señales y Sistemas"} color =  {'#FFDA27'} />                    
                    <Ramo codigo = {"CIT-2102"} ramo = {"Comunicacio -nes Digitales"}color =  {'#FFDA27'} />
                    <Ramo codigo = {"CIT-2105"} ramo = {"Criptografía y Seg. en Redes"}color =  {'#FFDA27'} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} color =  {'#FFDA27'}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"}color =  {'#FFDA27'} />
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#4FFF80'}}>                  
                            <h6 className="card-title"><font size="2">CIT-1000</font></h6>
                            <p className="card-text"><font size="2">Programación &nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-1010"} ramo = {"Programación Avanzada"}  color =  {'#4FFF80'} />                    
                    <Ramo codigo = {"CIT-2000"} ramo = {"Estructura de Datos"} color =  {'#FFDA27'} />                    
                    <Ramo codigo = {"CIT-2001"} ramo = {"Dis. y Análisis de Algoritmos"} color =  {'#FFDA27'} />                    
                    <Ramo codigo = {"CIT-2002"} ramo = {"Bases de Datos"}  color =  {'#FFDA27'}/>                    
                    <Ramo codigo = {"CIT-2003"} ramo = {"Sistemas Operativos"} color =  {'#FFDA27'}/>                    
                    <Ramo codigo = {"FIC-1003"} ramo = {"Derecho en Ingeniería"} color =	 {'#FFB260'}/>
                    <Ramo codigo = {"CIT-2201"} ramo = {"Proyecto en TICs II"} color =  {'#FFDA27'}/>
                    <Ramo codigo = {"CIT-3200"} ramo = {"Evaluación de Proyectos TIC"} color =  {'#FFDA27'}/>
                    <Ramo codigo = {"CIT-3201"} ramo = {"Proyecto en TICs III"} color =  {'#FFDA27'}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"FIC-1000"} ramo = {"Comunicación para la Ing."} color =	 {'#FFB260'} />   
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#FFB260'}}>                   
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                                  
                    <Ramo codigo = {"CIT-2100"} ramo = {"Redes de Datos"} color =  {'#FFDA27'} />                    
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#FFB260'}}>                 
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#FFB260'}}>                  
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                   
                    <Ramo codigo = {"CIT-2103"} ramo = {"Sistemas Digitales"} color =  {'#FFDA27'}/>                    
                    <Ramo codigo = {"CIT-2104"} ramo = {"Arq. de Computadores"} color =  {'#FFDA27'}/>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#FFB260'}}>                  
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} color =  {'#FFDA27'}/>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"}color =  {'#FFDA27'} />
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> </div>    
                <div className="col"> </div>
                <div className="col"> </div>  
                <div className="col"> 
                    <div className="card border-primary text-center" style={{background: '#FFB260'}}>                  
                        <h6 className="card-title"><font size="2">CIG-1012</font></h6>
                        <p className="card-text"><font size="2">Inglés I</font></p> 
                    </div>
                </div>  
                <div className="col "> 
                    <div className="card border-primary text-center" style={{background: '#FFB260'}}>                  
                        <h6 className="card-title"><font size="2">CIG-1013</font></h6>
                        <p className="card-text"><font size="2">Inglés II</font></p> 
                    </div>
                </div>   
                <div className="col"> 
                    <div className="card border-primary text-center" style={{background: '#FFB260'}}>                 
                        <h6 className="card-title"><font size="2">CIG-1014</font></h6>
                        <p className="card-text"><font size="2">Inglés III</font></p> 
                    </div>                
                </div>    
                <div className="col"> </div>     
                <div className="col"> </div>    
                <div className="col"> </div>
                <div className="col"> </div>    
             
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
                <div className="col"> </div> 
                <div className="col "> 
                    <div className="card border-primary text-center" >                  
                        <h6 className="card-title"><font size="2">Práctica I</font></h6>
                    </div>
                </div>  
                <div className="col"> </div>
                <div className="col"> </div>     
                <div className="col"> </div>   
                <div className="col"> 
                    <div className="card border-primary text-center" >                  
                        <h6 className="card-title"><font size="2">Práctica II</font></h6>
                    </div>
                </div>                   
                
                <div className="col">                     
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2018/DatosExtraM2018-1'}} >Ver + Detalles</Link>    
                </div>
             
                </div>
                    <br/>
                    <br/>
                    <div className="row row-cols-10">
                    <div className="col col-md-2"> 
                        <div className="card border-dark text-center" style={{background: '#45C8FF'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col"> 
                             Formación en Ciencias Básicas
                    </div>  
                    <div className = "col"> Electivos 33XX: Área Informática</div> 
                    <div className = "col"/>
                </div>
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" style={{background: '#FFB260'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Formación Transversal
                    </div>  
                    <div className = "col"> Electivos 34XX: Área Telecomuniaciones</div>
                    <div className = "col"/>
                </div>
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" style={{background: '#4FFF80'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Formación en Ciencias de la Ingeniería
                    </div>  
                </div>
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" style={{background: '#FFDA27'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Formación en Ingeniería Aplicada
                    </div>  
                </div>
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center">                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Prácticas
                    </div>  
                </div>

                <br/>
                <br/>           
                
           </div>
     
           
        )
    }
}