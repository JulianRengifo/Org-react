import { useState } from 'react';
import {v4 as uuid} from "uuid"
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
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front-End",
    foto: "https://github.com/JulianRengifo.png",
    nombre: "Julian Rengifo",
    puesto: "Ingeniero de Sistemas",    
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Devops",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/joseLatam.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev. FullStack",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://github.com/JulianRengifo.png",
    nombre: "Julian Rengifo",
    puesto: "Ingeniero de Sistemas",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  }
])

// Lista de equipos
/* Se agrega la lista de equipos en useState para que react verifique si hubo un cambio en la insformacion
  y automaticamente se actualice */
const [equipos, actualizarEquipos] = useState ([
    {
    id: uuid(), // Identificador unico
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
])

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

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)

    // filtra los elementos del array colaboradores, dejando solo aquellos cuyo id no coincide con el id proporcionado, y los almacena en un nuevo array llamado nuevosColaboradores.
    //Filter nos regresa un nuevo arreglo sin modificar el original
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)

    /* actualiza el color primario de un equipo en el array equipos si el id del equipo coincide con un id proporcionado,
     y luego actualiza el estado de los equipos llamando a actualizarEquipos con el array actualizado. */
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    //agregamos un nuevo equipo a la lista actual de equipos en un estado de React, asegurándose de que cada equipo tenga un identificador único generado 
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  // Modificar el estado del icono like
  const like = (id) => {
    console.log("like", id)
    /*Actualizamos la propiedad fav de los colaboradores cuyo id coincide con el id que en este se le hace click,
     y luego aplica esos cambios llamando a una función actualizarColaboradores con el array modificado. */
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        /*Cambio el icono cuando se hace click en el */
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

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
        crearEquipo = {crearEquipo}
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
        // Nombre cualquiera     Nombre de la funcion
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like = {like}
        />
      )
      }

      <Footer/>

    </div>
  );
}

export default App;
