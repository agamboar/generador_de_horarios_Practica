import React, { Component } from 'react'
import ARamo from './RamoP'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2020Extra2 extends Component {

    state = {
        CBM1000: null, CBM1001: null, CBQ1000: null, CIT1000: null, FIC1000: null, CBM1002: null, CBM1003: null, CBF1000: null, CIT1010: null,
        CFG1: null, CBM1005: null, CBM1006: null, CBF1001: null, CIT2006: null, CIT2114: null, CIT2204: null, CIT2107: null, CBF1002: null, CIT2007: null,
        CIT2008: null, CIG1012: null, CII2750: null, CIT2108: null, CIT2205: null, CIT2009: null, CFG2: null, CIG1013: null, CII1000: null, CIT2109: null,
        CIT2110: null, CIT2010: null, CFG3: null, CIG1014: null, CIT2206: null, CIT2011: null, CIT2111: null, CIT2012: null, CFG4: null, CII2100: null,
        CIT2112: null, CIT2113: null, CIT2013: null, CIT2207: null, CITOPTINF1: null, CIT3100: null, CITOPTTEL1: null, CIT3000: null, CIT3202: null, CITOPTINF2: null,
        CITOPTTEL2: null, CITOPTTEL3: null, CITOPTINF3: null, CIT3203: null, CIT4000: null, CIT4001: null

    }

    componentDidMount = () => {
        for (let i = 0; i < this.props.ramos.length; i++) {
            const mov = i;
            const mov2 = this.props.ramos[mov].to_asignatura_real[0].codigo;
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
                    <ARamo codigo={"CII1000"} ramo={"Contabilidad y Costos"} state={this.state.CII1000} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <ARamo codigo={"CIT2107"} ramo={"Electrónica y Electrotecnia"} state={this.state.CIT2107} />
                    <ARamo codigo={"CIT2108"} ramo={"T. de Redes y Servicios"} state={this.state.CIT2108} />
                    <ARamo codigo={"CIT2109"} ramo={"Arq y Org de Comp."} state={this.state.CIT2109} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-1'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                    </div>  
                    <ARamo codigo={"CBF1002"} ramo={"Electricidad y Magnetismo"} state={this.state.CBF1002} />
                    <ARamo codigo={"CIT2205"} ramo={"Proyectos en TICs I"} state={this.state.CIT2205} />
                    <ARamo codigo={"CIT2110"} ramo={"Señales y Sistemas"} state={this.state.CIT2110} />
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/DatosExtraM2020-3'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </Link>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIT2007"} ramo={"Bases de Datos"} state={this.state.CIT2007} />
                    <ARamo codigo={"CIT2009"} ramo={"B. de Datos Avanzadas"} state={this.state.CIT2009} />
                    <ARamo codigo={"CIT2010"} ramo={"Sistemas Operativos"} state={this.state.CIT2010} />
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIT2008"} ramo={"Desarrollo Web y Móvil"} state={this.state.CIT2008} />
                    <ARamo codigo={"CFG2"} ramo={"Minor / CFG"} state={this.state.CFG2} />
                    <ARamo codigo={"CFG3"} ramo={"Minor / CFG"} state={this.state.CFG3} />
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>
                
                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIG1012"} ramo={"Inglés I"} state={this.state.CIG1012} />
                    <ARamo codigo={"CIG1013"} ramo={"Inglés II"} state={this.state.CIG1013} />
                    <ARamo codigo={"CIG1014"} ramo={"Inglés III"} state={this.state.CIG1014} />
                    <div className="col col-md-1"> </div>                     
                   
                </div>

                <br/>

                

                <div className="row row-cols-10">
                <div className="col"> 
                    <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </Link>
                </div>
                <ARamo codigo={"CIT4000"} ramo={"Práctica I"} state={this.state.CIT4000} />
                <div className="col"> </div>  
                <div className="col"> </div>              
                </div>
                <br/>
                <br/>

                
           </div>
     
           
        )
    }
}
