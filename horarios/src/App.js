import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Init from './components/Init';
import Registro from './components/Registro'
import SubirOferta from './components/SubirOfertas'
import Usuarios from './components/Usuarios'
import UserInterface from './components/UserInterface';
import Mallas from './components/Mallas';
import M2010 from './components/M2010'
import M2018 from './components/M2018'
import M2020 from './components/M2020'
import M2010Extra1 from './components/M2010Extra1';
import M2010Extra2 from './components/M2010Extra2';
import M2010Extra3 from './components/M2010Extra3';
import M2010Extra4 from './components/M2010Extra4';
import M2010Extra5 from './components/M2010Extra5';
import M2018Extra1 from './components/M2018Extra1';
import M2018Extra2 from './components/M2018Extra2';
import M2018Extra3 from './components/M2018Extra3';
import M2018Extra4 from './components/M2018Extra4';
import M2018Extra5 from './components/M2018Extra5';
import M2020Extra1 from './components/M2020Extra1';
import M2020Extra2 from './components/M2020Extra2';
import M2020Extra3 from './components/M2020Extra3';
import M2020Extra4 from './components/M2020Extra4';
import M2020Extra5 from './components/M2020Extra5';
import CrearHorario from './components/CrearHorario';
import AManual2010 from './components/AManual2010';
import AManual2018 from './components/AManual2018';
import AManual2020 from './components/AManual2020';
import HPosibles from './components/HPosibles';
import PERT from './components/PERT';
import PERTExtra1 from './components/PERTExtra1'
import PERTExtra2 from './components/PERTExtra2'
import PERTExtra3 from './components/PERTExtra3'
import PERTExtra4 from './components/PERTExtra4'
import GenerarHorarios from './components/GenerarHorarios'
import PriorizarRamos from './components/PriorizarRamos'
import PriorizarSeccion from './components/PriorizarSeccion'
import PriorizarAreaCfg from './components/PriorizarAreaCfg'
import Cookies from 'js-cookie';



let _csrfToken = null;
async function getCsrfToken() {
    if (_csrfToken === null) {
        const response = await fetch('http://127.0.0.1:8000/csrf/', {
            credentials: 'include',
        });
        const data = await response.json();
        _csrfToken = data.csrfToken;
    }
    return _csrfToken;
}
getCsrfToken().then(val => Cookies.set('csrftoken', val, { path: '/' }))



function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Init}/>
      <Route path="/Registro" exact component={Registro}/>
      <Route path="/admin/subirOferta" exact component={SubirOferta}/>
      <Route path="/admin/Usuarios" exact component={Usuarios}/>
      <Route path="/users/usr/" exact component={UserInterface}/>
      <Route path="/users/usr/mallas/" exact component={Mallas}/>
      <Route path="/users/usr/mallas/malla2010" exact component={M2010}/>
      <Route path="/users/usr/mallas/malla2010/AvanceCurricular" exact component={AManual2010}/>
      <Route path="/users/usr/mallas/malla2010/DatosExtraM2010-1" exact component={M2010Extra1}/>
      <Route path="/users/usr/mallas/malla2010/DatosExtraM2010-2" exact component={M2010Extra2}/>
      <Route path="/users/usr/mallas/malla2010/DatosExtraM2010-3" exact component={M2010Extra3}/>
      <Route path="/users/usr/mallas/malla2010/DatosExtraM2010-4" exact component={M2010Extra4}/>
      <Route path="/users/usr/mallas/malla2010/DatosExtraM2010-5" exact component={M2010Extra5}/>

      <Route path="/users/usr/mallas/malla2018" exact component={M2018}/>
      <Route path="/users/usr/mallas/malla2018/AvanceCurricular" exact component={AManual2018}/>
      <Route path="/users/usr/mallas/malla2018/DatosExtraM2018-1" exact component={M2018Extra1}/>
      <Route path="/users/usr/mallas/malla2018/DatosExtraM2018-2" exact component={M2018Extra2}/>
      <Route path="/users/usr/mallas/malla2018/DatosExtraM2018-3" exact component={M2018Extra3}/>
      <Route path="/users/usr/mallas/malla2018/DatosExtraM2018-4" exact component={M2018Extra4}/>
      <Route path="/users/usr/mallas/malla2018/DatosExtraM2018-5" exact component={M2018Extra5}/>

      <Route path="/users/usr/mallas/malla2020" exact component={M2020}/>
      <Route path="/users/usr/mallas/malla2020/AvanceCurricular" exact component={AManual2020}/>
      <Route path="/users/usr/mallas/malla2020/DatosExtraM2020-1" exact component={M2020Extra1}/>
      <Route path="/users/usr/mallas/malla2020/DatosExtraM2020-2" exact component={M2020Extra2}/>
      <Route path="/users/usr/mallas/malla2020/DatosExtraM2020-3" exact component={M2020Extra3}/>
      <Route path="/users/usr/mallas/malla2020/DatosExtraM2020-4" exact component={M2020Extra4}/>
      <Route path="/users/usr/mallas/malla2020/DatosExtraM2020-5" exact component={M2020Extra5}/>

      <Route path="/users/usr/crearHorario" exact component={CrearHorario}/>

      <Route path="/users/usr/horariosPosibles" exact component={HPosibles}/>

      <Route path="/users/usr/PERT" exact component={PERT}/>
      <Route path="/users/usr/PERT/PERTExtra1" exact component={PERTExtra1}/>
      <Route path="/users/usr/PERT/PERTExtra2" exact component={PERTExtra2}/>
      <Route path="/users/usr/PERT/PERTExtra3" exact component={PERTExtra3}/>
      <Route path="/users/usr/PERT/PERTExtra4" exact component={PERTExtra4}/>

      <Route path="/users/usr/priorizarRamos" exact component={PriorizarRamos}/>

      {/*<Route path="/users/usr/priorizarSecciones" exact component={PriorizarSecciones}/>*/}

      <Route path="/users/usr/generarHorarios" exact component={GenerarHorarios}/>

      <Route path="/users/usr/priorizarSeccion" exact component={PriorizarSeccion}/>
      <Route path="/users/usr/priorizarAreaCFG" exact component={PriorizarAreaCfg}/>
    
    
    </BrowserRouter>
  );
}

export default App;
