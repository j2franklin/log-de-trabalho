/* toggle do menu */
function clickMenu(){
    const menu = document.querySelector('#nav-mobile');
    const icon = document.querySelector('#menu-button');

    if( menu.style.display == 'none' ){
        menu.style.display = 'block';
        icon.style.backgroundColor = '#05056d';
        icon.style.color = '#fff';
    }else{
        menu.style.display = 'none';
        icon.style.backgroundColor = '#4040b6';
        icon.style.color = '#ace8f0';
    }
}

/* tarefas */
const tarefas = {
    categorias: [
        { name: 'Preparativos', peso: 1 },
        { name: 'Pré-diagramação', peso: 1.5 },
        { name: 'Diagramação', peso: 2 },
        { name: 'Revisão', peso: 1 },
        { name: 'Web', peso: 2 },
        { name: 'Aprovações', peso: 1.2 },
        { name: 'Fechamentos', peso: 1 },
    ],
    tarefasItens: [
        { name: 'Acerto do orçamento', categoria: 'Preparativos', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Preparando o espaço de trabalho', categoria: 'Preparativos', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Capitando imagens', categoria: 'Preparativos', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Capitando originais', categoria: 'Preparativos', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Criando lista de fontes', categoria: 'Pré-formatação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Criando lista de estilos', categoria: 'Pré-formatação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Criando arquivo de formatação (word)', categoria: 'Pré-formatação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Trabalhando no arquivo de formatação (word)', categoria: 'Pré-formatação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Finalizando arquivo de formatação (word)', categoria: 'Pré-formatação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Criando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Criando projeto gráfico (InDesign)', categoria: 'Diagramação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Trabalhando no arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
        { name: 'Finalizando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '10/07/2025', dataFinal: '27/07/2025', check: false },
    ]
}

/* barra de progresso */
function runBar(_porcent){
    const barra = document.querySelector('.color-bar');
    barra.style.width = `${(100 * _porcent)}%`;

    // Calcular cor interpolada entre vermelho (255,0,0) e verde (0,255,0)
    const r = Math.round(255 * (1 - _porcent));
    const g = Math.round(255 * _porcent);
    const b = 0;

    barra.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Criando e posicionar o parágrafo com a porcentagem
    const paragrafo = document.createElement("p");
    paragrafo.textContent = barra.style.width.replace('.', ',');
    barra.appendChild(paragrafo);

    if (_porcent <= 0.10) {
        paragrafo.style.left = '8px';
    } else if (_porcent > 0.10 && _porcent <= 0.91) {
        paragrafo.style.right = '-24px';
    } else if (_porcent > 0.91) {
        paragrafo.style.right = '8px';
    }
}

runBar(0);

