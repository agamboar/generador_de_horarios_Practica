import React, { Component } from 'react'
import ARamo from './RamoC'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class AvanceManual2018 extends Component {
    
    state = {
        CBM1000: '', CBM1001: '', CBQ1000: '', CIT1000: '', FIC1000: '', CBM1002: '', CBM1003: '', CBF1000: '', CIT1010: '', 
        CFG1: '', CBM1005: '', CBM1006: '', CBF1001: '', CIT2000: '', CIT2100: '', CIT2204: '', CBM2000: '', CBF1002: '', CIT2001: '', 
        CFG2: '', CIG1012: '', CII2750: '', CIT2106: '', CIT2200: '', CIT2002: '', CFG3: '', CIG1013: '', CII2000: '', CIT2202: '', 
        CIT2101: '', CIT2003: '', CIT2103: '', CII1000: '', CIT2005: '', CIT2102: '', FIC1003: '', CIT2104: '', CIT2203: '', CIT2004: '', 
        CIT2105: '', CIT2201: '', CFG4: '', CIT3310: '', CIT3410: '', CIT3412: '', CIT3200: '', CIT3312: '', CIT3311: '', CIT3411: '', 
        CIT3413: '', CIT3201: '', CIT3313: '', CIG1014: '' , CIT6001: '', CIT6002: ''
        
    }

    onSubmit = e => { 
        e.preventDefault();
        const Avance = { state: this.state}
        console.log(Avance)

    }
    
    render() {
        return (
            <div className="container">
                <br/>
            
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
                        
                <div className="row row-cols-10 ">
                    <ARamo codigo = {"CBM1000"} ramo = {"Álgebra y Geometría"} state= {this.state.CBM1000}  />                    
                    <ARamo codigo = {"CBM1002"} ramo = {"Álgebra Lineal"} state= {this.state.CBM1002}  />                    
                    <ARamo codigo = {"CBM1005"} ramo = {"Ecuaciones Difl."} state= {this.state.CBM1005} />                    
                    <ARamo codigo = {"CIT2204"} ramo = {"Prob. y Estadisticas"} state= {this.state.CIT2204} />                  
                    <ARamo codigo = {"CII2750"} ramo = {"Optimiza- ción"} state= {this.state.CII2750} />                 
                    <ARamo codigo = {"CII2000"} ramo = {"Introd. a la Economía"} state= {this.state.CII2000}  />                    
                    <ARamo codigo = {"CII1000"} ramo = {"Contabi- lidad y Costos"} state= {this.state.CII1000}  />
                    <ARamo codigo = {"CIT2203"} ramo = {"Gestión Organiza- cional"} state= {this.state.CIT2203} />
                    <ARamo codigo = {"CIT3310"} ramo = {"Electivo Profesional"} state= {this.state.CIT3310} />
                    <ARamo codigo = {"CIT3311"} ramo = {"Electivo Profesional"} state= {this.state.CIT3311} />
                </div>
                <br/>

                <div className="row row-cols-10">
                    
                    <ARamo codigo = {"CBM1001"} ramo = {"Cálculo I"} state= {this.state.CBM1001}    />  
                    <ARamo codigo = {"CBM1003"} ramo = {"Cálculo II"} state= {this.state.CBM1003}    />                                     
                    <ARamo codigo = {"CBM1006"} ramo = {"Cálculo III"} state= {this.state.CBM1006}   />                    
                    <ARamo codigo = {"CBM2000"} ramo = {"Métodos Numéricos"} state= {this.state.CBM2000}   />                    
                    <ARamo codigo = {"CIT2106"} ramo = {"Electrónica y Electro- tecnia"} state= {this.state.CIT2106}  />                    
                    <ARamo codigo = {"CIT2202"} ramo = {"Modelos Estoc. y Simul."} state= {this.state.CIT2202}   />                    
                    <ARamo codigo = {"CIT2005"} ramo = {"Ingeniería de Software"} state= {this.state.CIT2005} />
                    <ARamo codigo = {"CIT2004"} ramo = {"Arquitec- tura de Sistemas"} state= {this.state.CIT2004}  />
                    <ARamo codigo = {"CIT3410"} ramo = {"Electivo Profesional"}state= {this.state.CIT3410}  />
                    <ARamo codigo = {"CIT3411"} ramo = {"Electivo Profesional"} state= {this.state.CIT3411} />
                </div>

                <br/>

                <div className="row row-cols-10">
                    <ARamo codigo = {"CBQ1000"} ramo = {"Química"} state= {this.state.CBQ1000}  />                    
                    <ARamo codigo = {"CBF1000"} ramo = {"Mecánica"} state= {this.state.CBF1000}  />                    
                    <ARamo codigo = {"CBF1001"} ramo = {"Calor y Ondas"} state= {this.state.CBF1001}  />                    
                    <ARamo codigo = {"CBF1002"} ramo = {"Electricidad y Magnetismo"} state= {this.state.CBF1002}  />                    
                    <ARamo codigo = {"CIT2200"} ramo = {"Proyectos en TICs I"} state= {this.state.CIT2200}  />                    
                    <ARamo codigo = {"CIT2101"} ramo = {"Señales y Sistemas"} state= {this.state.CIT2101}  />                    
                    <ARamo codigo = {"CIT2102"} ramo = {"Comunica- ciones Digitales"}state= {this.state.CIT2102}  />
                    <ARamo codigo = {"CIT2105"} ramo = {"Criptografía y Seg. en Redes"}state= {this.state.CIT2105}  />
                    <ARamo codigo = {"CIT3412"} ramo = {"Electivo Profesional"} state= {this.state.CIT3412} />
                    <ARamo codigo = {"CIT3413"} ramo = {"Electivo Profesional"}state= {this.state.CIT3413}  />
                </div> 
                <br/>
                <div className="row row-cols-10">                    
                    <ARamo codigo = {"CIT1000"} ramo = {"Programa- ción"}  state= {this.state.CIT1000}  />                    
                    <ARamo codigo = {"CIT1010"} ramo = {"Programa- ción Avanzada"}  state= {this.state.CIT1010}  />                    
                    <ARamo codigo = {"CIT2000"} ramo = {"Estructura de Datos"} state= {this.state.CIT2000}  />                    
                    <ARamo codigo = {"CIT2001"} ramo = {"Dis. y Análisis de Alg."} state= {this.state.CIT2001}  />                    
                    <ARamo codigo = {"CIT2002"} ramo = {"Bases de Datos"}  state= {this.state.CIT2002} />                    
                    <ARamo codigo = {"CIT2003"} ramo = {"Sistemas Operativos"} state= {this.state.CIT2003} />                    
                    <ARamo codigo = {"FIC1003"} ramo = {"Derecho en Ingeniería"} state= {this.state.FIC1003} />
                    <ARamo codigo = {"CIT2201"} ramo = {"Proyecto en TICs II"} state= {this.state.CIT2201} />
                    <ARamo codigo = {"CIT3200"} ramo = {"Evaluación de Proy. TIC"} state= {this.state.CIT3200} />
                    <ARamo codigo = {"CIT3201"} ramo = {"Proyecto en TICs III"} state= {this.state.CIT3201} />
                </div>
                <br/>
                <div className="row row-cols-10">
                    <ARamo codigo = {"FIC1000"} ramo = {"Comunica- ción para la Ing."} state= {this.state.FIC1000}  />                                     
                    <ARamo codigo = {"CFG1"} ramo = {"Minor / CFG"} state= {this.state.CFG1}  />   
                    <ARamo codigo = {"CIT2100"} ramo = {"Redes de Datos"} state= {this.state.CIT2100}  />                    
                    <ARamo codigo = {"CFG2"} ramo = {"Minor / CFG"} state= {this.state.CFG2}  /> 
                    <ARamo codigo = {"CFG3"} ramo = {"Minor / CFG"} state= {this.state.CFG3}  />                   
                    <ARamo codigo = {"CIT2103"} ramo = {"Sistemas Digitales"} state= {this.state.CIT2103} />                    
                    <ARamo codigo = {"CIT2104"} ramo = {"Arquitec- tura de Comp."} state= {this.state.CIT2104} />
                    <ARamo codigo = {"CFG4"} ramo = {"Minor / CFG"} state= {this.state.CFG4}  /> 
                    <ARamo codigo = {"CIT3312"} ramo = {"Electivo Profesional"} state= {this.state.CIT3312} />
                    <ARamo codigo = {"CIT3313"} ramo = {"Electivo Profesional"}state= {this.state.CIT3313}  />
                </div>
                <br/>


            <div className="row row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <ARamo codigo = {"CIG1012"} ramo = {"Inglés I"}state= {this.state.CIG1012}  />
                <ARamo codigo = {"CIG1013"} ramo = {"Inglés II"}state= {this.state.CIG1013}  /> 
                <ARamo codigo = {"CIG1014"} ramo = {"Inglés II"}state= {this.state.CIG1014}  /> 
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
                <ARamo codigo = {"CIT6001"} ramo = {"Practia I"}state= {this.state.CIT6001}  /> 
                <div className="col"> </div>
                <div className="col"> </div>     
                <div className="col"> </div>   
                <ARamo codigo = {"CIT6002"} ramo = {"Practica II"}state= {this.state.CIT6002}  /> 
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
                <br/>
                <br/>
                <br/>
                
                

                
           </div>
     
           
        )

        
    }

}