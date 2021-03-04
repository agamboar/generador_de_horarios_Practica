import React, { Component } from 'react'
import Navbar from './Navbar'
import Derechos from './Derechos'
import axios from 'axios';



export default class CrearHorario extends Component {


    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
    }
    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
    }
    render() {
        return (
            <div>
                <Navbar />

                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <Derechos />
            </div>
        )
    }
}
