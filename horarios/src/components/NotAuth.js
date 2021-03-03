import React, { Component } from 'react'

export default class NotAuth extends Component {
     myFunction() {
        setTimeout(function(){ window.location.href = '/'; }, 5000);
      }
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
                
                <div class="d-flex justify-content-center">
                    
                        <h2 class="display-6">Debes ingresar con tu cuenta</h2>
                    </div>
                    <div class="d-flex justify-content-center">
                        <h5>Seras redirigido</h5>
                        {this.myFunction()}
                   
                </div>
                <br />
                <br />
                <br />
            </div>
         ) }
        
}