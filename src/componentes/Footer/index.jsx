
import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.linkedin.com/in/j-e-rengifo-cortes/">
                <img src="/img/linkedin.png" alt="Facebook" />
            </a>
            <a href="https://github.com/JulianRengifo">
                <img src="/img/github.png" alt="Twitter" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"/>
        <div>
        <p>Desarrollado por Alura</p>
        <p>Recreado por Julian Rengifo</p>
        </div>
    </footer> 
}

export default Footer