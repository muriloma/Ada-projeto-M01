const listaDeTarefas = {
    id: 0,
    lista: []
}

function criarTarefa(listaDeTarefas, tarefa) {
    let id = ++listaDeTarefas.id;

    const tarefaCriada = {
        id,
        tarefa
    };

    listaDeTarefas.lista.push(tarefaCriada)
    return tarefaCriada;
}

function listarTarefas(listaDeTarefas) {
    return console.log(listaDeTarefas.lista);
}

function editarTarefa(listaDeTarefas, id, tarefa) {
    const index = listaDeTarefas.lista.findIndex((tarefas) => tarefas.id === id)
    listaDeTarefas.lista[index].tarefa = tarefa

    return listaDeTarefas;
}

function detalharTarefaPorId(listaDeTarefas, id) {
    const tarefa = listaDeTarefas.lista.filter((tarefa) => tarefa.id === id)

    return tarefa;
}

function removerTarefa(listaDeTarefas, id) {
    const novaListaTarefas = listaDeTarefas.lista.filter((tarefa) => tarefa.id !== id)
    const { id: novoId } = listaDeTarefas
    listaDeTarefas = {
        id: novoId,
        lista: novaListaTarefas
    }

    return console.log(listaDeTarefas);
}


criarTarefa(listaDeTarefas, "Criar função pra adicionar tarefa")
criarTarefa(listaDeTarefas, "Criar função pra listar tarefas")

// listarTarefas(listaDeTarefas)

editarTarefa(listaDeTarefas, 1, "testa")

// console.log(listaDeTarefas);

// detalharTarefaPorId(listaDeTarefas, 2)

removerTarefa(listaDeTarefas, 1)