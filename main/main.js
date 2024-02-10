import elementosTabelaPeriodica from "../dados/elementosTabelaPeriodica.js";
import {selecionarElementosAleatorios, exibirSimbolo, validarResposta, exibirResultado} from "../funcoes/funcoes.js";
import entradaNome from 'readline-sync';

console.log("-------------------- QUIZ TABELA PERIODICA --------------------")
let nome = entradaNome.question("\n\nDigite seu nome: ");
let quantidadeElementos = 10;
let pontuacaoFinal = 0;
console.log("\n\n******************** QUIZ INICIADO ********************");


const questoesSelecionadas = selecionarElementosAleatorios(elementosTabelaPeriodica, quantidadeElementos);

questoesSelecionadas.forEach((simbolo, index) => {
    const respostaUsuario = exibirSimbolo(simbolo, index);
    const resultadoValidacao = validarResposta(respostaUsuario.toLocaleUpperCase(), simbolo);

    if(resultadoValidacao){
        console.log("Resposta Correta \u{1F60A} !!!!!");
        pontuacaoFinal++;
    } else {
        console.log("Resposta Errada \u{2639} !!!! ")
    }
});

exibirResultado(pontuacaoFinal, nome);