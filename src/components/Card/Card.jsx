import './Card.css'

function Card({titulo, descricao, imagem, imagemAlt}){
    return(
        <div className="card">
            <h3>{titulo}</h3>
            <img src={imagem} alt={imagemAlt} className="imagem"/>
            <p className="descricao">{descricao}</p>
        </div>
    )
}

export default Card