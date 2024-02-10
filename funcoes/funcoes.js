import entradaResposta from "readline-sync"

function selecionarElementosAleatorios(elemento, quantidadeElementos){
    const embaralhaElementos = elemento.sort(() => Math.random() - 0.5);
    return embaralhaElementos.slice(0, quantidadeElementos);
}


function exibirSimbolo(simbolo, index){
    console.log(`\n${index+1}: ${"Qual o elemento equivalente ao simbolo -  " + simbolo.simbolo}`);
    const respostaUsuario = entradaResposta.question("Digite sua resposta: ");
    return respostaUsuario;
}

function validarResposta(respostaUsuario, simbolo){
    return respostaUsuario === simbolo.elemento;
}


function exibirResultado(pontuacaoFinal, nome) {
    let mensagem = '';
  
    if (pontuacaoFinal <= 3) {
      mensagem = "Tente denovo";
    } else if (pontuacaoFinal <= 6) {
      mensagem = "Bom trabalho!!";
    } else if (pontuacaoFinal <= 9) {
      mensagem = "MUITO BOM!";
    } else {
      mensagem = "'EXCELENTE! ";
    }
  
    console.log(`\nJogador(a): ${nome}`);
    console.log(`Pontuação final: ${pontuacaoFinal} acertos.`);
    console.log(mensagem);
  }


export {selecionarElementosAleatorios, exibirSimbolo, validarResposta, exibirResultado} 