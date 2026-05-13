import "./Header.css"
import Button from "../Button/Button"

function Header(){
    return(
        <header className="header">
            <h1>TechConnect</h1>

            <nav>
                <a href="#">Sobre nós</a>
                <a href="#">Missão</a>
                <a href="#">Produtos</a>
                <a href="#">Investimentos</a>
                <a href="#">Contate-nos</a>
            </nav>

            <Button texto="Entrar" entrar/>
        </header>
    )
}

export default Header