import './Main.css'
import Button from '../Button/Button'
import Card from '../Card/Card'

function Main(){
    return(
        <main>
            <h2>A maior empresa de tecnologia do mundo!</h2>

            <p>
                Trabalhamos no desenvolvimento de web sites, dispositivos eletrônicos e na segurança de sistemas.
            </p>

            <div className="card-container">
                <Card 
                    titulo="Desenvolvimento Web" 
                    descricao="O desenvolvimento web é feito a partir de linguagens de marcação, estilo e programação, como HTML, CSS e JavaScript. Além disso, existem frameworks que ajudam no processo de desenvolvimento, como o React!"
                    imagem="Imagem-Linguagens.png"
                    imagemAlt="Icones das Linguagens"
                />
                <Card 
                    titulo="Aplicativos Mobile"
                    descricao="Aplicativos para Mobile são aqueles feitos especialmente para celulares."
                    imagem="Imagem-AppsMobile.webp"
                    imagemAlt="Apps de Mobile"
                />
                <Card 
                    titulo="Banco de dados"
                    descricao="Banco de dados é um espaço feito para armazenar dados, que pode ser compreendido por meio de tabelas e IDs. A linguagem de programação mais comum associada à banco de dados é o SQL."
                    imagem="Imagem-SQL.jpg"
                    imagemAlt="Icone do SQL"
                />
            </div>

            <Button texto="Mostrar destaque" destacar/>
        </main>
    )
}

export default Main