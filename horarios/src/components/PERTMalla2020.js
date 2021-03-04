import React, { Component } from 'react'
import ARamo from './RamoC'
import Semestre from './Semestre'
import { Link } from 'react-router-dom';


export default class AvanceManual2020 extends Component {
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
            const mov2 = this.props.ramos[mov].to_asignatura_real[0];
            this.setState({
                [mov2]: [this.props.ramos[mov].critico, this.props.ramos[mov].es]
            })
        }
    }

    render() {
        return (



            <div className="container">
                <br />
                <div className="row  row-cols-10">
                    <Semestre semestre={"1"} />
                    <Semestre semestre={"2"} />
                    <Semestre semestre={"3"} />
                    <Semestre semestre={"4"} />
                    <Semestre semestre={"5"} />
                    <Semestre semestre={"6"} />
                    <Semestre semestre={"7"} />
                    <Semestre semestre={"8"} />
                    <Semestre semestre={"9"} />
                    <Semestre semestre={"10"} />
                </div>

                <br />

                <div className="row  row-cols-10">
                    <ARamo codigo={"CBM1000"} ramo={"Álgebra y Geometría"} state={this.state.CBM1000} />
                    <ARamo codigo={"CBM1002"} ramo={"Álgebra Lineal"} state={this.state.CBM1002} />
                    <ARamo codigo={"CBM1005"} ramo={"Ecuaciones Diferenciales"} state={this.state.CBM1005} />
                    <ARamo codigo={"CIT2204"} ramo={"Prob. y Estadisticas"} state={this.state.CIT2204} />
                    <ARamo codigo={"CII2750"} ramo={"Optimización"} state={this.state.CII2750} />
                    <ARamo codigo={"CII1000"} ramo={"Contabilidad y Costos"} state={this.state.CII1000} />
                    <ARamo codigo={"CIT2206"} ramo={"Gestión Org."} state={this.state.CIT2206} />
                    <ARamo codigo={"CII2100"} ramo={"Introducción a la Economía"} state={this.state.CII2100} />
                    <ARamo codigo={"CITOPTINF1"} ramo={"Electivo Profesional"} state={this.state.CITOPTINF1} />
                    <ARamo codigo={"CITOPTINF2"} ramo={"Electivo Profesional"} state={this.state.CITOPTINF2} />
                </div>

                <br />

                <div className="row  row-cols-10">
                    <ARamo codigo={"CBM1001"} ramo={"Cálculo I"} state={this.state.CBM1001} />
                    <ARamo codigo={"CBM1003"} ramo={"Cálculo II"} state={this.state.CBM1003} />
                    <ARamo codigo={"CBM1006"} ramo={"Cálculo III"} state={this.state.CBM1006} />
                    <ARamo codigo={"CIT2107"} ramo={"Electrónica y Electrotecnia"} state={this.state.CIT2107} />
                    <ARamo codigo={"CIT2108"} ramo={"T. de Redes y Servicios"} state={this.state.CIT2108} />
                    <ARamo codigo={"CIT2109"} ramo={"Arq y Org de Comp."} state={this.state.CIT2109} />
                    <ARamo codigo={"CIT2011"} ramo={"Sistemas Distribuidos"} state={this.state.CIT2011} />
                    <ARamo codigo={"CIT2112"} ramo={"Tecnologías Inalámbricas"} state={this.state.CIT2112} />
                    <ARamo codigo={"CIT3100"} ramo={"Arquitecturas Emergentes"} state={this.state.CIT3100} />
                    <ARamo codigo={"CITOPTTEL2"} ramo={"Electivo Profesional"} state={this.state.CIT3410} />
                </div>

                <br />

                <div className="row  row-cols-10">
                    <ARamo codigo={"CBQ1000"} ramo={"Química"} state={this.state.CBQ1000} />
                    <ARamo codigo={"CBF1000"} ramo={"Mecánica"} state={this.state.CBF1000} />
                    <ARamo codigo={"CBF1001"} ramo={"Calor y Ondas"} state={this.state.CBF1001} />
                    <ARamo codigo={"CBF1002"} ramo={"Electricidad y Magnetismo"} state={this.state.CBF1002} />
                    <ARamo codigo={"CIT2205"} ramo={"Proyectos en TICs I"} state={this.state.CIT2205} />
                    <ARamo codigo={"CIT2110"} ramo={"Señales y Sistemas"} state={this.state.CIT2110} />
                    <ARamo codigo={"CIT2111"} ramo={"Comunicacio- nes Digitales"} state={this.state.CIT2111} />
                    <ARamo codigo={"CIT2113"} ramo={"Criptografía y Seg. en Redes"} state={this.state.CIT2113} />
                    <ARamo codigo={"CITOPTTEL1"} ramo={"Electivo Profesional"} state={this.state.CIT3411} />
                    <ARamo codigo={"CITOPTTEL3"} ramo={"Electivo Profesional"} state={this.state.CIT3412} />
                </div>

                <br />

                <div className="row  row-cols-10">
                    <ARamo codigo={"CIT1000"} ramo={"Programación"} state={this.state.CIT1000} />
                    <ARamo codigo={"CIT1010"} ramo={"Programación Avanzada"} state={this.state.CIT1010} />
                    <ARamo codigo={"CIT2006"} ramo={"Estruct. de Datos y Alg."} state={this.state.CIT2006} />
                    <ARamo codigo={"CIT2007"} ramo={"Bases de Datos"} state={this.state.CIT2007} />
                    <ARamo codigo={"CIT2009"} ramo={"B. de Datos Avanzadas"} state={this.state.CIT2009} />
                    <ARamo codigo={"CIT2010"} ramo={"Sistemas Operativos"} state={this.state.CIT2010} />
                    <ARamo codigo={"CIT2012"} ramo={"Ingeniería de Software"} state={this.state.CIT2012} />
                    <ARamo codigo={"CIT2013"} ramo={"Inteligencia Artifical"} state={this.state.CIT2013} />
                    <ARamo codigo={"CIT3000"} ramo={"Arquitec- tura de Software"} state={this.state.CIT3000} />
                    <ARamo codigo={"CITOPTINF3"} ramo={"Electivo Profesional"} state={this.state.CITOPTINF3} />
                </div>

                <br />

                <div className="row  row-cols-10">
                    <ARamo codigo={"FIC1000"} ramo={"Comunicación para la Ing."} state={this.state.FIC1000} />
                    <ARamo codigo={"CFG1"} ramo={"Minor / CFG"} state={this.state.CFG1} />
                    <ARamo codigo={"CIT2114"} ramo={"Redes de Datos"} state={this.state.CIT2114} />
                    <ARamo codigo={"CIT2008"} ramo={"Desarrollo Web y Móvil"} state={this.state.CIT2008} />
                    <ARamo codigo={"CFG2"} ramo={"Minor / CFG"} state={this.state.CFG2} />
                    <ARamo codigo={"CFG3"} ramo={"Minor / CFG"} state={this.state.CFG3} />
                    <ARamo codigo={"CFG4"} ramo={"Minor / CFG"} state={this.state.CFG4} />
                    <ARamo codigo={"CIT2207"} ramo={"Evaluación de Proy. TIC"} state={this.state.CIT2207} />
                    <ARamo codigo={"CIT3202"} ramo={"Data Science"} state={this.state.CIT3202} />
                    <ARamo codigo={"CIT3203"} ramo={"Proyecto en TICs II"} state={this.state.CIT3203} />
                </div>

                <br />

                <div className="row  row-cols-10">
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <ARamo codigo={"CIG1012"} ramo={"Inglés I"} state={this.state.CIG1012} />
                    <ARamo codigo={"CIG1013"} ramo={"Inglés II"} state={this.state.CIG1013} />
                    <ARamo codigo={"CIG1014"} ramo={"Inglés III"} state={this.state.CIG1014} />
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <div className="col"> </div>

                </div>
                <br />
                <div className="row row-cols-10">
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <ARamo codigo={"CIT4000"} ramo={"Práctica I"} state={this.state.CIT4000} />
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <div className="col"> </div>
                    <ARamo codigo={"CIT4001"} ramo={"Práctica II"} state={this.state.CIT4001} />
                    <div className="col">
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra1' }} >Ver + Detalles</Link>
                    </div>

                </div>
                <br />
                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1">
                        <div className="card border-dark text-center" >
                            <br />
                        </div>
                    </div>
                    <div className="col mt-1">
                        Ramo No Cursado
                    </div>
                </div>

                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1">
                        <div className="card border-dark text-center" style={{ background: '#28B463' }} >
                            <br />
                        </div>
                    </div>
                    <div className="col mt-1">
                        Ramo Aprobado
                    </div>
                </div>

                <div className="row row-cols-10">
                    <div className="col col-md-2 mt-1">
                        <div className="card border-dark text-center" style={{ background: '#FF3E17' }} >
                            <br />
                        </div>
                    </div>
                    <div className="col mt-1">
                        Ramo Crítico
                    </div>
                </div>

                <br />
                <br />

            </div>


        )
    }
}