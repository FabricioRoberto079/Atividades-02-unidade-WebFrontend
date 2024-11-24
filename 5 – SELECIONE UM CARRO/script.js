const corCarro = document.getElementById('result')
const corFundo = document.querySelector('body')
const carroBranco = document.getElementById('white')
const carroVermelho = document.getElementById('red')
const botaoBranco = document.getElementById('branco')
const botaoVermelho = document.getElementById('vermelho')
const texto = document.querySelector('.text')
const info = document.querySelector('.dev-info')
 


let carroBrancoAcelerado = false
let carroVermelhoAcelerado = false

document.addEventListener('keydown', (e) => {
    if (e.key == 'r' || e.key == 'R') {
        corCarro.style.color = ""
        carroBranco.style.height = ""
        carroBranco.style.top = ""
        carroBranco.style.marginLeft = ""
        carroVermelho.style.height = ""
        carroVermelho.style.top = ""
        corFundo.style.backgroundColor = "black"
        corCarro.textContent = "?"
    }
})

carroBranco.addEventListener('click', function () {
    corCarro.textContent = "Carro Branco"
    if (!carroBrancoAcelerado) {
        corFundo.style.backgroundColor = "white"
        corCarro.style.color = 'red'
        texto.style.color = 'red'
        info.style.color = 'red'
        carroBranco.style.height = '15px'
        carroBranco.style.top = '1rem'
        carroBranco.style.marginLeft = '2.5rem'
        carroVermelho.style.height = ''
        carroVermelho.style.top = ''
    } else {
        carroBranco.style.height = ''
        carroBranco.style.top = ''
        carroBranco.style.marginLeft = ''
        corFundo.style.backgroundColor = 'black'
    }
    carroBrancoAcelerado = !carroBrancoAcelerado
})

carroVermelho.addEventListener('click', function () {
    corCarro.textContent = "Carro Vermelho"
    if (!carroVermelhoAcelerado) {
        corFundo.style.backgroundColor = "red"
        corCarro.style.color = 'white'
        texto.style.color = 'white'
        info.style.color = 'white'
        carroVermelho.style.height = '15px'
        carroVermelho.style.top = '1rem'
        carroBranco.style.height = ''
        carroBranco.style.top = ''
        carroBranco.style.marginLeft = ''
    } else {
        carroVermelho.style.height = ''
        carroVermelho.style.top = ''
        corFundo.style.backgroundColor = 'black'
    }
    carroVermelhoAcelerado = !carroVermelhoAcelerado
})

botaoBranco.addEventListener('click', () => {
    corCarro.textContent = "Carro Branco"
    if (!carroBrancoAcelerado) {
        corFundo.style.backgroundColor = "white"
        corCarro.style.color = 'red'
        texto.style.color = 'red'
        info.style.color = 'red'
        carroBranco.style.height = '15px'
        carroBranco.style.top = '1rem'
        carroBranco.style.marginLeft = '2.5rem'
        carroVermelho.style.height = ''
        carroVermelho.style.top = ''
    } else {
        carroBranco.style.height = ''
        carroBranco.style.top = ''
        carroBranco.style.marginLeft = ''
        corFundo.style.backgroundColor = 'black'
    }
    carroBrancoAcelerado = !carroBrancoAcelerado
})

botaoVermelho.addEventListener('click', () => {
    corCarro.textContent = "Carro Vermelho"
    if (!carroVermelhoAcelerado) {
        corFundo.style.backgroundColor = "red"
        corCarro.style.color = 'white'
        texto.style.color = 'white'
        info.style.color = 'white'
        carroVermelho.style.height = '15px'
        carroVermelho.style.top = '1rem'
        carroBranco.style.height = ''
        carroBranco.style.top = ''
        carroBranco.style.marginLeft = ''
    } else {
        carroVermelho.style.height = ''
        carroVermelho.style.top = ''
        corFundo.style.backgroundColor = 'black'
    }
    carroVermelhoAcelerado = !carroVermelhoAcelerado
})
