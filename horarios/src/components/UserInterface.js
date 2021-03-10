import React, { Component } from 'react'
import Derechos from './Derechos'
import Navbar from './Navbar'
import NotAuth from './NotAuth'

export default class UserInterface extends Component {
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
                        <h1 className="title text-primary">BIENVENIDO/A AL GENERADOR DE HORARIOS</h1>
                        <br/>
                        <p className="lead">Que tengas una buena toma de ramos!!!</p>
                    </div>
                    <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

                        <div class="position-fixed bottom-0 right-0 p-3" style="z-index: 5; right: 0; bottom: 0;">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">       
    <div class="toast-header">
      <img src="..." class="rounded mr-2" alt="..."/>
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
                </div>
                

                <Derechos/>
            </div>
            : <NotAuth />}
            </div>
        )
    }
}
