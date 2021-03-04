import React, { Component } from 'react'
import ARamo from './RamoP'
import Semestre from './Semestre'
import {Link} from 'react-router-dom';



export default class Malla2018Extra4 extends Component {
    render() {
        return (
        
            

            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-md-1"> </div>  
                    <Semestre semestre = {"9"}/>
                    <Semestre semestre = {"10"}/>
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>
               
            

                <div className="row row-cols-10 align-items-start">
                    <div className="col col-md-1"> </div>  
                    <ARamo codigo={"CIT3310"} ramo={"Electivo Profesional"} state={this.state.CIT3310} />
                    <ARamo codigo={"CIT3311"} ramo={"Electivo Profesional"} state={this.state.CIT3311} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div>  
                    <ARamo codigo={"CIT3410"} ramo={"Electivo Profesional"} state={this.state.CIT3410} />
                    <ARamo codigo={"CIT3411"} ramo={"Electivo Profesional"} state={this.state.CIT3411} />
                    <div className="col col-md-1"> </div>  
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> 
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT/PERTExtra3'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                    </div> 
                    <ARamo codigo={"CIT3412"} ramo={"Electivo Profesional"} state={this.state.CIT3412} />
                    <ARamo codigo={"CIT3413"} ramo={"Electivo Profesional"} state={this.state.CIT3413} />
                    <div className="col col-md-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </div> 

                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIT3200"} ramo={"Evaluación de Proy. TIC"} state={this.state.CIT3200} />
                    <ARamo codigo={"CIT3201"} ramo={"Proyecto en TICs III"} state={this.state.CIT3201} />
                    <div className="col col-md-1"> </div>                 
                </div>

                <br/>

                <div className="row row-cols-10">
                    <div className="col col-md-1"> </div> 
                    <ARamo codigo={"CIT3312"} ramo={"Electivo Profesional"} state={this.state.CIT3312} />
                    <ARamo codigo={"CIT3313"} ramo={"Electivo Profesional"} state={this.state.CIT3313} />
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