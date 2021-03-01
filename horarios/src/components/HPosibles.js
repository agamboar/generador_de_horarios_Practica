import React, { Component } from 'react'
import Navbar from './Navbar'
import Horarios from './Horarios'
import axios from 'axios';





export default class HPosibles extends Component {

    state = {
        Horarios: null
    }

    componentDidMount = async () => {
        const horarios_posibles = await axios.get("http://127.0.0.1:8000/clique/", { headers: { Authorization: "Token 66c54201f64d384caea2e56b2c6eb1bd11952176" } })
        this.setState({
            Horarios: horarios_posibles.data
        })
    }

    render() {
        if( this.state.Horarios === null){
            return (
                <div>
                    <Navbar/>
    
                    <br/>
                    <br/>
                    
    
                    <p className="lead">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                    </p>
                    <br/>
                    <br/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="d-flex justify-content-center">
                    <h1 class="display-6">Un Momento, Se esta calculando tús horarios</h1>
                    </div>
                    <br/>
                    <br/>
                    <div class="d-flex justify-content-center">
                                                
                        <div class="spinner-grow text-primary" role="status"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-grow text-primary" role="status"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-border text-primary"  role="status"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-grow text-primary" role="status"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="spinner-grow text-primary" role="status"/>
                        &nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                    <br />
                    <br />
                    <br />
    
                    
    
    
                </div>
            )

        }else{

        
        return (
            <div>
                <Navbar/>

                <br/>
                <br/>
                

                <p className="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    A continuación veras los horarios que te recomendamos tomar para tu semestre actual, esperamos haberte ayudado!
                </p>
                <br/>
                <br/>
                <Horarios horarios = {this.state.Horarios}/>
                <br/>

                <br/>
                

                


            </div>
        )
        }
    }
}
