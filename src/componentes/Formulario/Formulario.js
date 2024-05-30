
import "./Formulario.css"
import CampoTexto from "../CampoTexto/index.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import "../Boton"
import Boton from "../Boton";

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault() /* Evita el envío del formulario predeterminado, no se recarga la pagina */
        console.log("Manejar el envio", e)
    }

    return <section className= "formulario">
        <form onSubmit={manejarEnvio}> 
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo= "Nombre" placeholder= "Ingresar Nombre"/>
            <CampoTexto titulo="Puesto" placeholder= "Ingresar Puesto"/>
            <CampoTexto titulo="Foto" placeholder= "Ingresar enlace de foto"/>
            <ListaOpciones></ListaOpciones>
            <Boton> 
                Crear 
            </Boton> 
        </form> 
    </section>
}

export default Formulario;