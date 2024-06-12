import "./Colaborador.css"

const Colaborador = (props) => {

    //Con props.datos muestra los colaboradores
    const {nombre, puesto, foto} = props.datos
    const {colorPrimario, eliminarColaborador} = props

    return <div className="colaborador">
        <span onClick={eliminarColaborador}>Eliminar</span>
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