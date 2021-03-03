import React, { Component } from 'react'
import Navbar from './Navbar'
import SeccionesCritico from './SeccionesCritico'





export default class PriorizarSecciones extends Component {

    state ={
        ramos : null
    }

    onSubmit = e => {
        e.preventDefault();
     

    }

    render() {
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                
                
                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ahora deberas elegir que secciónes prefieres asignarles una mayor prioridad en tu horario
                </p>
                <br/>
                <br/>
                

                <SeccionesCritico />
                <SeccionesCritico />
                {/* aqui hay que crear una funcion map que cree los multiples ramos de con la funcion SeccionesCritico*/}

                <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className=" align-self-end">
                        <button type="submit" className="btn btn-primary rounded-pill"> Guardar Prioridades</button>
                    </div>
                </div>
                </form>

                           


            </div>
        )
    }
}
