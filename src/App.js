import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js'
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

//cuando trabajamos con estados tienen que estar dentro de un componente o una funcion

function App() {

  const [mostarFormulario, actualizarMostrar] = useState(true)
  //inicializamos nuestros colaboradores como un arreglo vacio cuando se maneja una lista
  // const [colaboradores, actualizarColaboradores] = useState([])
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front-End",
    foto: "https://github.com/JulianRengifo.png",
    nombre: "Julian Rengifo",
    puesto: "Ingeniero de Sistemas"
  }])
  //Map es un metodo que pertenece a los arreglos, por eso se meneja un arreglo vacio ([])
  
  // Ternario --> condicion ? seMuestra : noSemuestra  // funciona como un if else
  // otro concepto seria corto circuito --> condicion && seMuestra --> {mostrarFormulario && <Formulario/>}

  const cambiarMostrar = () => {
    actualizarMostrar(!mostarFormulario)
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // Spread operator ({...})
    // Hace una copia de los valores actuales y despues agregamos el nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador])
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
      {/* {mostarFormulario ? <Formulario/> : <> </>} */}
      {
      /*está renderizando el componente <Formulario> solo si mostrarFormulario es verdadero,
       y le está pasando un arreglo de títulos de equipos como prop llamada equipos. */
      mostarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        //Atravez de formulario recibe registrar colaborador
        registrarColaborador = {registrarColaborador}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/*Creacion de los equipos*/}
      {
        /* este fragmento de código recorre un array de objetos llamado "equipos",
        devuelve un conjunto de componentes "Equipo" con los datos de cada equipo como propiedades.*/
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        //Enviamos los colaboradores a equipo
        //usamos filter para filtrar los colaboradores y solo regrese  cuales son los colaboradores que pertenece al equipos que los muestre
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
      )
      }

      <Footer/>

    </div>
  );
}

export default App;
