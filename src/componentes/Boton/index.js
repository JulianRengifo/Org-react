import "./Boton.css"

const Boton = (props) => {
    return <button className="boton">{props.children}</button> /*Children se denomina al dato interno del componente <Boton> */
}

export default Boton;