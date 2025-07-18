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
        { name: 'Acerto do orçamento', categoria: 'Preparativos', dataInicio: '17/06/2025', dataFinal: '17/06/2025', started: true, check: true, used: true },
        { name: 'Preparando o espaço de trabalho', categoria: 'Preparativos', dataInicio: '05/07/2025', dataFinal: '18/07/2025', started: true, check: true, used: true },
        { name: 'Capitando imagens', categoria: 'Preparativos', dataInicio: '20/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Capitando originais', categoria: 'Preparativos', dataInicio: '17/06/2025', dataFinal: '05/07/2025', started: true, check: true, used: true },
        { name: 'Criando lista de fontes', categoria: 'Pré-diagramação', dataInicio: '15/07/2025', dataFinal: '16/07/2025', started: true, check: true, used: true },
        { name: 'Criando lista de estilos', categoria: 'Pré-diagramação', dataInicio: '15/07/2025', dataFinal: '16/07/2025', started: true, check: true, used: true },
        { name: 'Criando arquivo de formatação (word)', categoria: 'Pré-diagramação', dataInicio: '10/07/2025', dataFinal: '10/07/2025', started: true, check: true, used: true },
        { name: 'Trabalhando no arquivo de formatação (word)', categoria: 'Pré-diagramação', dataInicio: '10/07/2025', dataFinal: '16/07/2025', started: true, check: true, used: true },
        { name: 'Finalizando arquivo de formatação (word)', categoria: 'Pré-diagramação', dataInicio: '16/07/2025', dataFinal: '16/07/2025', started: true, check: true, used: true },
        { name: 'Criando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '14/07/2025', dataFinal: '14/07/2025', started: true, check: true, used: true },
        { name: 'Criando projeto gráfico (InDesign)', categoria: 'Diagramação', dataInicio: '15/07/2025', dataFinal: '18/07/2025', started: true, check: true, used: true },
        { name: 'Trabalhando no arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '17/07/2025', dataFinal: '21/07/2025', started: true, check: false, used: true },
        { name: 'Finalizando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '21/07/2025', dataFinal: '23/07/2025', started: false, check: false, used: true },
        { name: 'Aprovação de projeto gráfico', categoria: 'Aprovações', dataInicio: '18/07/2025', dataFinal: '21/07/2025', started: true, check: false, used: true },
        { name: 'Aprovação de diagramação', categoria: 'Aprovações', dataInicio: '21/07/2025', dataFinal: '25/07/2025', started: false, check: false, used: true },
        { name: 'Revisões de diagramação', categoria: 'Revisão', dataInicio: '25/07/2025', dataFinal: '28/07/2025', started: false, check: false, used: true },
        { name: 'Criação do projeto web', categoria: 'Web', dataInicio: '28/07/2025', dataFinal: '28/07/2025', started: false, check: false, used: true },
        { name: 'Trabalhando no projeto web', categoria: 'Web', dataInicio: '28/07/2025', dataFinal: '30/07/2025', started: false, check: false, used: true },
        { name: 'Finalizando projeto web', categoria: 'Web', dataInicio: '30/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Revisão de projeto web', categoria: 'Revisão', dataInicio: '31/07/2025', dataFinal: '04/08/2025', started: false, check: false, used: true },
        { name: 'Fechamento de diagramação (InDesign)', categoria: 'Fechamentos', dataInicio: '23/07/2025', dataFinal: '25/07/2025', started: false, check: false, used: true },
        { name: 'Fechamento de projeto web', categoria: 'Fechamentos', dataInicio: '04/08/2025', dataFinal: '06/08/2025', started: false, check: false, used: true },
        { name: 'Período de revisão gratuita', categoria: 'Fechamentos', dataInicio: '06/07/2025', dataFinal: '27/08/2025', started: false, check: false, used: true },
        { name: 'PROJETO FECHADO', categoria: 'Fechamentos', dataInicio: '28/08/2025', dataFinal: '28/08/2025', started: false, check: false, used: true },
    ]
}

/* barra de progresso */
function runBar(_porcent){
    const barra = document.querySelector('.color-bar');
    barra.style.width = `${Math.round((100 * _porcent)*100)/100}%`;

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

/* inscrever tarefas... */
function writeTask(){
    const taskPrep = document.querySelector('#id-preparativos');
    const taskPreDiagr = document.querySelector('#id-pre-diagramacao');
    const taskDiagr = document.querySelector('#id-diagramacao');
    const taskWeb = document.querySelector('#id-web');
    const taskAprov = document.querySelector('#id-aprovacoes');
    const taskFech = document.querySelector('#id-fechamentos');
    const taskRev = document.querySelector('#id-revisoes');

    let writePrep = '';
    let writePreDiagr = '';
    let writeDiagr = '';
    let writeWeb = '';
    let writeAprov = '';
    let writeFech = '';
    let writeRev = '';

    tarefas.tarefasItens.forEach( item => {
        let _classe = '';
        let _status = '';
        if( !item.started ){ 
            _classe = 'check-none'; 
            _status = 'Tarefa não iniciada'
        }else{ 
            if(item.check){ 
                _classe = 'check-true';
                _status = 'Finalizada'
            }else{ 
                _classe = 'check-false';
                _status = 'Em progresso...'
            } 
        }
        
        const writeDefault = `
                            <div class="tarefa">
                                <div class="flex-line">
                                    <div class="tarefa-nome">${item.name}</div>
                                </div>
                                <div class="flex-line">
                                    <div class="tarefa-inicio">Início: ${item.dataInicio}</div>
                                    <div class="tarefa-entrega">Fim: ${item.dataFinal}</div>
                                </div>
                                <div class="flex-line">
                                    <div class="check ${_classe}">${_status}</div>
                                </div>
                            </div>
                        `;
        if( item.used ){
            switch( item.categoria ){
                case 'Preparativos': writePrep += writeDefault; break;
                case 'Pré-diagramação': writePreDiagr += writeDefault; break;
                case 'Diagramação': writeDiagr += writeDefault; break;
                case 'Web': writeWeb += writeDefault; break;
                case 'Aprovações': writeAprov += writeDefault; break;
                case 'Fechamentos': writeFech += writeDefault; break;
                case 'Revisão': writeRev += writeDefault; break;
            }
        }
    })

    taskPrep.innerHTML = writePrep;
    taskPreDiagr.innerHTML = writePreDiagr;
    taskDiagr.innerHTML = writeDiagr;
    taskWeb.innerHTML = writeWeb;
    taskAprov.innerHTML = writeAprov;
    taskFech.innerHTML = writeFech;
    taskRev.innerHTML = writeRev;
}

/* detalhes do projeto */
const projeto = {
    nome: 'As Lendas e os Mistérios dos Povos Indígenas',
    autor: ['Edvaldo Silva'],
    edicao: '1',
    ano: '2025',
    sinopse: `O Brasil é um verdadeiro baú do tesouro de histórias fantásticas que não precisam de mapa para ser encontradas. Elas estão bem no coração das nossas florestas e vêm sendo contadas há séculos pelas populações nativas.
O livro “As Lendas e os Mistérios dos Povos Indígenas” é o seu passaporte para essas aventuras incríveis! São dez histórias baseadas nas famosas lendas brasileiras, mas contadas aqui de um jeito muito divertido! Imagine-se numa densa floresta, cercado por árvores centenárias e sons misteriosos... será o vento ou alguma criatura encantada?
A cada página você se surpreenderá com cenas totalmente inesperadas e, enquanto você se diverte, também descobre a ligação ancestral dos povos indígenas com a natureza, suas crenças e valores, além de vivenciar lições valiosas sobre respeito, coragem e a importância de cuidar da nossa terra.
Então, pronto para a viagem? Abra este livro e se prepare para rir, se emocionar e desvendar toda a magia das nossas amadas lendas brasileiras!`,
    tags: ['lendas', 'indigenas', 'literatura', 'nacional', 'literatura', 'infanto', 'juvenil'],
    descricao: `“As Lendas e os Mistérios dos Povos Indígenas” é uma obra voltado ao público infanto-juvenil com contos baseados nas lendas dos nossos povos originários.`,
    dimensoes: [205, 275],
    isbnFisico: '000-0000-00-0',
    isbnDigital: '000-0000-00-0',
    relevantes: 'Quaisquer outras informações pertinentes para serem postas aqui sobre a obra em específico.'
}

function writeDetails(nome, autor, edicao, ano, sinopse, tags, descricao, dimensoes, relevantes){
    const projDetails = `
        <div class="controle">
            <div class="label">Nome</div>
            <div class="detalhe">${nome}</div>
        </div>
        <div class="controle">
            <div class="label">Autor(es)</div>
            <div class="detalhe">${autor.join(', ')}</div>
        </div>
        <div class="controle">
            <div class="label">Edição</div>
            <div class="detalhe">${edicao}</div>
        </div>
        <div class="controle">
            <div class="label">Ano de publicação</div>
            <div class="detalhe">${ano}</div>
        </div>
        <div class="controle">
            <div class="label">Sinopse</div>
            <div class="detalhe">${sinopse}</div>
        </div>
        <div class="controle">
            <div class="label">Tags</div>
            <div class="detalhe">${tags.join(', ')}</div>
        </div>
        <div class="controle">
            <div class="label">Descrição</div>
            <div class="detalhe">${descricao}</div>
        </div>
        <div class="controle">
            <div class="label">Dimensões</div>
            <div class="detalhe">${dimensoes[0]} x ${dimensoes[1]} mm</div>
        </div>
        <div class="controle">
            <div class="label">Informações relevantes</div>
            <div class="detalhe">${relevantes}</div>
        </div>
    `;
    document.querySelector('#proj-detalhes').innerHTML = projDetails;
}

/* calculando o progresso da barra... */
function calcLoad(){
    /* somar todos os pesos das tarefas */
    let somaTarefas = 0;
    let somaChecked = 0;
    for( var i = 0; i < tarefas.tarefasItens.length; i++ ){
        let somaPesos = 0
        while( somaPesos < tarefas.categorias.length ){
            somaTarefas += ( tarefas.tarefasItens[i].categoria == tarefas.categorias[somaPesos].name ) ? tarefas.categorias[somaPesos].peso : 0;
            somaPesos++;
        }
    }
    tarefas.tarefasItens.forEach( e => {
        let ii = 0;
        if( e.check ){
            while( ii < tarefas.categorias[ii].peso ){
                console.log(tarefas.categorias[ii].name);
                
                somaChecked += ( e.categoria == tarefas.categorias[ii].name ) ? tarefas.categorias[ii].peso : 0;
                ii++;
            }
        }
    })
    console.log(`${somaChecked} divido por ${somaTarefas}`);
    
    return somaChecked/somaTarefas;
}

/* escrevendo detalhes do projeto... */
writeDetails( projeto.nome, projeto.autor, projeto.edicao, projeto.ano, projeto.sinopse, projeto.tags, projeto.descricao, projeto.dimensoes, projeto.relevantes );
/* escrevendo as tarefas do projeto... */
writeTask();
/* atualizando barra de progresso... */
const PesoTarefas = calcLoad();

runBar(PesoTarefas);

