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
    onClickHandler = () => {
        const data = new FormData()
        console.log(this.state.selectedFile)
        data.append('file', this.state.selectedFile)
        axios.post("http://200.14.84.238:443/upload/", data).then(res => { // then print response status
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
