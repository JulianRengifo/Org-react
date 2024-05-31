
import {useState} from "react"
import "./MiOrg.css"

const MiOrg = () => {

    //Estado - hooks
    //useState
    //useState()

    console.log()

    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    // useState("julian") crea una variable de estado (nombre) con un valor inicial de "julian" y una función (actualizarNombre) para actualizar ese estado.
    const [nombre, actualizarNombre] = useState("julian") /*Permite para manejar el estado en un componente funcional */
    const [mostrar, actualizarMosrar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento" ,!mostrar) // se muestra el estado en true y se usa la negacion (!) para cambiar el estado
        actualizarMosrar(!mostrar) // Actualiza el valor negado de mostar cambiando de true a false y viceversa
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización {nombre}</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick}/>
    </section>
}

export default MiOrg;