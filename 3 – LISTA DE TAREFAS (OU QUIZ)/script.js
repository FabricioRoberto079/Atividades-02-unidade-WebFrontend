const botao = document.getElementById("addTaskBtn")
const lista = document.getElementById("taskList")
const input = document.getElementById("taskInput")

botao.addEventListener("click", function(){
    if(input.value == ""){
        alert("preencha vacilão")
    }else{

        var novoElemento = document.createElement("li")
        var novobotao = document.createElement("button")
        novoElemento.innerHTML = input.value;
        lista.appendChild(novoElemento)
        novobotao.innerHTML = "X"
        novoElemento.appendChild(novobotao)
        
        input.value=""
        
        novobotao.addEventListener("click", function (){
            novoElemento.parentNode.removeChild(novoElemento)
        })
        
    }
})