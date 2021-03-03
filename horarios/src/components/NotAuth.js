import React, { Component } from 'react'

export default class NotAuth extends Component {
    render() {
        return (
            <div>

                <br />
                <div >
                    <div >
                        <h1 className="title text-primary text-center">No estas autorizado</h1>
                    </div>
                    
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="d-flex justify-content-center">
                    <p>
                        <h1 class="display-6">Debes ingresar con tu cuenta</h1>
                    </p>
                    <p>
                        <h3 class="display-6">Seras redirigido</h3>
                        {setTimeout(()=>{window.location.href = '/';},10000)} 
                    </p>
                </div>
                <br />
                <br />
                <br />
            </div>
         ) }
        
}