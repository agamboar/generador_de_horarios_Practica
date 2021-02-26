import React, { Component } from 'react'
import Ramo from './RamoC'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';




export default class Malla2010 extends Component {

    state = {    
        CBM1000: '', CBM1001: '', CBQ1000: '', CIT1000: '', FIC1000: '', CBM1002: '', CBM1003: '', CBF1000: '', CIT1010: '', 
        CFG1: '', CBM1005: '', CBM1006: '', CBF1001: '', CIT2000: '', CIT2100: '', CIT2204: '', CBM2000: '', CBF1002: '', CIT2001: '', 
        CFG2: '', FIC1001: '', CII2750: '', CIT2106: '', CIT2200: '', CIT2002: '', CFG3: '', FIC1002: '', CII2000: '', CIT2202: '', 
        CIT2101: '', CIT2003: '', CIT2103: '', CII1000: '', CIT2005: '', CIT2102: '', FIC1003: '', CIT2104: '', CIT2203: '', CIT2004: '', 
        CIT2105: '', CIT2201: '', CFG4: '', CIT3310: '', CIT3410: '', CIT3411: '', CIT3200: '', CIT3311: '', CIT3312: '', CIT3412: '', 
        CIT3413: '', CIT3201: '', CIT3313: '' , CIT5001: '' , CIT5002: ''
        
    }
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
                    <Ramo codigo = {"CBM1000"} ramo = {"Álgebra y Geometría"} state = {this.state.CBM1000}/>                    
                    <Ramo codigo = {"CBM1002"} ramo = {"Álgebra Lineal"} state = {this.state.CBM1002} />                    
                    <Ramo codigo = {"CBM1005"} ramo = {"Ecuaciones Diferenciales"} state = {this.state.CBM1005}/>                    
                    <Ramo codigo = {"CIT2204"} ramo = {"Prob. y Estadisticas"}state = {this.state.CIT2204} />                                     
                    <Ramo codigo = {"CIT2750"} ramo = {"Optimización"} state = {this.state.CIT2750}/>                    
                    <Ramo codigo = {"CIT2000"} ramo = {"Introducción a la Economía"} state = {this.state.CIT2000}/>                    
                    <Ramo codigo = {"CII1000"} ramo = {"Contabilidad y Costos"} state = {this.state.CII1000}/>
                    <Ramo codigo = {"CIT2203"} ramo = {"Gestión Org."} state = {this.state.CIT2203}/>
                    <Ramo codigo = {"CIT3310"} ramo = {"Electivo Profesional"} state = {this.state.CIT3310}/>
                    <Ramo codigo = {"CIT3311"} ramo = {"Electivo Profesional"}state = {this.state.CIT3311} />
                </div>
                        
                <br/>

