import React, { Component } from 'react'
import ARamo from './ARamo'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class AvanceManual extends Component {
    
    state = {
        AR1: false, AR2: false, AR3: false, AR4: false, AR5: false, AR6: false, AR7: false, AR8: false, AR9: false, 
        AR10: false, AR11: false, AR12: false, AR13: false, AR14: false, AR15: false, AR16: false, AR17: false, AR18: false, AR19: false, 
        AR20: false, AR21: false, AR22: false, AR23: false, AR24: false, AR25: false, AR26: false, AR27: false, AR28: false, AR29: false, 
        AR30: false, AR31: false, AR32: false, AR33: false, AR34: false, AR35: false, AR36: false, AR37: false, AR38: false, AR39: false, 
        AR40: false, AR41: false, AR42: false, AR43: false, AR44: false, AR45: false, AR46: false, AR47: false, AR48: false, AR49: false, 
        AR50: false, AR51: false, AR52: false, AR53: false
        
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

            <div className="card border-0">
                <div className="row row-cols-10 align-items-start">
                    <div className="col border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange1_5} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange6_10} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange11_15}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange16_21} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange22_27} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange28_33} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange34_38} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange39_43} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange44_48} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                    <div className="col justify-content-center border-0">
                    &nbsp;&nbsp;<button type="button" className="btn btn-outline-success d-inline-block text-truncate border-0" onClick = {this.onChange49_53} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                        </svg>
                        </button>
                    </div> 
                </div>
            </div> 
                <br/>
                        {/*   show= {this.state.AR} onChange1 = {this.onChange}      */}
            
                <div className="row row-cols-10 ">
                    <ARamo codigo = {"CBM-1000"} ramo = {"Álgebra y Geometría"} show= {this.state.AR1} onChange1 = {this.onChange1} />                    
                    <ARamo codigo = {"CBM-1002"} ramo = {"Álgebra Lineal"} show= {this.state.AR6} onChange1 = {this.onChange6} />                    
                    <ARamo codigo = {"CBM-1005"} ramo = {"Ecuaciones Difl."} show= {this.state.AR11} onChange1 = {this.onChange11} />                    
                    <ARamo codigo = {"CIT-2204"} ramo = {"Prob. y Estadisticas"} show= {this.state.AR16} onChange1 = {this.onChange16}/>                  
                    <ARamo codigo = {"CII-2750"} ramo = {"Optimiza- ción"} show= {this.state.AR22} onChange1 = {this.onChange22}/>                 
                    <ARamo codigo = {"CII-2000"} ramo = {"Introd. a la Economía"} show= {this.state.AR28} onChange1 = {this.onChange28}  />                    
                    <ARamo codigo = {"CII-1000"} ramo = {"Contabi- lidad y Costos"} show= {this.state.AR33} onChange1 = {this.onChange33} />
                    <ARamo codigo = {"CIT-2203"} ramo = {"Gestión Organiza- cional"} show= {this.state.AR38} onChange1 = {this.onChange38}  />
                    <ARamo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} show= {this.state.AR43} onChange1 = {this.onChange43}/>
                    <ARamo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} show= {this.state.AR48} onChange1 = {this.onChange48}/>
                </div>
                <br/>

                <div className="row row-cols-10">
                    
                    <ARamo codigo = {"CBM-1001"} ramo = {"Cálculo I"} show= {this.state.AR2} onChange1 = {this.onChange2}   />  
                    <ARamo codigo = {"CBM-1003"} ramo = {"Cálculo II"} show= {this.state.AR7} onChange1 = {this.onChange7}   />                                     
                    <ARamo codigo = {"CBM-1006"} ramo = {"Cálculo III"} show= {this.state.AR12} onChange1 = {this.onChange12}   />                    
                    <ARamo codigo = {"CBM-2000"} ramo = {"Métodos Numéricos"} show= {this.state.AR17} onChange1 = {this.onChange17}   />                    
                    <ARamo codigo = {"CIT-2106"} ramo = {"Electrónica y Electro- tecnia"} show= {this.state.AR23} onChange1 = {this.onChange23}  />                    
                    <ARamo codigo = {"CIT-2202"} ramo = {"Modelos Estoc. y Simul."} show= {this.state.AR29} onChange1 = {this.onChange29}  />                    
                    <ARamo codigo = {"CIT-2005"} ramo = {"Ingeniería de Software"} show= {this.state.AR34} onChange1 = {this.onChange34}/>
                    <ARamo codigo = {"CIT-2004"} ramo = {"Arquitec- tura de Sistemas"} show= {this.state.AR39} onChange1 = {this.onChange39} />
                    <ARamo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"}show= {this.state.AR44} onChange1 = {this.onChange44} />
                    <ARamo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} show= {this.state.AR49} onChange1 = {this.onChange49}/>
                </div>

                <br/>

                <div className="row row-cols-10">
                    <ARamo codigo = {"CBQ-1000"} ramo = {"Química"} show= {this.state.AR3} onChange1 = {this.onChange3} />                    
                    <ARamo codigo = {"CBF-1000"} ramo = {"Mecánica"} show= {this.state.AR8} onChange1 = {this.onChange8} />                    
                    <ARamo codigo = {"CBF-1001"} ramo = {"Calor y Ondas"} show= {this.state.AR13} onChange1 = {this.onChange13} />                    
                    <ARamo codigo = {"CBF-1002"} ramo = {"Electricidad y Magnetismo"} show= {this.state.AR18} onChange1 = {this.onChange18} />                    
                    <ARamo codigo = {"CIT-2200"} ramo = {"Proyectos en TICs I"} show= {this.state.AR24} onChange1 = {this.onChange24} />                    
                    <ARamo codigo = {"CIT-2101"} ramo = {"Señales y Sistemas"} show= {this.state.AR30} onChange1 = {this.onChange30} />                    
                    <ARamo codigo = {"CIT-2102"} ramo = {"Comunica- ciones Digitales"}show= {this.state.AR35} onChange1 = {this.onChange35} />
                    <ARamo codigo = {"CIT-2105"} ramo = {"Criptografía y Seg. en Redes"}show= {this.state.AR40} onChange1 = {this.onChange40} />
                    <ARamo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"} show= {this.state.AR45} onChange1 = {this.onChange45}/>
                    <ARamo codigo = {"CIT-34XX"} ramo = {"Electivo Profesional"}show= {this.state.AR50} onChange1 = {this.onChange50} />
                </div> 
                <br/>
                <div className="row row-cols-10">                    
                    <ARamo codigo = {"CIT-1000"} ramo = {"Programa- ción"}  show= {this.state.AR4} onChange1 = {this.onChange4} />                    
                    <ARamo codigo = {"CIT-1010"} ramo = {"Programa- ción Avanzada"}  show= {this.state.AR9} onChange1 = {this.onChange9} />                    
                    <ARamo codigo = {"CIT-2000"} ramo = {"Estructura de Datos"} show= {this.state.AR14} onChange1 = {this.onChange14} />                    
                    <ARamo codigo = {"CIT-2001"} ramo = {"Dis. y Análisis de Alg."} show= {this.state.AR19} onChange1 = {this.onChange19} />                    
                    <ARamo codigo = {"CIT-2002"} ramo = {"Bases de Datos"}  show= {this.state.AR25} onChange1 = {this.onChange25}/>                    
                    <ARamo codigo = {"CIT-2003"} ramo = {"Sistemas Operativos"} show= {this.state.AR31} onChange1 = {this.onChange31}/>                    
                    <ARamo codigo = {"FIC-1003"} ramo = {"Derecho en Ingeniería"} show= {this.state.AR36} onChange1 = {this.onChange36}/>
                    <ARamo codigo = {"CIT-2201"} ramo = {"Proyecto en TICs II"} show= {this.state.AR41} onChange1 = {this.onChange41}/>
                    <ARamo codigo = {"CIT-3200"} ramo = {"Evaluación de Proy. TIC"} show= {this.state.AR46} onChange1 = {this.onChange46}/>
                    <ARamo codigo = {"CIT-3201"} ramo = {"Proyecto en TICs III"} show= {this.state.AR51} onChange1 = {this.onChange51}/>
                </div>
                <br/>
                <div className="row row-cols-10">
                    <ARamo codigo = {"FIC-1000"} ramo = {"Comunicación para la Ing."} show= {this.state.AR5} onChange1 = {this.onChange5} />                                     
                    <ARamo codigo = {"Minor / CFG"} ramo = {"Minor / CFG"} show= {this.state.AR10} onChange1 = {this.onChange10} />   
                    <ARamo codigo = {"CIT-2100"} ramo = {"Redes de Datos"} show= {this.state.AR15} onChange1 = {this.onChange15} />                    
                    <ARamo codigo = {"Minor / CFG"} ramo = {"Minor / CFG"} show= {this.state.AR20} onChange1 = {this.onChange20} /> 
                    <ARamo codigo = {"Minor / CFG"} ramo = {"Minor / CFG"} show= {this.state.AR26} onChange1 = {this.onChange26} />                   
                    <ARamo codigo = {"CIT-2103"} ramo = {"Sistemas Digitales"} show= {this.state.AR32} onChange1 = {this.onChange32}/>                    
                    <ARamo codigo = {"CIT-2104"} ramo = {"Arquitec- tura de Comp."} show= {this.state.AR37} onChange1 = {this.onChange37}/>
                    <ARamo codigo = {"Minor / CFG"} ramo = {"Minor / CFG"} show= {this.state.AR42} onChange1 = {this.onChange42} /> 
                    <ARamo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"} show= {this.state.AR47} onChange1 = {this.onChange47}/>
                    <ARamo codigo = {"CIT-33XX"} ramo = {"Electivo Profesional"}show= {this.state.AR52} onChange1 = {this.onChange52} />
                </div>
                <br/>


            <div className="row row-cols-10">
                <div className="col"> </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <ARamo codigo = {"CIG1012"} ramo = {"Inglés I"}show= {this.state.AR21} onChange1 = {this.onChange21} />
                <ARamo codigo = {"CIG1013"} ramo = {"Inglés II"}show= {this.state.AR27} onChange1 = {this.onChange27} /> 
                <ARamo codigo = {"CIG1014"} ramo = {"Inglés II"}show= {this.state.AR53} onChange1 = {this.onChange53} /> 
                <div className="col"> </div>     
                <div className="col"> </div>   
                <div className="col"> </div>                   
                <div className="col"> </div>
             
                </div>
                <br/>                         
                <div className="row row-cols-10">
                <div className="col"> 
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2018'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </Link>
                </div>
                <div className="col"> </div>
                <div className="col"> </div>  
                <div className="col"> </div>
                <div className="col"> </div>     
                <div className="col"> </div>
                <div className="col"> </div>    
                <div className="col"> </div>   
                <div className="col"> </div>                   
                
                <div className="col"> 
                    
                <div className="col ">
                    <div className="card border-0">
                        <button class="btn btn-primary rounded-pill " type="submit">Guardar</button>
                    </div> 
                </div>   
                    
                </div>
             
                </div>

                <br/>
                <br/>
                <br/>
                
                

                
           </div>
     
           
        )

        
    }


    onChange1_5 =(e) => {
        this.setState(prevState =>({
            AR1: true,
            AR2: true,
            AR3: true,
            AR4: true,
            AR5: true
        }))
    }
    onChange6_10 =(e) => {
        this.setState(prevState =>({
            AR6: true,
            AR7: true,
            AR8: true,
            AR9: true,
            AR10: true
        }))
    }
    onChange11_15 =(e) => {
        this.setState(prevState =>({
            AR11: true,
            AR12: true,
            AR13: true,
            AR14: true,
            AR15: true
        }))
    }
    onChange16_21 =(e) => {
        this.setState(prevState =>({
            AR16: true,
            AR17: true,
            AR18: true,
            AR19: true,
            AR20: true,
            AR21: true
        }))
    }
    onChange22_27 =(e) => {
        this.setState(prevState =>({
            AR22: true,
            AR23: true,
            AR24: true,
            AR25: true,
            AR26: true,
            AR27: true
        }))
    }
    onChange28_33 =(e) => {
        this.setState(prevState =>({
            AR28: true,
            AR29: true,
            AR30: true,
            AR31: true,
            AR32: true,
            AR53: true
        }))
    }
    onChange34_38 =(e) => {
        this.setState(prevState =>({
            AR33: true,
            AR34: true,
            AR35: true,
            AR36: true,
            AR37: true,
            
        }))
    }
    v
    onChange39_43 =(e) => {
        this.setState(prevState =>({
            AR38: true,
            AR39: true,
            AR40: true,
            AR41: true,
            AR42: true,
            
        }))
    }
    onChange44_48 =(e) => {
        this.setState(prevState =>({
            AR43: true,
            AR44: true,
            AR45: true,
            AR46: true,
            AR47: true,
            
        }))
    }
    onChange49_53 =(e) => {
        this.setState(prevState =>({
            AR48: true,
            AR49: true,
            AR50: true,
            AR51: true,
            AR52: true,
        }))
    }



    onChange1 =(e) => {
        this.setState(prevState =>({
            AR1: !prevState.AR1
        }))
    }
    onChange2 =(e) => {
        this.setState(prevState =>({
            AR2: !prevState.AR2
        }))
    }
    onChange3 =(e) => {
        this.setState(prevState =>({
            AR3: !prevState.AR3
        }))
    }
    onChange4 =(e) => {
        this.setState(prevState =>({
            AR4: !prevState.AR4
        }))
    }
    onChange5 =(e) => {
        this.setState(prevState =>({
            AR5: !prevState.AR5
        }))
    }
    onChange6 =(e) => {
        this.setState(prevState =>({
            AR6: !prevState.AR6
        }))
    }
    onChange7 =(e) => {
        this.setState(prevState =>({
            AR7: !prevState.AR7
        }))
    }
    onChange8 =(e) => {
        this.setState(prevState =>({
            AR8: !prevState.AR8
        }))
    }
    onChange9 =(e) => {
        this.setState(prevState =>({
            AR9: !prevState.AR9
        }))
    }

    onChange10 =(e) => {
        this.setState(prevState =>({
            AR10: !prevState.AR10
        }))
    }

    onChange11 =(e) => {
        this.setState(prevState =>({
            AR11: !prevState.AR11
        }))
    }
    onChange12 =(e) => {
        this.setState(prevState =>({
            AR12: !prevState.AR12
        }))
    }
    onChange13 =(e) => {
        this.setState(prevState =>({
            AR13: !prevState.AR13
        }))
    }
    onChange14 =(e) => {
        this.setState(prevState =>({
            AR14: !prevState.AR14
        }))
    }
    onChange15 =(e) => {
        this.setState(prevState =>({
            AR15: !prevState.AR15
        }))
    }
    onChange16 =(e) => {
        this.setState(prevState =>({
            AR16: !prevState.AR16
        }))
    }
    onChange17 =(e) => {
        this.setState(prevState =>({
            AR17: !prevState.AR17
        }))
    }
    onChange18 =(e) => {
        this.setState(prevState =>({
            AR18: !prevState.AR18
        }))
    }
    onChange19 =(e) => {
        this.setState(prevState =>({
            AR19: !prevState.AR19
        }))
    }

    onChange20 =(e) => {
        this.setState(prevState =>({
            AR20: !prevState.AR20
        }))
    }
    onChange21 =(e) => {
        this.setState(prevState =>({
            AR21: !prevState.AR21
        }))
    }
    onChange22 =(e) => {
        this.setState(prevState =>({
            AR22: !prevState.AR22
        }))
    }
    onChange23 =(e) => {
        this.setState(prevState =>({
            AR23: !prevState.AR23
        }))
    }
    onChange24 =(e) => {
        this.setState(prevState =>({
            AR24: !prevState.AR24
        }))
    }
    onChange25 =(e) => {
        this.setState(prevState =>({
            AR25: !prevState.AR25
        }))
    }
    onChange26 =(e) => {
        this.setState(prevState =>({
            AR26: !prevState.AR26
        }))
    }
    onChange27 =(e) => {
        this.setState(prevState =>({
            AR27: !prevState.AR27
        }))
    }
    onChange28 =(e) => {
        this.setState(prevState =>({
            AR28: !prevState.AR28
        }))
    }
    onChange29 =(e) => {
        this.setState(prevState =>({
            AR29: !prevState.AR29
        }))
    }

    onChange30 =(e) => {
        this.setState(prevState =>({
            AR30: !prevState.AR30
        }))
    }
    onChange31 =(e) => {
        this.setState(prevState =>({
            AR31: !prevState.AR31
        }))
    }
    onChange32 =(e) => {
        this.setState(prevState =>({
            AR32: !prevState.AR32
        }))
    }
    onChange33 =(e) => {
        this.setState(prevState =>({
            AR33: !prevState.AR33
        }))
    }
    onChange34 =(e) => {
        this.setState(prevState =>({
            AR34: !prevState.AR34
        }))
    }
    onChange35 =(e) => {
        this.setState(prevState =>({
            AR35: !prevState.AR35
        }))
    }
    onChange36 =(e) => {
        this.setState(prevState =>({
            AR36: !prevState.AR36
        }))
    }
    onChange37 =(e) => {
        this.setState(prevState =>({
            AR37: !prevState.AR37
        }))
    }
    onChange38 =(e) => {
        this.setState(prevState =>({
            AR38: !prevState.AR38
        }))
    }
    onChange39 =(e) => {
        this.setState(prevState =>({
            AR39: !prevState.AR39
        }))
    }
    onChange40 =(e) => {
        this.setState(prevState =>({
            AR40: !prevState.AR40
        }))
    }
    onChange41 =(e) => {
        this.setState(prevState =>({
            AR41: !prevState.AR41
        }))
    }
    onChange42 =(e) => {
        this.setState(prevState =>({
            AR42: !prevState.AR42
        }))
    }
    onChange43 =(e) => {
        this.setState(prevState =>({
            AR43: !prevState.AR43
        }))
    }
    onChange44 =(e) => {
        this.setState(prevState =>({
            AR44: !prevState.AR44
        }))
    }
    onChange45 =(e) => {
        this.setState(prevState =>({
            AR45: !prevState.AR45
        }))
    }
    onChange46 =(e) => {
        this.setState(prevState =>({
            AR46: !prevState.AR46
        }))
    }
    onChange47 =(e) => {
        this.setState(prevState =>({
            AR47: !prevState.AR47
        }))
    }
    onChange48 =(e) => {
        this.setState(prevState =>({
            AR48: !prevState.AR48
        }))
    }
    onChange49 =(e) => {
        this.setState(prevState =>({
            AR49: !prevState.AR49
        }))
    }

    onChange50 =(e) => {
        this.setState(prevState =>({
            AR50: !prevState.AR50
        }))
    }
    onChange51 =(e) => {
        this.setState(prevState =>({
            AR51: !prevState.AR51
        }))
    }
    onChange52 =(e) => {
        this.setState(prevState =>({
            AR52: !prevState.AR52
        }))
    }
    onChange53 =(e) => {
        this.setState(prevState =>({
            AR53: !prevState.AR53
        }))
    }
    
}
