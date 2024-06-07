
import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    // Destructuración
    // Se usa la destructuracion para no repetir props.datos

    const {colorPrimario, colorSecundario, titulo} = props.datos

    const colorFondo = {
        /*establece el color de fondo de algún elemento en función del valor de 
        colorSecundario dentro de los datos proporcionados a través de props.*/
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={colorFondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
        </div>
    </section>
}

export default Equipo;