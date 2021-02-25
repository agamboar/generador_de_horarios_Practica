import React, { Component } from 'react'
import Ramo from './Ramo'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';


export default class Malla2010 extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="row  row-cols-10">
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

                <div className="row  row-cols-10">
                    <Ramo codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} color =  {'#45C8FF'}/>                    
                    <Ramo codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} color =  {'#45C8FF'}/>                    
                    <Ramo codigo = {"CBM-1005"} ramo = {"Ecuaciones Diferenciales"} color =  {'#45C8FF'}/>                    
                    <Ramo codigo = {"CIT-2204"} ramo = {"Probabilidades y Estadisticas"} color =  {'#4FFF80'}  
 />                    
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#4FFF80'}}>                     
                            <h6 className="card-title"><font size="2">CII-2750</font></h6>
                            <p className="card-text"><font size="2">Optimización &nbsp;</font></p> 
                        </div>
                    </div>                 
                    
                    <Ramo codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"}color =  {'#4FFF80'}  />
                    <Ramo codigo = {"CIT-2206"} ramo = {"Gestión Organizacional"} color =  {'#4FFF80'} />
                    <Ramo codigo = {"CII-2100"} ramo = {"Introducción a la Economía"} color =  {'#4FFF80'}  />                    
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"}  color =  {'#BABABA'}/>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} color =  {'#BABABA'}/>
                </div>

                <br/>

                <div className="row  row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#45C8FF'}}>                       
                            <h6 className="card-title"><font size="2">CBM-1001</font></h6>
                            <p className="card-text"><font size="2">Cálculo I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div> 
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#45C8FF'}}>                  
                            <h6 className="card-title"><font size="2">CBM-1003</font></h6>
                            <p className="card-text"><font size="2">Cálculo II &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#45C8FF'}}>                  
                            <h6 className="card-title"><font size="2">CBM-1006</font></h6>
                            <p className="card-text"><font size="2">Cálculo III &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                   
                    <Ramo codigo = {"CIT-2107"} ramo = {"Electrónica y Electrotecnia"} color =  {'#4FFF80'}/>                    
                    <Ramo codigo = {"CIT-2108"} ramo = {"T. de Redes y Servicios"} color =  {'#F2B8FF'}/>                    
                    <Ramo codigo = {"CIT-2109"} ramo = {"Arq. y Org. de Computadores"} color =  {'#F2B8FF'}/>                    
                    <Ramo codigo = {"CIT-2011"} ramo = {"Sistemas Distribuidos"} color =  {'#BABABA'} />
                    <Ramo codigo = {"CIT-2112"} ramo = {"Tecnologías Inalámbricas"} color =  {'#F2B8FF'}/>
                    <Ramo codigo = {"CIT-3100"} ramo = {"Arquitecturas Emergentes"} color =  {'#F2B8FF'}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} color =  {'#F2B8FF'}/>
                </div>

                <br/>

                <div className="row  row-cols-10">
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
                        <div className="card border-primary text-center"  style={{background: '#45C8FF'}}>                     
                            <h6 className="card-title"><font size="2">CBF-1001</font></h6>
                            <p className="card-text"><font size="2">Calor y Ondas &nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CBF-1002"} ramo = {"Electricidad y Magnetismo"} color = {'#45C8FF'} />                    
                    <Ramo codigo = {"CIT-2205"} ramo = {"Proyectos en TICs I"} color =  {'#FFDA27'} />                    
                    <Ramo codigo = {"CIT-2110"} ramo = {"Señales y Sistemas"} color =  {'#F2B8FF'}/>                    
                    <Ramo codigo = {"CIT-2111"} ramo = {"Comunicacio -nes Digitales"} color =  {'#F2B8FF'}/>
                    <Ramo codigo = {"CIT-2113"} ramo = {"Criptografía y Seg. en Redes"} color =  {'#F2B8FF'}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} color =  {'#F2B8FF'}/>
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} color =  {'#F2B8FF'}/>
                </div>

                <br/>

                <div className="row  row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center"  style={{background: '#4FFF80'}}>                  
                            <h6 className="card-title"><font size="2">CIT-1000</font></h6>
                            <p className="card-text"><font size="2">Programación &nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-1010"} ramo = {"Programación Avanzada"} color = {'#4FFF80'} />                    
                    <Ramo codigo = {"CIT-2006"} ramo = {"Estruct. de Datos y Alg."} color =  {'#BABABA'}/>                    
                    <Ramo codigo = {"CIT-2007"} ramo = {"Bases de Datos"} color =  {'#BABABA'}/>                    
                    <Ramo codigo = {"CIT-2009"} ramo = {"B. de Datos Avanzadas"} color =  {'#BABABA'}/>                    
                    <Ramo codigo = {"CIT-2010"} ramo = {"Sistemas Operativos"}color =  {'#BABABA'} />                    
                    <Ramo codigo = {"CIT-2012"} ramo = {"Ingeniería de Software"} color =  {'#BABABA'}/>
                    <Ramo codigo = {"CIT-2213"} ramo = {"Inteligencia Artifical"} color =  {'#BABABA'}/>
                    <Ramo codigo = {"CIT-3000"} ramo = {"Arquitectura de Software"} color =  {'#BABABA'}/>
                    <Ramo codigo = {"CIT-33xx"} ramo = {"Electivo Profesional"} color =  {'#BABABA'}/>
                </div>

                <br/>

                <div className="row  row-cols-10">
                    <Ramo codigo = {"FIC-1000"} ramo = {"Comunicación para la Ing."} color = {'#FFB260'} />   
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#FFB260'}}>                 
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                                  
                    <Ramo codigo = {"CIT-2114"} ramo = {"Redes de Datos"} color =  {'#F2B8FF'}/>                    
                    <Ramo codigo = {"CIT-2008"} ramo = {"Desarrollo Web y Móvil"} color =  {'#BABABA'}/>                    
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
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#FFB260'}}>                   
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-2207"} ramo = {"Evaluación de Proyectos TIC"} color =  {'#FFDA27'}/>
                    <div className="col"> 
                        <div className="card border-primary text-center"  style={{background: '#FFDA27'}}>                   
                            <h6 className="card-title"><font size="2"> CIT-3202 </font></h6>
                            <p className="card-text"><font size="2">Data Science &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-3203"} ramo = {"Proyecto en TICs II"} color =  {'#FFDA27'}/>
                </div>

                <br/>
                
                <div className="row  row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <div className="col"> 
                    <div className="card border-primary text-center" style={{background: '#FFB260'}}>                  
                        <h6 className="card-title"><font size="2">FIC-1012</font></h6>
                        <p className="card-text"><font size="2">Inglés I</font></p> 
                    </div>
                </div>  
                <div className="col "> 
                    <div className="card border-primary text-center" style={{background: '#FFB260'}}>                  
                        <h6 className="card-title"><font size="2">FIC-1013</font></h6>
                        <p className="card-text"><font size="2">Inglés II</font></p> 
                    </div>
                </div>  
                <div className="col"> 
                    <div className="card border-primary text-center" style={{background: '#FFB260'}}>                   
                        <h6 className="card-title"><font size="2">FIC-1014</font></h6>
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
                        <h6 className="card-title"><font size="2">CIT-4000</font></h6>
                        <p className="card-text"><font size="2">Práctica I</font></p> 
                    </div>
                </div>  
                <div className="col"> </div>
                <div className="col"> </div>     
                <div className="col"> </div>   
                <div className="col"> 
                    <div className="card border-primary text-center" >                  
                        <h6 className="card-title"><font size="2">CIT-4001</font></h6>
                        <p className="card-text"><font size="2">Práctica II</font></p> 
                    </div>
                </div>                   
                
                <div className="col">                     
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-1'}} >Ver + Detalles</Link>     
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
                        <div className="card border-dark text-center" style={{background: '#BABABA'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Formación en Ciencias de la Ingeniería
                    </div>  
                </div>
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" style={{background: '#F2B8FF'}} >                  
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