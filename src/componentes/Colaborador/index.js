import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineLike, AiFillLike } from "react-icons/ai";

const Colaborador = (props) => {

    //Con props.datos muestra los colaboradores
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador,like} = props


    return <div className="colaborador">
        {/*Se agragrega el id a la function eliminarColaborador para eliminar el colabordar y se agrega arrow function antes para que se elimine el colaborador seleccionado*/}
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador (id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>

            {/*condicion ? verdadero : falso*/}
            {/*Usamos operador ternario para mostrar el icono like con relleno cuando sea true y el icono sin relleno cuando sea false*/} 
            {/*Agregamos el evento onClick en los iconos, llamamos la function like y le enviamos el id*/}
            {fav ? <AiFillLike color="#3AC7CC" onClick={() => like(id)}/> : <AiOutlineLike onClick={() => like(id)}/>}
            
            
        </div>
    </div>
}

export default Colaborador