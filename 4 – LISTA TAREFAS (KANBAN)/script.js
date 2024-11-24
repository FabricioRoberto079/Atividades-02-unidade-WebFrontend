document.addEventListener('DOMContentLoaded', function () {
    const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa');
    const entradaTarefa = document.getElementById('entradaTarefa');
    const colunas = document.querySelectorAll('.cartoes-kanban');

    let cartaoArrastado = null;

    // Funções de arrastar
    function iniciarArrasto(e) {
        cartaoArrastado = this;
        e.dataTransfer.effectAllowed = 'move';
    }

    function finalizarArrasto() {
        cartaoArrastado = null;
        atualizarContadoresColuna();
        salvarTarefas();
    }

    function soltar(e) {
        e.preventDefault();
        if (cartaoArrastado && cartaoArrastado !== this) {
            this.appendChild(cartaoArrastado);
            atualizarContadoresColuna();
            salvarTarefas();
        }
    }

    // Adiciona os eventos de arrastar e soltar
    colunas.forEach(coluna => {
        coluna.addEventListener('dragover', e => e.preventDefault());
        coluna.addEventListener('drop', soltar);
    });

    // Atualiza o contador de tarefas em cada coluna
    function atualizarContadoresColuna() {
        colunas.forEach(coluna => {
            const contador = coluna.children.length;
            const spanContador = coluna.parentElement.querySelector('.contador-coluna');
            spanContador.textContent = contador;
        });
    }

    // Cria uma nova tarefa
    function criarNovoCartao(tituloTarefa) {
        const cartao = document.createElement('div');
        cartao.className = 'cartao-kanban';
        cartao.draggable = true;
        cartao.innerHTML = `
            <div class="titulo-cartao">${tituloTarefa}</div>
        `;
        
        cartao.addEventListener('dragstart', iniciarArrasto);
        cartao.addEventListener('dragend', finalizarArrasto);

        return cartao;
    }

    // Adiciona a tarefa no Kanban
    botaoAdicionarTarefa.addEventListener('click', function () {
        const tituloTarefa = entradaTarefa.value.trim();
        if (tituloTarefa) {
            const novoCartao = criarNovoCartao(tituloTarefa);
            colunas[0].appendChild(novoCartao); // Adiciona a nova tarefa na primeira coluna
            atualizarContadoresColuna();
            salvarTarefas();
            entradaTarefa.value = ''; // Limpa o campo de entrada
        }
    });

    // Salva as tarefas no localStorage
    function salvarTarefas() {
        const tarefas = [];
        colunas.forEach(coluna => {
            const titulos = Array.from(coluna.children).map(cartao => cartao.querySelector('.titulo-cartao').textContent);
            tarefas.push(titulos);
        });
        localStorage.setItem('tarefasKanban', JSON.stringify(tarefas));
    }

    // Carrega as tarefas do localStorage
    function carregarTarefas() {
        const tarefasSalvas = JSON.parse(localStorage.getItem('tarefasKanban'));
        if (tarefasSalvas) {
            tarefasSalvas.forEach((titulosColuna, index) => {
                // Limpa as colunas antes de carregar
                colunas[index].innerHTML = '';
                titulosColuna.forEach(tituloTarefa => {
                    const novoCartao = criarNovoCartao(tituloTarefa);
                    colunas[index].appendChild(novoCartao); // Adiciona as tarefas nas colunas correspondentes
                });
            });
        }
    }

    // Inicializa os contadores e carrega as tarefas
    atualizarContadoresColuna();
    carregarTarefas();
});
