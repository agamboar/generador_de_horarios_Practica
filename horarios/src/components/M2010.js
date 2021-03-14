import React, { Component } from 'react'
import Navbar from './Navbar'
import Malla2010 from './Malla2010'
import {Link} from 'react-router-dom';



export default class M2010 extends Component {
    deleteMalla = (e) => {
        localStorage.removeItem("malla")
        var axios = require('axios');
        var config = {
            method: 'get',
            url: 'http://200.14.84.238:80/delete_asignaturasCursadas/', 
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token"), //cambiiar a localStorage
                'Content-Type': 'application/json'
            }
        };

        axios(config).then(response => console.log(response.data.mensaje)).catch(function (error) {
            if (error.response) {
                if (error.response.data.non_field_errors) {console.log(error.response);}
                //notify(`error:  ${error.response.data.non_field_errors[0]}`); 
            }
        });
    }
    render() {
        return (
            <div>
                <Navbar/>
                <br/>
                <div className="row row-cols-3">
                    <div className="col">
                        <h1 className="title text-primary text-center">Malla 2010</h1>
                    </div>
                    
                    <div className="col">
                        <br/>
                        <div className = "align-self-center">
                            <button type="submit" className="btn btn-warning rounded-pill btn-sm">    
                                <Link className="nav-link" to={{ pathname: '/users/usr/mallas'}}style={{ color: '#FFF' }}  onClick={this.deleteMalla} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Elegir otra malla
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <br/>
                        <div className = "align-self-center">
                            <button type="submit" className="btn btn-primary rounded-pill btn-sm">
                                <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2010/AvanceCurricular'}}style={{ color: '#FFF' }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Elegir Malla 2010
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <Malla2010/>

                
                
            </div>
        )
    }
}
