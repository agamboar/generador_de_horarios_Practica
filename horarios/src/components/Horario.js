import React, { Component } from 'react'
import Bloque from './Bloque'
import BloqueH from './BloqueH'
import RamoH from './RamoH'
import Dia from './Dia'



export default class Horario extends Component {

    state = {
        show: true

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
        if(!this.state.show){
            return (
                <div className="container custom2" >
                    <div className="card border-primary text-center custom2">  
                        <br/> 
                        <div className="row row-cols-10">
                        &nbsp;&nbsp;&nbsp;&nbsp; 
                            <div className="col">
                                
                            <button type="button" class="btn btn-primary" onClick = {this.onChange2}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </button>
                            </div> 
                            <Dia dia = {"Lunes"}/>
                            <Dia dia = {"Martes"}/>
                            <Dia dia = {"Miércoles"}/>
                            <Dia dia = {"Jueves"}/>
                            <Dia dia = {"Viernes"}/>
                            &nbsp;&nbsp;                        
                        </div>                       

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"A"}  hora= {"8:30 - 9:50"}/>
                            <Bloque codigo = {"CIT-2202"} ramo = {"Televisión Digital"} seccion = {"Sección 1"} color = {'#19C2FF'}/>                    
                            <Bloque  />
                            <Bloque  />
                            <Bloque codigo = {"CIT-34XX"} ramo = {"Televisión Digital"} seccion = {"Sección 1"} color = {'#19C2FF'}/>
                            <Bloque  />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"B"}  hora= {"10:00 - 11:20"}/>
                            <Bloque />                    
                            <Bloque />
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"C"}  hora= {"11:30 - 12:50"}/>
                            <Bloque codigo = {"CIT-2202"} ramo = {"Tecnologias Inalambricas"} seccion = {"Sección 1"} color = {'#19C2FF'}/>                    
                            <Bloque  />
                            <Bloque  />
                            <Bloque codigo = {"CIT-2202"} ramo = {"Tecnologias Inalambricas"} seccion = {"Sección 1"} color = {'#19C2FF'}/>  
                            <Bloque codigo = {"CIT-2202"} ramo = {"Tecnologias Inalambricas"} seccion = {"Sección 1"} color = {'#19C2FF'}/>  
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"D"}  hora= {"13:00 - 14:20"}/>
                            <Bloque  />
                            <Bloque  />
                            <Bloque codigo = {"CIT-2004"} ramo = {"TICs 3"} seccion = {"Sección 1"} color = {'#19C2FF'}/>
                            <Bloque  />
                            <Bloque  />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"E"}  hora= {"14:30 - 15:50"}/>
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"F"}  hora= {"16:00 - 17:20"}/>
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            <Bloque  />
                            &nbsp;&nbsp;
                        </div>

                        <div className="row row-cols-10">
                            <BloqueH bloque= {"G"}  hora= {"17:30 - 18:50"}/>
                            <Bloque codigo = {"CIT-2004"} ramo = {"TICs 3"} seccion = {"Sección 1"} color = {'#19C2FF'}/>
                            <Bloque  />
                            <Bloque  />
                            <Bloque codigo = {"CIT-2004"} ramo = {"TICs 3"} seccion = {"Sección 1"} color = {'#19C2FF'}/>
                            <Bloque  />
                            &nbsp;&nbsp;
                        </div>

                        <br/>
                   </div> 


                </div>
     
           
            )
        }else{
            return(
                <div className="container " >
                    <div className="card border-primary border-5 custom2 ">
                        &nbsp;
                        <div className="row row-cols-5">
                            <div className="col"> </div>  
                            <div className="col"> </div>  
                            <div className="col"> <h3 className="card-title text-primary text-center">Horario n°1</h3> </div> 
                            <div className="col"> </div>  
                            <div className="col ">
                                <div className="card border-0">
                                    <button class="btn btn-primary rounded-pill " type="submit">Elegir Horario</button>
                                </div> 
                            </div>    
                        </div>
                        


                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ramos:</h5>
                        <div className="row row-cols-2">
                        
                        <RamoH/> 
                        <RamoH/>
                        <RamoH/>
                        <RamoH/>
                        <RamoH/>
                        <RamoH/>
                        
                        </div>
                        
                            <button type="button" className="btn btn-primary footer" onClick = {this.onChange1}> Ver Horario Graficamente</button>
                        
                    </div>
                </div>
            )
        }
    }
}