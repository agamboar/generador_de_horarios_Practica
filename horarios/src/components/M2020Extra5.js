import React, { Component } from 'react'
import Navbar from './Navbar'
import Malla2020Extra5  from './Malla2020Extra5'
import {Link} from 'react-router-dom';



export default class M2020Extra1 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <br/>
                <div className="row row-cols-3">
                    <div className="col">
                        <h1 className="title text-primary text-center">Malla 2020</h1>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <br/>
                        <div className = "align-self-center">
                            <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                <Link className="nav-link" to={{ pathname: '/users/usr/mallas/malla2020/AvanceCurricular'}}style={{ color: '#FFF' }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Elegir Malla 2020
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                
                <Malla2020Extra5/>

                
                
            </div>
        )
    }
}
