import React, { Component } from 'react'
import Navbar from './Navbar'
import Malla2018Extra1 from './Malla2018Extra1'
import {Link} from 'react-router-dom';



export default class M2018Extra1 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <br/>
                <div className="row row-cols-3">
                    <div className="col">
                        <h1 className="title text-primary text-center">Malla 2018</h1>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <br/>
                        <div className = "align-self-center">
                            <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2018/AvanceCurricular'}}style={{ color: '#FFF' }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Elegir Malla 2018
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                
                <Malla2018Extra1/>

                
                
            </div>
        )
    }
}
