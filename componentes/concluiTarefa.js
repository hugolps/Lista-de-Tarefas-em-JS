const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener('click', concluirTarefa);
    
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done') //funcão toggle faz um verdadeiro ou falso, done é uma classe no css que  faz o traço sobrescrevendo o texto
}

export default BotaoConclui;