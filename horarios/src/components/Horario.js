import React, { Component } from 'react'
import Bloque from './Bloque'
import BloqueH from './BloqueH'
import RamosH from './RamosH'
import Dia from './Dia'



export default class Horario extends Component {
   
    state = {
        show: true,
        LU_8: null,
        LU_10: null,
        LU_11: null,
        LU_13: null,
        LU_14: null,
        LU_16: null,
        LU_17: null,

        MA_8: null,
        MA_10: null,
        MA_11: null,
        MA_13: null,
        MA_14: null,
        MA_16: null,
        MA_17: null,

        MI_8: null,
        MI_10: null,
        MI_11: null,
        MI_13: null,
        MI_14: null,
        MI_16: null,
        MI_17: null,

        JU_8: null,
        JU_10: null,
        JU_11: null,
        JU_13: null,
        JU_14: null,
        JU_16: null,
        JU_17: null,

        VI_8: null,
        VI_10: null,
        VI_11: null,
        VI_13: null,
        VI_14: null,
        VI_16: null,
        VI_17: null

    }

    /*  
    for(let j = 0; j<this.state.Ramos[i].length; j++){
                console.log("hola")
                this.setState({
                   [this.state.Ramos[i].eventos[j].bloque]: this.state.Ramos[i]
                   
               })
           }
        */

    /*fillSchedule = () => {

        for (let i = 0; i < this.props.horario.length; i++) {
            const mov = i;
            for (let j = 0; j < this.props.horario[mov].eventos.length; j++) {
                const mov2 = j;
                const mov3 = this.props.horario.ramos[mov].eventos[mov2].bloque;
                this.setState({
                    [mov3]: this.props.horario[mov]

                })
            }

        }
    };*/
    
    componentDidMount = () => {
      // this.fillSchedule();
       console.log(this.props)
    }

    onChange1 = () => {
        this.setState({
            show: false
        })
    }

    onChange2 = () => {
        this.setState({
            show: true
        })
    }

    render() {
        
        if (!this.state.show) {

            return (
                <div className="container" >
                    <div className="card border-primary text-center custom2">
                        <br />
                        <div className="row row-cols-10">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="col">

                                <button type="button" className="btn btn-primary" onClick={this.onChange2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </button>
                            </div>
                            <Dia dia={"Lunes"} />
                            <Dia dia={"Martes"} />
                            <Dia dia={"Miércoles"} />
                            <Dia dia={"Jueves"} />
                            <Dia dia={"Viernes"} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"A"} hora={"8:30 - 9:50"} />
                            <Bloque ramo={this.state.LU_8} />
                            <Bloque ramo={this.state.MA_8} />
                            <Bloque ramo={this.state.MI_8} />
                            <Bloque ramo={this.state.JU_8} />
                            <Bloque ramo={this.state.VI_8} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"B"} hora={"10:00 - 11:20"} />
                            <Bloque ramo={this.state.LU_10} />
                            <Bloque ramo={this.state.MA_10} />
                            <Bloque ramo={this.state.MI_10} />
                            <Bloque ramo={this.state.JU_10} />
                            <Bloque ramo={this.state.VI_10} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"C"} hora={"11:30 - 12:50"} />
                            <Bloque ramo={this.state.LU_11} />
                            <Bloque ramo={this.state.MA_11} />
                            <Bloque ramo={this.state.MI_11} />
                            <Bloque ramo={this.state.JU_11} />
                            <Bloque ramo={this.state.VI_11} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"D"} hora={"13:00 - 14:20"} />
                            <Bloque ramo={this.state.LU_13} />
                            <Bloque ramo={this.state.MA_13} />
                            <Bloque ramo={this.state.MI_13} />
                            <Bloque ramo={this.state.JU_13} />
                            <Bloque ramo={this.state.VI_13} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"E"} hora={"14:30 - 15:50"} />
                            <Bloque ramo={this.state.LU_14} />
                            <Bloque ramo={this.state.MA_14} />
                            <Bloque ramo={this.state.MI_14} />
                            <Bloque ramo={this.state.JU_14} />
                            <Bloque ramo={this.state.VI_14} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"F"} hora={"16:00 - 17:20"} />
                            <Bloque ramo={this.state.LU_16} />
                            <Bloque ramo={this.state.MA_16} />
                            <Bloque ramo={this.state.MI_16} />
                            <Bloque ramo={this.state.JU_16} />
                            <Bloque ramo={this.state.VI_16} />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque={"G"} hora={"17:30 - 18:50"} />
                            <Bloque ramo={this.state.LU_17} />
                            <Bloque ramo={this.state.MA_17} />
                            <Bloque ramo={this.state.MI_17} />
                            <Bloque ramo={this.state.JU_17} />
                            <Bloque ramo={this.state.VI_17} />
                            &nbsp;&nbsp;
                        </div>


                        <button type="button" className="btn btn-primary" onClick={this.onChange2}> Ver Horario</button>
                    </div>

                    <br />            
                </div>



            )
        } else {
            return (
                <div className="container " >
                    <div className="card border-primary border-5 custom2 ">
                        &nbsp;
                        <div className="row row-cols-5">
                            <div className="col"> </div>
                            <div className="col"> </div>
                            <div className="col"> <h3 className="card-title text-primary text-center">Horario n°{this.props.index+1}</h3> </div>
                            <div className="col"> </div>
                            <div className="col ">
                                <div className="card border-0">
                                    <button className="btn btn-primary rounded-pill " type="submit">Elegir Horario</button>
                                </div>
                            </div>
                        </div>
                    


                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ramos:</h5>
                        <div className="row row-cols-2">
                            {(this.props.horario)? <RamosH ramos={this.props.horario} />: null}
                        </div>

                        
                        <button type="button" className="btn btn-primary position-absolute bottom-0 end-50" onClick={this.onChange1}> Ver Horario Graficamente</button>                        
                    </div>    
                    <br />               
                </div>

            )
        }
    }
}