import React, { Component } from 'react'
import Derechos from './Derechos'
import Navbar from './Navbar'
import NotAuth from './NotAuth'
import { withAuth0 } from '@auth0/auth0-react';
export const HOST = process.env.REACT_APP_HOST

class UserInterface extends Component {

    componentDidMount() {
        const { user, isAuthenticated, getAccessTokenSilently } = this.props.auth0;
        console.log("Datos del usuario: ", user, isAuthenticated)
        getAccessTokenSilently()
        .then(token => fetch(`https://dev--c34vvj2.us.auth0.com/api/v2/`, { headers: {authorization: `Bearer ${token}`} }))
        .then(res => res.json())
        .then(json => {
            //this.setState({ data: json })
            console.log("Token Auth0: ", json, user, isAuthenticated)
        });
        
    }
    render() {
        return (
            <div>
            {(localStorage.getItem("token"))?  
            <div>
                <Navbar/>
                
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>  
                        <h1 className="title text-primary">BIENVENIDO/A AL ASISTENTE TOMA DE RAMOS</h1>
                        <br/>
                        <p className="lead">Que tengas una buena toma de ramos!!!</p>
                    </div> 
                </div>
                

                <Derechos/>
            </div>
            : <NotAuth />}
            </div>
        )
    }
}

export default withAuth0(UserInterface);