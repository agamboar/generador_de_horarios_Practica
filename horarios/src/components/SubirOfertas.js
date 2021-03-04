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
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
           // receive two    parameter endpoint url ,form data
       }).then(res => { // then print response status
        console.log(res.statusText)
     })
    }
    render() {
        return (
            <div>
                <Navbar />

                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                <Derechos />
            </div>
        )
    }
}
