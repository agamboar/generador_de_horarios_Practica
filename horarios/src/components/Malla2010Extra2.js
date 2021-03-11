import React, { Component } from 'react'
import RamoE from './RamoE'
import Semestre from './Semestre'
import { Link } from 'react-router-dom';



export default class Malla2010Extra2 extends Component {
    render() {
        return (



            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>
                    <Semestre semestre={"3"} />
                    <Semestre semestre={"4"} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />



                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>
                    <RamoE codigo={"CBM-1005"} ramo={"Ecuaciones Diferenciales"} numero={"11"} creditos={"6"} prerequisitos={"Álgebra Lineal - Cálculo II"} formacion={"Ciencias Básicas"} />
                    <RamoE codigo={"CIT-2204"} ramo={"Probabilidades y Estadistica"} numero={"16"} creditos={"6"} prerequisitos={"Cálculo II"} formacion={"Ciencias de la Ingeniería"} />
                    
                    
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <RamoE codigo={"CBM-1006"} ramo={"Cálculo III"} numero={"12"} creditos={"6"} prerequisitos={"Cálculo II"} formacion={"Ciencias Básicas"} />
                    <div className="col">
                        <div className="card border-primary">
                            <h6 className="card-title text-center"><font size="2">CBM-2000</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Métodos Numéricos
                                <br />
                                &nbsp;&nbsp;° Número: 17
                                <br />
                                &nbsp;&nbsp;° Creditos: 6
                                <br />
                                &nbsp;&nbsp;° Pre-Requisitos: Álgebra Lineal - Cálculo II
                                <br />
                                &nbsp;&nbsp;° Formación: Ciencias de la Ingeniería
                                <br />
                                <br />
                            </font></p>
                        </div>
                    </div>
                    
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010/DatosExtraM2010-1' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </Link>
                    </div>
                    <RamoE codigo={"CBF-1001"} ramo={"Calor y Ondas"} numero={"13"} creditos={"7"} prerequisitos={"Cálculo II - Mecánica"} formacion={"Ciencias Básicas"} />
                    <div className="col">
                        <div className="card border-primary">
                            <h6 className="card-title text-center"><font size="2">CBF-1002</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Electricidad y Magnetismo
                                <br />
                                &nbsp;&nbsp;° Número: 18
                                <br />
                                &nbsp;&nbsp;° Creditos: 7
                                <br />
                                &nbsp;&nbsp;° Pre-Requisitos: Ecuaciones Diferenciales -
                                <br />
                                &nbsp;&nbsp;&nbsp; Cálculo III
                                <br />
                                &nbsp;&nbsp;° Formación: Ciencias Básicas
                                <br />

                            </font></p>
                        </div>
                    </div>
                    
                    <div className="col col-md-1">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010/DatosExtraM2010-3' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </Link>
                    </div>

                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <RamoE codigo={"CIT-2000"} ramo={"Estructura de Datos"} numero={"14"} creditos={"6"} prerequisitos={"Programación Avanzada"} formacion={"Ingeniería Aplicada"} />
                    <div className="col">
                        <div className="card border-primary">
                            <h6 className="card-title text-center"><font size="2">CIT-2001</font></h6>
                            <p className="card-text"><font size="2">
                                &nbsp;&nbsp;° Nombre: Diseño y Análisis de Algoritmos
                                <br />
                                &nbsp;&nbsp;° Número: 19
                                <br />
                                &nbsp;&nbsp;° Creditos: 6
                                <br />
                                &nbsp;&nbsp;° Pre-Requisitos: Estructura de Datos
                                <br />
                                &nbsp;&nbsp;° Formación: Ingeniería Aplicada
                                <br />
                                <br />

                            </font></p>
                        </div>
                    </div>
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <RamoE codigo={"CIT-2100"} ramo={"Redes de Datos"} numero={"15"} creditos={"6"} prerequisitos={"Programación Avanzada"} formacion={"Ingeniería Aplicada"} />
                    <RamoE codigo={" - "} ramo={"Minor / CFG"} numero={"20"} creditos={"5"} prerequisitos={" - "} formacion={"Transversal"} />
                    <div className="col col-md-1"> </div>

                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <div className="col"> </div>
                    <RamoE codigo={"CIG-1001"} ramo={"Inglés I"} numero={"21"} creditos={"5"} prerequisitos={""} formacion={"Transversal"} />
                    
                    <div className="col col-md-1"> </div>

                </div>

                <br />



                <div className="row row-cols-10">
                    <div className="col">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
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