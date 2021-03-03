import React, { Component } from 'react'
import Navbar from './Navbar'
import RamoCritico from './RamoCritico'
import NotAuth from './NotAuth'




export default class PriorizarRamos extends Component {

    state ={
        ramos: null,
        p0:null,
        p1:null,
        p2:null,
        p3:null,
        p4:null,
        p5:null,
        p6:null,
        p7:null,
        p8:null,
        p9:null,

    }

    onSubmit = e => {
        e.preventDefault();
     

    }

    render() {
        return (
            <div>
            {(localStorage.getItem("token"))?  
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ahora deberas elegir que ramos prefieres asignarles una mayor prioridad en tu horario
                </p>
                <br/>
                <br/>
                {/* en ramo critico se filtrara por prioridad  */}
                <RamoCritico name='0' resultado = {this.state.p0}/>
                <RamoCritico name='1' resultado = {this.state.p1}/>
                <RamoCritico name='2' resultado = {this.state.p2}/>
                <RamoCritico name='3' resultado = {this.state.p3}/>
                <RamoCritico name='4' resultado = {this.state.p4}/>
                <RamoCritico name='5' resultado = {this.state.p5}/>
                <RamoCritico name='6' resultado = {this.state.p6}/>
                <RamoCritico name='7' resultado = {this.state.p7}/>
                <RamoCritico name='8' resultado = {this.state.p8}/>
                <RamoCritico name='9' resultado = {this.state.p9}/>
                
                <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className=" align-self-end">
                        <button type="submit" className="btn btn-primary rounded-pill"> Guardar Prioridades</button>
                    </div>
                </div>
                </form>
                           
                <br/>
                <br/> 
                <br/>
                <br/>

            </div>
            : <NotAuth />}
            </div>
        )
    }
}
