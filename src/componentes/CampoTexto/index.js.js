
import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log("Datos", props.titulo)
    const placeholderModificado = `${props.placeholder}...` /* Pone los puntos en los placeholder */
    return <div className = "campo-texto">
        <label>{props.titulo}</label>
        <input placeholder= {placeholderModificado} required={props.required}></input>
    </div>
}



export default CampoTexto;