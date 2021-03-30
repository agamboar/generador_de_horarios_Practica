import React, { useState } from 'react';


//import 'antd/dist/antd.css'; esto genera errro no colocar

import { Select } from 'antd';

const { Option } = Select;




const SelectSearch = (props) => { //recibir data (ramos del pibe)
  
  function onChange(value) { // aca va el get para obtener las secciones de un ramo
    console.log(`selected ${value}`);
    var config = {
      method: 'get',
      url: `https://asistente-eit.udp.cl/get_secciones/${value}/`,
      headers: {
          'Authorization': 'Token ' + localStorage.getItem("token"), 
          'Content-Type': 'application/json'
      }
  };

  axios(config).then(response => { 
      console.log(response) //verificar como se recibe la info          
      if (response.data){
        props.parentCallback(response.data.secciones_disponibles); //map de eso y se puede rellenar la tabla
      }
  } )

    
    //console.log(props.ramosDisponibles) solo para saber q es lo que llega
    
    
  }
  
    return (
<Select
    showSearch
    style={{ width: 350 }}
    placeholder="Selecciona un ramo"
    optionFilterProp="children"
    onChange={onChange}
   
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
      {/*map this prop.ramosDisponibles aqui con el fetch de los ramos que puede tomar el pibe*/}
      
    {props.ramosDisponibles.map(elem => ( <Option value={elem}>{elem}</Option>  ))}

    {/*props.ramosDisponibles.map((user) => (<div className="user">{user}</div> ))*/}
     {/* lo que se manda es el value asi que ahi va el id del ramo o el codigo y el texto el nombre */}
    
  </Select>)
}


export default SelectSearch ;