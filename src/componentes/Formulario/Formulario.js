import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton";

//Formulario estara pendiente de actualizar los valores

const Formulario = (props) => {

    //Valor
    const[nombre,actualizarNombre] = useState("")
    const[puesto, actualizarPuesto] = useState("")
    const[foto, actualizarFoto] = useState("")
    const[equipo, actualizarEquipo] = useState("")

    //Equipo
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    //Nos evita a colocar tanto props.colaborador, props.etc
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault() /* Evita el envío del formulario predeterminado, no se recarga la pagina */
        console.log("Manejar el envio")

        let datosEnviar = {
            //Tenemos la llave nombre que no esta definido por que internamente el valor y la llave tienen el mismo nombre
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        //Enviamos el nuevo formulario a App.js pero como un objeto
        // titulo y color hacen referencia al valor que esta almacenado en el useState
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className= "formulario">
        <form onSubmit={manejarEnvio}> 
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <CampoTexto 
            titulo= "Nombre" 
            placeholder= "Ingresar Nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            
            <CampoTexto 
            titulo="Puesto"
            placeholder= "Ingresar Puesto" 
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />

            <CampoTexto 
            titulo="Foto" 
            placeholder= "Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            
            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <Boton> 
                Crear 
            </Boton> 
        </form> 

        <form onSubmit={manejarNuevoEquipo}> 
            <h2>Rellena el formulario para crear el equipo.</h2>

            <CampoTexto 
            titulo= "Titulo" 
            placeholder= "Ingresar Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />
            
            <CampoTexto 
            titulo="Color"
            placeholder= "Ingresar el color en Hex" 
            required
            valor={color}
            actualizarValor={actualizarColor}
            />

            <Boton> Registrar Equipo </Boton>
        </form>
    </section>
}

export default Formulario;