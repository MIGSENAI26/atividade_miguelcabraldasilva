import "./Button.css"

function Button({texto, entrar, destacar, submit}){
    function btnClicar(){
        if (entrar == true){
            let nome = prompt("Qual é o seu nome?");
            while (nome == null || nome.length < 3){
                alert("Nome inválido! Tente novamente!");
                nome = prompt("Qual é o seu nome?");
            }
            alert(`Bem vindo ao sistema, ${nome}!`);
        }
        else if (destacar == true){
            let body = document.getElementById("body");
            body.style.backgroundColor = "#364d4e";
            console.log("DESTAQUE REALIZADO!!!");
        }
        else if (submit == true){
            alert(`Os dados foram enviados! Obrigado!`);
        }
    }
    return(
        <button 
            className={`${'botao'}`} 
            onClick={() =>{
                btnClicar()
            }}
        >
            {texto}
        </button>
    )
}

export default Button