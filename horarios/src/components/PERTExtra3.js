import React, { Component } from 'react'
import Navbar from './Navbar'
import PERTE3_2010 from './PERTE3-2010'
import PERTE3_2018 from './PERTE3-2018'
import PERTE3_2020 from './PERTE3-2020'
import axios from 'axios';



export default class M2018Extra1 extends Component {
    state = {
        malla: null,
        ramos: null
    }

    componentDidMount = async () => {

        var config = {
            method: 'get',
            url: 'https://200.14.84.238:443/PERT/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"), //cambiar a localStorage
                'Content-Type': 'application/json'
            }
        };

        var PERT_j = await axios(config)

        console.log(PERT_j)
        this.setState({
            malla: PERT_j.data.malla,
            ramos: PERT_j.data.PERT
        })
    }

    render() {
        if(this.state.malla === 2010){
            return (
                <div>
                    <Navbar/>
                    
                    <PERTE3_2010 ramos={this.state.ramos}/>
    
                    
                    
                </div>
            )
        }else if(this.state.malla === 2018){
            return (
                <div>
                    <Navbar/>
                    
                    <PERTE3_2018 ramos={this.state.ramos}/>
    
                    
                    
                </div>
            )
        }else if(this.state.malla === 2020){
            return (
                <div>
                    <Navbar/>
                    
                    <PERTE3_2020 ramos={this.state.ramos}/>
    
                    
                    
                </div>
            )
        }else{
            return(
                <div></div>
                )
        }
    }
}
