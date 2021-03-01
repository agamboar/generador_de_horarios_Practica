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
