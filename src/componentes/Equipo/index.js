
import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    // Destructuración
    // Se usa la destructuracion para no repetir props.datos

    const {colorPrimario, colorSecundario, titulo} = props.datos

    const { colaboradores} = props

    const colorFondo = {
        /*establece el color de fondo de algún elemento en función del valor de 
        colorSecundario dentro de los datos proporcionados a través de props.*/
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="equipo" style={colorFondo}>
        <h3 style={estiloTitulo}>{titulo}</h3>

        <div className="colaboradores">
        {
            // le agregamos la propiedad index que es la posicion, en este caso se usa para cuando varios colaboradores tengan el mismo nombre
                colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    /* usamos un key cuando usamos .map, esto para cuando se elimine un 
                    colaborador se elimine el colaborador seleccionado y no todos */
                    key={index}
                    />
                )
            }
        </div>
    </section>
}

export default Equipo;