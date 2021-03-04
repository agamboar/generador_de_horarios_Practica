import React, { Component } from 'react'
import ARamo from './RamoP'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2018Extra2 extends Component {
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
                    <ARamo codigo={"CIT2204"} ramo={"Prob. y Estadisticas"} state={this.state.CIT2204} />
                    <ARamo codigo={"CII2750"} ramo={"Optimización"} state={this.state.CII2750} />
                    <ARamo codigo={"CII2000"} ramo={"Introducción a la Economía"} state={this.state.CII2000} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>                      
                    <ARamo codigo={"CBM2000"} ramo={"Métodos Numéricos"} state={this.state.CBM2000} />
                    <ARamo codigo={"CIT2106"} ramo={"Electrónica y Electrotecnia"} state={this.state.CIT2106} />
                    <ARamo codigo={"CIT2202"} ramo={"Modelos Estoc. y Simul."} state={this.state.CIT2202} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra1'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                    </div> 
                    <ARamo codigo={"CBF1002"} ramo={"Electricidad y Magnetismo"} state={this.state.CBF1002} />
                    <ARamo codigo={"CIT2200"} ramo={"Proyectos en TICs I"} state={this.state.CIT2200} />
                    <ARamo codigo={"CIT2101"} ramo={"Señales y Sistemas"} state={this.state.CIT2101} />
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra3'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </Link>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIT2001"} ramo={"Dis. y Análisis de Alg."} state={this.state.CIT2001} />
                    <ARamo codigo={"CIT2002"} ramo={"Bases de Datos"} state={this.state.CIT2002} />
                    <ARamo codigo={"CIT2003"} ramo={"Sistemas Operativos"} state={this.state.CIT2003} />
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CFG2"} ramo={"Minor / CFG"} state={this.state.CFG2} />
                    <ARamo codigo={"CFG3"} ramo={"Minor / CFG"} state={this.state.CFG3} />
                    <ARamo codigo={"CIT2103"} ramo={"Sistemas Digitales"} state={this.state.CIT2103} />      
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>
                
                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIG1012"} ramo={"Inglés I"} state={this.state.CIG1012} />
                    <ARamo codigo={"CIG1013"} ramo={"Inglés II"} state={this.state.CIG1013} />
                    <ARamo codigo={"CIG1014"} ramo={"Inglés II"} state={this.state.CIG1014} /> 
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