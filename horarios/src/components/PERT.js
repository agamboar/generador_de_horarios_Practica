import React, { Component } from 'react'
import Navbar from './Navbar'
import PERTMalla2010 from './PERTMalla2010'
<<<<<<< HEAD
import PERTMalla2018 from './PERTMalla2018'
import PERTMalla2020 from './PERTMalla2020'
=======
>>>>>>> 5e41abe50b223e19f5f108918e4f1a6e88bb41ba
import {Link} from 'react-router-dom';



export default class PERT extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <br/>                
                <div className="row row-cols-3">
                    <div className="col">
                        <h1 className="title text-primary text-center">PERT</h1>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <br/>
                        <div className = "align-self-center">
                            <button type="submit" className="btn btn-secondary rounded-pill btn-sm">
                                <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles'}}style={{ color: '#FFF' }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <font size="3">Generar Horarios</font>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                
                <PERTMalla2010/>
<<<<<<< HEAD
                <PERTMalla2018/>
                <PERTMalla2020/>
=======
>>>>>>> 5e41abe50b223e19f5f108918e4f1a6e88bb41ba

                <br/>
                
            </div>
        )
    }
}
