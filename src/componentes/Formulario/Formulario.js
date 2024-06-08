import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import "../Boton"
import Boton from "../Boton";

//Formulario estara pendiente de actualizar los valores

const Formulario = (props) => {

    //Valor
    const[nombre,actualizarNombre] = useState("")
    const[puesto, actualizarPuesto] = useState("")
    const[foto, actualizarFoto] = useState("")
    const[equipo, actualizarEquipo] = useState("")

    //Nos evita a colocar tanto props.colaborador, props.etc
    const {registrarColaborador} = props

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
            />

            <Boton> 
                Crear 
            </Boton> 
        </form> 
    </section>
}

export default Formulario;