import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {

    //Con props.datos muestra los colaboradores
    const {nombre, puesto, foto, id} = props.datos
    const {colorPrimario, eliminarColaborador} = props

    return <div className="colaborador">
        {/*Se agragrega el id a la function eliminarColaborador para eliminar el colabordar y se agrega arrow function antes para que se elimine el colaborador seleccionado*/}
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador (id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador