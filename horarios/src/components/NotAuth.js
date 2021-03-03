import React, { Component } from 'react'

export default class NotAuth extends Component {
    render() {
        return (
            <div>

                <br />
                <div className="row row-cols-3">
                    <div className="col">
                        <h1 className="title text-primary text-center">No estas autorizado</h1>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="d-flex justify-content-center">
                    <h1 class="display-6">Debes ingresar con tu cuenta</h1>
                    <h3 class="display-6">Seras redirigido en 5 segundos</h3>
                    {setTimeout(()=>{window.location.href = '/';},5000)} 
                </div>
                <br />
                <br />
                <br />
            </div>
         ) }
        
}