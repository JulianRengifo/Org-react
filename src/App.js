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
  },
  {
    equipo: "Programación",
    foto: "https://upload.wikimedia.org/wikipedia/en/e/eb/Freddy_Krueger_%28Robert_Englund%29.jpg",
    nombre: "Freddy krueger",
    puesto: "Instructor" 
  },
  {
    equipo: "Data Science",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGzsolr5WUsw4Vz5xu989yGxZMdD9BY6N2Q&s",
    nombre: "Morticia Addams",
    puesto: "directora creativa de lo macabro"
  },
  {
    equipo: "Devops",
    foto: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/03/hipertextual-2020604748.jpg?fit=1200%2C800&quality=55&strip=all&ssl=1",
    nombre: "Lord Voldemort",
    puesto: "especialista en maldiciones de red"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbXFzGkZf10tmVZsnYan0IeC10rnuZOKgbw&s",
    nombre: "Michael Mayers",
    puesto: "analista de datos sobrenaturales"
  },
  {
    equipo: "Móvil",
    foto: "https://i.etsystatic.com/18914926/r/il/f14381/2237038285/il_570xN.2237038285_romt.jpg",
    nombre: "Jason Voorhees",
    puesto: "guardián del dominio de lo desconocido"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://http2.mlstatic.com/D_NQ_NP_783145-MLA51607338448_092022-O.webp",
    nombre: "Scary Movie",
    puesto: "diseñadora de experiencias inquietantes"
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
  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador")
  }

  // Actualizar color de equipo
  const actualizarColor = (color, titulo) => {
    console.log("Actualizar: ", color, titulo)
  }

  // Lista de equipos
  const equipos = [

    {
    titulo: "Programación",
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
        // Nombre cualquiera     Nombre de la funcion
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        />
      )
      }

      <Footer/>

    </div>
  );
}

export default App;
