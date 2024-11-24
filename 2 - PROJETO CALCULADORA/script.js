let display = document.getElementById('display');
let operacao = '';
let valorAtual = '';
let resultado = false;


function adicionarAoDisplay(valor) {
    if (resultado) {
        valorAtual = valor;
        resultado = false;
    } else {
        valorAtual += valor;
    }
    display.innerText = valorAtual;
}

function limparTudo() {
    valorAtual = '';
    operacao = '';
    resultado = false;
    display.innerText = '';
}

function apagarUltimo() {
    valorAtual = valorAtual.slice(0, -1);
    display.innerText = valorAtual;
}

function calcular() {
    try {
        operacao = valorAtual.replace('x', '*');
        let resultadoCalc = eval(operacao);
        display.innerText = resultadoCalc;
        valorAtual = resultadoCalc.toString();
        resultado = true;
    } catch (erro) {
        display.innerText = 'Erro';
        valorAtual = '';
        resultado = false;
    }
}
