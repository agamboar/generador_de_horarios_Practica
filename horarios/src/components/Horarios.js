import React, { Component } from 'react'

import Horario from './Horario.js';

class Horarios extends Component {

    render() {

        if (this.props.horarios === null) {
            return <div>ARROZ</div>
        } else {
            console.log('CARNE MONGOLIANA')
            console.log(this.props.horarios.data)

            return this.props.horarios.data.map(horario => <Horario horario={horario} key={horario.id} />);
        }

    }
}

export default Horarios;
