import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js'
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';

//cuando trabajamos con estados tienen que estar dentro de un componente o una funcion

function App() {

  const [mostarFormulario, actualizarMosrar] = useState(true)
  
  // Ternario --> condicion ? seMuestra : noSemuestra  // funciona como un if else
  // otro concepto seria corto circuito --> condicion && seMuestra --> {mostrarFormulario && <Formulario/>}

  const cambiarMostrar = () => {
    actualizarMosrar(!mostarFormulario)
  }
  return (
    <div>
      <Header />
      {mostarFormulario ? <Formulario/> : <> </>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front-End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo= "UX y Diseño"/>
      <Equipo equipo="Movil"/>
      <Equipo equipo="Innovación y Gestion"/>
    </div>
  );
}

export default App;
