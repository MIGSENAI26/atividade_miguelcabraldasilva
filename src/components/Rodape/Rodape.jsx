import './Rodape.css'
import Button from '../Button/Button'

function Rodape(){
    return(
        <footer className="footer">

            <Button texto="Enviar" submit/>

            <p>E-mail: techconnect@gmail.com</p>
            <p>Número: +55 14 997843781</p>
            <p>&copy; Miguel Cabral da Silva</p>
        </footer>
    )
}

export default Rodape