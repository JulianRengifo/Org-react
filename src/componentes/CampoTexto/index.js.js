import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    // ["como se hacede al valor del estado, y al lado derecho la funcion que se encarga de actualizar el estado"]
    // const [valor, actualizarValor] = useState("")
    
    const placeholderModificado = `${props.placeholder}...` /* Pone los puntos en los placeholder */

    const manejarCambio = (e) => {
        /*e.target.value da el valor actual del elemento en el que ocurrió el evento. 
        Por ejemplo, si tienes un campo de entrada de texto y alguien 
        escribe "Hola" en él, e.target.value contendría "Hola" */
        
        /*Actualiza el campo cuando ingresamos un nuevo valor
        Tomando tomando el actualizarValor de formulario*/
        props.actualizarValor(e.target.value)
    }

    return <div className = "campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder= {placeholderModificado} 
        required={props.required}
        /*Se le quitan la responsabilidad de como se va actualizar los valores de los input normal 
        que esta en index.js campoTexto, se recibe el valor atraves de props y se hace la vinculacion*/ 
        value={props.valor} // Esta conectado con furmulario que es el componente papa
        /* cuando el usuario cambie el valor del elemento al que se le ha asignado el manejador de eventos onChange, 
        la función manejarCambio se ejecutará automáticamente y tendrás acceso al nuevo valor del elemento a través de e.target.value.*/
        onChange={manejarCambio}
        />
    </div>
}



export default CampoTexto;