import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  { Dropdown ,DropdownButton } from 'react-bootstrap';

export default class Navbar extends Component {
    deleteToken = (e) => {
        localStorage.removeItem("token")
    }
    
    render() {
        return (


            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/users/usr">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-calendar2-range" viewBox="0 0 20 20">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zm-8 2h4a1 1 0 1 1 0 2H1v-2z" />
                    </svg>
                    Generador de Horarios
                </a>
                <ul class="nav">
                    <li class="nav-item">
                        <a style={{ color: '#FFF' }} >Usuario: {localStorage.getItem("username")} </a>
                    </li>
                </ul>


                <ul className="nav justify-content-end">
                    {localStorage.getItem("is_staff") === "si" ?
                    <Dropdown size="sm">
                        <DropdownButton id="dropdown-basic-button" title="Administrador">
                        <Dropdown.Item><Link className="nav-link" to={{ pathname: '/admin/subirOferta' }} style={{ color: '#000000' }} >Subir Ofertas</Link> </Dropdown.Item>
                        <Dropdown.Item ><Link className="nav-link" to={{ pathname: '/admin/Usuarios' }} style={{ color: '#000000' }} >Usuarios</Link></Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                    : null}

                   {/*<li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr' }} style={{ color: '#FFF' }} >Home</Link>
                    </li>*/}
                    <Dropdown size="sm">
                        <DropdownButton id="dropdown-basic-button" title="Avance Academico">
                        <Dropdown.Item><Link className="nav-link" to={{ pathname: '/users/usr/mallas' }} style={{ color: '#000000' }} >Mi Malla</Link> </Dropdown.Item>
                        <Dropdown.Item ><Link className="nav-link" to={{ pathname: '/users/usr/crearHorario' }} style={{ color: '#000000' }} >Actualizar avance</Link></Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                    {/*<li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/mallas' }} style={{ color: '#FFF' }} >Mi Malla</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/crearHorario' }} style={{ color: '#FFF' }} >Mi Avance</Link>
                    </li>*/}
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/PERT' }} style={{ color: '#FFF' }} >Mis Ramos Críticos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/priorizarRamos' }} style={{ color: '#FFF' }} >Priorizar Ramos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/users/usr/horariosPosibles' }} style={{ color: '#FFF' }} >Horarios Posibles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: '/' }} style={{ color: '#FFF' }} onClick={this.deleteToken}>Salir</Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
            </nav>

        )
    }
}