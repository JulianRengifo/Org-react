
import "./ListaOpciones.css"

const ListaOpciones = () => {

    const equipos = [

        "Programacion",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]
    
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index) => 
                <option key={index}>{equipo}</option> /* index es la posicion del elemento dentro del arreglo */
            )}
        </select>
    </div>
}

export default ListaOpciones;