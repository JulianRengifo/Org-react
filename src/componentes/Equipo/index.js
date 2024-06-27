
import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    // Destructuración
    // Se usa la destructuracion para no repetir props.datos

    const {colorPrimario, colorSecundario, titulo, id} = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor, like} = props

    const colorFondo = {
        //Usamos el paquete hex-to-rgba para aplicar opacidad al color del fondo
        //aplicamos hexToRgba y le pasamos el primer valor el colorPrimario y el segundo valor la opacidad
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    //Se utiliza fragmentos <> </> de elementos en lugar de utilizar un div o cualquier otro elemento de contenedor.
    return <>
        { 
        //Usamos length para ver la cantidad de elementos en una estructura de datos 
        //Usamos una estructura condicional, se utiliza para verificar si un arreglo tiene elementos donde colaboradores si es mayor a 0 entonces realizara la siguiente operacion
        colaboradores.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input
                className="input-color"
                type="color"
                value={colorPrimario}
                // imprime en la consola del navegador el valor actual del elemento de formulario cada vez que su valor cambia
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        // le agregamos la propiedad index que es la posicion, en este caso se usa para cuando varios colaboradores tengan el mismo nombre
                            colaboradores.map((colaborador, index) => <Colaborador 
                                datos={colaborador} 
                                /* usamos un key cuando usamos .map, esto para cuando se elimine un 
                                colaborador se elimine el colaborador seleccionado y no todos */
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                actualizarColor={actualizarColor}
                                like={like}
                                />
                            )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;