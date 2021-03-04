import React, { Component } from 'react'
import ARamo from './RamoP'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2018Extra1 extends Component {

    state = {
        CBM1000: null, CBM1001: null, CBQ1000: null, CIT1000: null, FIC1000: null, CBM1002: null, CBM1003: null, CBF1000: null, CIT1010: null,
        CFG1: null, CBM1005: null, CBM1006: null, CBF1001: null, CIT2000: null, CIT2100: null, CIT2204: null, CBM2000: null, CBF1002: null, CIT2001: null,
        CFG2: null, CIG1012: null, CII2750: null, CIT2106: null, CIT2200: null, CIT2002: null, CFG3: null, CIG1013: null, CII2000: null, CIT2202: null,
        CIT2101: null, CIT2003: null, CIT2103: null, CII1000: null, CIT2005: null, CIT2102: null, FIC1003: null, CIT2104: null, CIT2203: null, CIT2004: null,
        CIT2105: null, CIT2201: null, CFG4: null, CIT3310: null, CIT3410: null, CIT3412: null, CIT3200: null, CIT3312: null, CIT3311: null, CIT3411: null,
        CIT3413: null, CIT3201: null, CIT3313: null, CIG1014: null, CIT6001: null, CIT6002: null

    }

    componentDidMount = () => {
        for (let i = 0; i < this.props.ramos.length; i++) {
            const mov = i;
            const mov2 = this.props.ramos[mov].to_asignatura_real[0];
            this.setState({
                [mov2]: [this.props.ramos[mov].es , this.props.ramos[mov].ls, this.props.ramos[mov].ef , this.props.ramos[mov].lf, this.props.ramos[mov].holgura]
            })
        }
    }
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
                    <ARamo codigo={"CBM1000"} ramo={"Álgebra y Geometría"} state={this.state.CBM1000} />
                    <ARamo codigo={"CBM1002"} ramo={"Álgebra Lineal"} state={this.state.CBM1002} />
                    <ARamo codigo={"CBM1005"} ramo={"Ecuaciones Diferenciales"} state={this.state.CBM1005} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <ARamo codigo={"CBM1001"} ramo={"Cálculo I"} state={this.state.CBM1001} />
                    <ARamo codigo={"CBM1003"} ramo={"Cálculo II"} state={this.state.CBM1003} />
                    <ARamo codigo={"CBM1006"} ramo={"Cálculo III"} state={this.state.CBM1006} />               
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </div> 
                    <ARamo codigo={"CBQ1000"} ramo={"Química"} state={this.state.CBQ1000} />
                    <ARamo codigo={"CBF1000"} ramo={"Mecánica"} state={this.state.CBF1000} />
                    <ARamo codigo={"CBF1001"} ramo={"Calor y Ondas"} state={this.state.CBF1001} /> 
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
                    <ARamo codigo={"CIT1000"} ramo={"Programación"} state={this.state.CIT1000} />
                    <ARamo codigo={"CIT1010"} ramo={"Programación Avanzada"} state={this.state.CIT1010} />
                    <ARamo codigo={"CIT2000"} ramo={"Estructura de Datos"} state={this.state.CIT2000} />
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"FIC1000"} ramo={"Comunicación para la Ing."} state={this.state.FIC1000} />
                    <ARamo codigo={"CFG1"} ramo={"Minor / CFG"} state={this.state.CFG1} />
                    <ARamo codigo={"CIT2100"} ramo={"Redes de Datos"} state={this.state.CIT2100} />
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