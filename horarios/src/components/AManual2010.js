import React, { Component } from 'react'
import Navbar from './Navbar'
import AvanceManual2010 from './AvanceManual2010'
import axios from 'axios';


export default class AManual extends Component {

 
    render() {
        return (
            <div>
                <Navbar/>     
                <AvanceManual2010/> 

            </div>
        )
    }
}