                <div className="row row-cols-10">                  
                    <Ramo codigo = {"CBM1001"} ramo = {"Cálculo I"} state = {this.state.CBM1001}/>                    
                    <Ramo codigo = {"CBM1003"} ramo = {"Cálculo II"} state = {this.state.CBM1003}/>                    
                    <Ramo codigo = {"CBM1006"} ramo = {"Cálculo III"} state = {this.state.CBM1006}/>                    
                    <Ramo codigo = {"CBM2200"} ramo = {"Métodos Numéricos"}state = {this.state.CBM2200} />                    
                    <Ramo codigo = {"CIT2106"} ramo = {"Electrónica y Electrotecnia"} state = {this.state.CIT2106}/>                    
                    <Ramo codigo = {"CIT2202"} ramo = {"Modelos Estoc. y Simul."} state = {this.state.CIT2202}/>              
                    <Ramo codigo = {"CIT2005"} ramo = {"Ingeniería de Software"} state = {this.state.CIT2005}/>
                    <Ramo codigo = {"CIT2004"} ramo = {"Arquitectura de Sistemas"} state = {this.state.CIT2004}/>
                    <Ramo codigo = {"CIT3410"} ramo = {"Electivo Profesional"} state = {this.state.CIT3410}/>
                    <Ramo codigo = {"CIT3411"} ramo = {"Electivo Profesional"} state = {this.state.CIT3411}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"CBQ1000"} ramo = {"Química"}   state = {this.state.CBQ1000}  />                    
                    <Ramo codigo = {"CBF1000"} ramo = {"Mecánica"}   state = {this.state.CBF1000}   />                    
                    <Ramo codigo = {"CBF1001"} ramo = {"Calor y Ondas"}   state = {this.state.CBF1001}  />                    
                    <Ramo codigo = {"CBF1002"} ramo = {"Electricidad y Magnetismo"}   state = {this.state.CBF1002}    />                    
                    <Ramo codigo = {"CIT2200"} ramo = {"Proyectos en TICs I"}state = {this.state.CIT2200} />                    
                    <Ramo codigo = {"CIT2101"} ramo = {"Señales y Sistemas"} state = {this.state.CIT2101}/>                    
                    <Ramo codigo = {"CIT2102"} ramo = {"Comunicacio -nes Digitales"}  state = {this.state.CIT2102} />
                    <Ramo codigo = {"CIT2105"} ramo = {"Criptografía y Seg. en Redes"} state = {this.state.CIT2105}/>
                    <Ramo codigo = {"CIT3412"} ramo = {"Electivo Profesional"}state = {this.state.CIT3412} />
                    <Ramo codigo = {"CIT3413"} ramo = {"Electivo Profesional"} state = {this.state.CIT3413}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"CIT1000"} ramo = {"Programación"} state = {this.state.CIT1000}/>                    
                    <Ramo codigo = {"CIT1010"} ramo = {"Programación Avanzada"} state = {this.state.CIT1010}/>                    
                    <Ramo codigo = {"CIT2000"} ramo = {"Estructura de Datos"}state = {this.state.CIT2000} />                    
                    <Ramo codigo = {"CIT2001"} ramo = {"Dis. y Análisis de Algoritmos"}state = {this.state.CIT2001} />                    
                    <Ramo codigo = {"CIT2002"} ramo = {"Bases de Datos"} state = {this.state.CIT2002}/>                    
                    <Ramo codigo = {"CIT2003"} ramo = {"Sistemas Operativos"}state = {this.state.CIT2003} />                    
                    <Ramo codigo = {"FIC1003"} ramo = {"Derecho en Ingeniería"} state = {this.state.FIC1003}/>
                    <Ramo codigo = {"CIT2201"} ramo = {"Proyecto en TICs II"}state = {this.state.CIT2201} />
                    <Ramo codigo = {"CIT3200"} ramo = {"Evaluación de Proyectos TIC"}state = {this.state.CIT3200} />
                    <Ramo codigo = {"CIT3201"} ramo = {"Proyecto en TICs III"} state = {this.state.CIT3201}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <Ramo codigo = {"FIC1000"} ramo = {"Comunicación para la Ing."} state = {this.state.FIC1000}/>                                   
                    <Ramo codigo = {"CFG1"} ramo = {"Minor / CFG"} state = {this.state.CFG1}/>   
                    <Ramo codigo = {"CIT2100"} ramo = {"Redes de Datos"} state = {this.state.CIT2100}/>                    
                    <Ramo codigo = {"CFG2"} ramo = {"Minor / CFG"} state = {this.state.CFG2}/>  
                    <Ramo codigo = {"CFG3"} ramo = {"Minor / CFG"} state = {this.state.CFG3}/>                    
                    <Ramo codigo = {"CIT2103"} ramo = {"Sistemas Digitales"} state = {this.state.CIT2103} />                    
                    <Ramo codigo = {"CIT2104"} ramo = {"Arq. de Comp."} state = {this.state.CIT2104}/>
                    <Ramo codigo = {"CFG4"} ramo = {"Minor / CFG"} state = {this.state.CFG4}/>  
                    <Ramo codigo = {"CIT3312"} ramo = {"Electivo Profesional"} state = {this.state.CIT3312}/>
                    <Ramo codigo = {"CIT3313"} ramo = {"Electivo Profesional"} state = {this.state.CIT3313}/>
                </div>

                <br/>
                
                <div className="row row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <Ramo codigo = {"FIC1001"} ramo = {"Inglés I"} state = {this.state.FIC1001}/>   
                <Ramo codigo = {"FIC1002"} ramo = {"Inglés II"} state = {this.state.FIC1002}/>  
                <div className="col"> </div>  
                <div className="col"> </div>     
                <div className="col"> </div>    
                <div className="col"> </div>
                <div className="col"> </div>             
                </div>
                <br/>
                <div className="row row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <div className="col"> </div>     
                <Ramo codigo = {"CIT5001"} ramo = {"Practica I"} state = {this.state.CIT5001}/>  
                <div className="col"> </div>  
                <div className="col"> </div>     
                <div className="col"> </div>    
                <Ramo codigo = {"CIT50012"} ramo = {"Practica II"} state = {this.state.CIT50012}/>  
                <div className="col">
                    <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra1'}} >Ver + Detalles</Link>    
                </div>
             
                </div>
                <br/>
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Ramo No Cursado
                    </div>  
                </div>
             
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" style={{background: '#28B463'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Ramo Aprobado
                    </div>  
                </div>
               
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1"> 
                        <div className="card border-dark text-center" style={{background: '#FF3E17'}} >                  
                            <br/>   
                        </div>
                    </div>  
                    <div className="col mt-1"> 
                             Ramo Crítico
                    </div>  
                </div>

                
           </div>
     
           
        )
    }
}