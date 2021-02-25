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

                <div className="row row-cols-10">
                    <Ramo codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} color={'#28B463 '} />                    
                    <Ramo codigo = {"CBM-1005"} ramo = {"Ecuaciones Diferenciales"} color={'#28B463 '} />                    
                    <Ramo codigo = {"CIT-2204"} ramo = {"Prob. y Estadisticas"} />                    
                    <div className="col"> 
                        <div className="card border-primary text-center" >                  
                            <h6 className="card-title"><font size="2">CII-2750</font></h6>
                            <p className="card-text"><font size="2">Optimización &nbsp;</font></p> 
                        </div>
                    </div>                 
                    <Ramo codigo = {"CIT-2000"} ramo = {"Introducción a la Economía"} />                    
                    <Ramo codigo = {"CII-1000"} ramo = {"Contabilidad y Costos"} />
                    <Ramo codigo = {"CIT-2203"} ramo = {"Gestión Organizacional"} />
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} />
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} />
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}} >                  
                            <h6 className="card-title"><font size="2">CBM-1001</font></h6>
                            <p className="card-text"><font size="2">Cálculo I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div> 
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}} >                  
                            <h6 className="card-title"><font size="2">CBM-1003</font></h6>
                            <p className="card-text"><font size="2">Cálculo II &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}} >                  
                            <h6 className="card-title"><font size="2">CBM-1006</font></h6>
                            <p className="card-text"><font size="2">Cálculo III &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                   
                    <Ramo codigo = {"CBM-2200"} ramo = {"Métodos Numéricos"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CIT-2106"} ramo = {"Electrónica y Electrotecnia"} color={'#FF3E17'}/>                    
                    <Ramo codigo = {"CIT-2202"} ramo = {"Modelos Estoc. y Simul."} />              
                    <Ramo codigo = {"CIT-2005"} ramo = {"Ingeniería de Software"} color={'#FF3E17'}/>
                    <Ramo codigo = {"CIT-2004"} ramo = {"Arquitectura de Sistemas"} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} />
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                            <h6 className="card-title"><font size="2">CBQ-1000</font></h6>
                            <p className="card-text"><font size="2">Química &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                            <h6 className="card-title"><font size="2">CBF-1000</font></h6>
                            <p className="card-text"><font size="2">Mecánica &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                            <h6 className="card-title"><font size="2">CBF-1001</font></h6>
                            <p className="card-text"><font size="2">Calor y Ondas &nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CBF-1002"} ramo = {"Electricidad y Magnetismo"} color={'#FF3E17'}      />                    
                    <Ramo codigo = {"CIT-2200"} ramo = {"Proyectos en TICs I"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CIT-2101"} ramo = {"Señales y Sistemas"} />                    
                    <Ramo codigo = {"CIT-2102"} ramo = {"Comunicacio -nes Digitales"}   />
                    <Ramo codigo = {"CIT-2105"} ramo = {"Criptografía y Seg. en Redes"} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} />
                    <Ramo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} />
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}} >                  
                            <h6 className="card-title"><font size="2">CIT-1000</font></h6>
                            <p className="card-text"><font size="2">Programación &nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-1010"} ramo = {"Programación Avanzada"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CIT-2000"} ramo = {"Estructura de Datos"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CIT-2001"} ramo = {"Dis. y Análisis de Algoritmos"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CIT-2002"} ramo = {"Bases de Datos"} color={'#28B463 '}/>                    
                    <Ramo codigo = {"CIT-2003"} ramo = {"Sistemas Operativos"} color={'#FF3E17'}/>                    
                    <Ramo codigo = {"FIC-1003"} ramo = {"Derecho en Ingeniería"} />
                    <Ramo codigo = {"CIT-2201"} ramo = {"Proyecto en TICs II"} color={'#FF3E17'}/>
                    <Ramo codigo = {"CIT-3200"} ramo = {"Evaluación de Proyectos TIC"} color={'#FF3E17'}/>
                    <Ramo codigo = {"CIT-3201"} ramo = {"Proyecto en TICs III"} color={'#FF3E17'}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"FIC-1000"} ramo = {"Comunicación para la Ing."} color={'#28B463 '}/>   
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                                  
                    <Ramo codigo = {"CIT-2100"} ramo = {"Redes de Datos"} />                    
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <div className="col"> 
                        <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>                   
                    <Ramo codigo = {"CIT-2103"} ramo = {"Sistemas Digitales"} color={'#FF3E17'} />                    
                    <Ramo codigo = {"CIT-2104"} ramo = {"Arq. de Computadores"} color={'#FF3E17'}/>
                    <div className="col"> 
                        <div className="card border-primary text-center" >                  
                            <h6 className="card-title"><font size="2"> &nbsp; </font></h6>
                            <p className="card-text"><font size="2">Minor / CFG &nbsp;&nbsp;&nbsp;&nbsp;</font></p> 
                        </div>
                    </div>
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} />
                    <Ramo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} />
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <div className="col"> 
                    <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                        <h6 className="card-title"><font size="2">FIC-1012</font></h6>
                        <p className="card-text"><font size="2">Inglés I</font></p> 
                    </div>
                </div>  
                <div className="col "> 
                    <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                        <h6 className="card-title"><font size="2">FIC-1013</font></h6>
                        <p className="card-text"><font size="2">Inglés II</font></p> 
                    </div>
                </div>   
                <div className="col"> 
                    <div className="card border-primary text-center" style={{background: '#28B463 '}}>                  
                        <h6 className="card-title"><font size="2">FIC-1014</font></h6>
                        <p className="card-text"><font size="2">Inglés III</font></p> 
                    </div>                
                </div>    
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