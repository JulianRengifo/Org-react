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

  // Lista de equipos
  const equipos = [

    {
    titulo: "Programacion",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
    },

    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
]


  return (
    <div>
      <Header />
      {mostarFormulario ? <Formulario/> : <> </>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        /* este fragmento de código recorre un array de objetos llamado "equipos",
        devuelve un conjunto de componentes "Equipo" con los datos de cada equipo como propiedades.*/
        equipos.map ((equipo) => <Equipo datos={equipo} key={equipo.titulo}/>)
      }
    </div>
  );
}

export default App;
