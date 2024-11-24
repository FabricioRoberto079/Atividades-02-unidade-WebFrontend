const cartas = document.querySelectorAll('.memory-card');
let cartaVirada = false;
let travarTabuleiro = false;
let primeiraCarta, segundaCarta;
let tentativas = 0;
let contadorTentativasElemento = document.getElementById('attemptsCount');
let elementoHistorico = document.getElementById('history');

function virarCarta() {
    if (travarTabuleiro) return; // Se o tabuleiro estiver travado, não faça nada
    if (this === primeiraCarta) return; // Se a mesma carta for clicada duas vezes, ignore

    this.classList.add('virada');

    if (!cartaVirada) {
        cartaVirada = true;
        primeiraCarta = this;
        return;
    }

    segundaCarta = this;
    verificarPar();
}

function verificarPar() {
    let saoIguais = primeiraCarta.dataset.framework === segundaCarta.dataset.framework;
    saoIguais ? desativarCartas() : desvirarCartas();
    atualizarTentativas();
}

function desativarCartas() {
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);

    resetarTabuleiro();
    verificarFimDoJogo();
}

function desvirarCartas() {
    travarTabuleiro = true;
    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        resetarTabuleiro();
    }, 1500);
}

function resetarTabuleiro() {
    [cartaVirada, travarTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

function atualizarTentativas() {
    tentativas++;
    contadorTentativasElemento.textContent = tentativas;
    localStorage.setItem('tentativas', tentativas);
}

function verificarFimDoJogo() {
    const todasViradas = [...cartas].every(carta => carta.classList.contains('virada'));
    if (todasViradas) {
        setTimeout(() => {
            alert('PARABÉNS! Você encontrou todos os pares!');
        }, 500);

        atualizarHistorico();
    }
}

function atualizarHistorico() {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(tentativas);
    localStorage.setItem('historico', JSON.stringify(historico));

    elementoHistorico.innerHTML = '<h2>Histórico de Tentativas:</h2>';
    historico.forEach((tentativa, index) => {
        elementoHistorico.innerHTML += `<p>Rodada ${index + 1}: ${tentativa} tentativas</p>`;
    });
}

function embaralharCartas() {
    cartas.forEach(carta => {
        let posicaoAleatoria = Math.floor(Math.random() * 12);
        carta.style.order = posicaoAleatoria;
    });
}

function reiniciarJogo() {
    cartas.forEach(carta => carta.classList.remove('virada'));
    cartas.forEach(carta => carta.addEventListener('click', virarCarta));

    embaralharCartas();
    tentativas = 0;
    contadorTentativasElemento.textContent = 0;
}

document.getElementById('restartBtn').addEventListener('click', () => {
    reiniciarJogo();
});

cartas.forEach(carta => carta.addEventListener('click', virarCarta));
embaralharCartas();
atualizarHistorico();
