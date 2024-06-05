
import "./ListaOpciones.css"

const ListaOpciones = (props) => {


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        //Se envia el valor al papa y este se estara actulizando, se hace el envio atravez de la funcion actualizarEquipo
        props.actualizarEquipo(e.target.value)
    }
    
    return <div className="lista-opciones">
        <label>Equipos</label>
        {/*Select recibe el valor y la funcion desde el componente papa que es formulario*/}
        <select value={props.valor} onChange={manejarCambio}> 
            {/* describe una opción en una lista desplegable que está deshabilitada y no tiene ningún valor asociado inicialmente.*/}
            <option value="" disabled defaultValue="" hidden>Seleccionar quipo</option>
            {props.equipos.map((equipo, index) => 
                <option key={index} value={equipo}>{equipo}</option> /* index es la posicion del elemento dentro del arreglo */
            )}
        </select>
    </div> 
}

export default ListaOpciones;