import React, { Component } from 'react'
import Ramo from './RamoP'
import Semestre from './Semestre'
import { Link } from 'react-router-dom';



export default class Malla2010Extra4 extends Component {

    state = {
        CBM1000: null, CBM1001: null, CBQ1000: null, CIT1000: null, FIC1000: null, CBM1002: null, CBM1003: null, CBF1000: null, CIT1010: null,
        CFG1: null, CBM1005: null, CBM1006: null, CBF1001: null, CIT2000: null, CIT2100: null, CIT2204: null, CBM2000: null, CBF1002: null, CIT2001: null,
        CFG2: null, FIC1001: null, CII2750: null, CIT2106: null, CIT2200: null, CIT2002: null, CFG3: null, FIC1002: null, CII2000: null, CIT2202: null,
        CIT2101: null, CIT2003: null, CIT2103: null, CII1000: null, CIT2005: null, CIT2102: null, FIC1003: null, CIT2104: null, CIT2203: null, CIT2004: null,
        CIT2105: null, CIT2201: null, CFG4: null, CIT3310: null, CIT3410: null, CIT3411: null, CIT3200: null, CIT3311: null, CIT3312: null, CIT3412: null,
        CIT3413: null, CIT3201: null, CIT3313: null, CIT5001: null, CIT5002: null

    }

    componentDidMount = () => {
        for (let i = 0; i < this.props.ramos.length; i++) {
            const mov = i;
            const mov2 = this.props.ramos[mov].to_asignatura_real.codigo;
            this.setState({
                [mov2]: [this.props.ramos[mov].es, this.props.ramos[mov].ls, this.props.ramos[mov].ef, this.props.ramos[mov].lf, this.props.ramos[mov].holgura]
            })
        }
    }

    render() {
        return (



            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>
                    <Semestre semestre={"9"} />
                    <Semestre semestre={"10"} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />



                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>
                    <Ramo codigo={"CIT3310"} ramo={"Electivo Profesional"} state={this.state.CIT3310} />
                    <Ramo codigo={"CIT3311"} ramo={"Electivo Profesional"} state={this.state.CIT3311} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <Ramo codigo={"CIT3410"} ramo={"Electivo Profesional"} state={this.state.CIT3410} />
                    <Ramo codigo={"CIT3411"} ramo={"Electivo Profesional"} state={this.state.CIT3411} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1">
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra3' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </Link>
                    </div>
                    <Ramo codigo={"CIT3412"} ramo={"Electivo Profesional"} state={this.state.CIT3412} />
                    <Ramo codigo={"CIT3413"} ramo={"Electivo Profesional"} state={this.state.CIT3413} />
                    <div className="col col-md-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </div>

                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <Ramo codigo={"CIT3200"} ramo={"Evaluación de Proyectos TIC"} state={this.state.CIT3200} />
                    <Ramo codigo={"CIT3201"} ramo={"Proyecto en TICs III"} state={this.state.CIT3201} />
                    <div className="col col-md-1"> </div>
                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>
                    <Ramo codigo={"CIT3312"} ramo={"Electivo Profesional"} state={this.state.CIT3312} />
                    <Ramo codigo={"CIT3313"} ramo={"Electivo Profesional"} state={this.state.CIT3313} />
                    <div className="col col-md-1"> </div>

                </div>

                <br />

                <div className="row row-cols-10">
                    <div className="col">
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">

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