import React, { Component } from 'react'



export default class RamoPrioridad extends Component {
    render() {
      console.log(this.props)
      if(this.props.ramo !== null){
        return (
        <div className = 'card '>
          <div className = 'row row-cols-2 mt-3' >
              <div className = 'col-1'></div>
              <div className = 'col-9 '><h5> Ramo: {this.props.ramo.to_asignatura_real[0].nombre} </h5> Código: {this.props.ramo.to_asignatura_real[0].codigo}</div>
              <div className = 'col-auto'> 
                <div type="button" className="btn" onClick = {this.props.onChangeUP}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-caret-up" viewBox="0 0 16 16">
                    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                  </svg>
                </div>
              </div>
              <div className = 'col-2'></div>
              <div className = 'col-8'></div>
              <div className = 'col-auto'>
              <div type="button" className="btn" onClick = {this.props.onChangeDOWN}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg>
                </div>
              </div>
          </div>
        </div>   
        )
      }else{
        return (
          <div></div>
        )
      }
    }
}
/*
    style={{background: '#81C53D'}}


*/