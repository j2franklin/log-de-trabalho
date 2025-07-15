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
        { name: 'Acerto do orçamento', categoria: 'Preparativos', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Preparando o espaço de trabalho', categoria: 'Preparativos', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Capitando imagens', categoria: 'Preparativos', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Capitando originais', categoria: 'Preparativos', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Criando lista de fontes', categoria: 'Pré-formatação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Criando lista de estilos', categoria: 'Pré-formatação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Criando arquivo de formatação (word)', categoria: 'Pré-formatação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Trabalhando no arquivo de formatação (word)', categoria: 'Pré-formatação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Finalizando arquivo de formatação (word)', categoria: 'Pré-formatação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Criando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Criando projeto gráfico (InDesign)', categoria: 'Diagramação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Trabalhando no arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
        { name: 'Finalizando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '01/07/2025', dataFinal: '31/07/2025', started: false, check: false, used: true },
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
        console.log(`${_classe}|${_status}`);
        
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
                case 'Pré-formatação': writePreDiagr += writeDefault; break;
                case 'Diagramação': writeDiagr += writeDefault; break;
                case 'Web': writeWeb += writeDefault; break;
                case 'Aprovações': writeAprov += writeDefault; break;
                case 'Fechamentos': writeFech += writeDefault; break;
                case 'Revisões': writeRev += writeDefault; break;
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
    nome: 'Nome do livro',
    autor: ['Fulano da Silva'],
    edicao: '1',
    ano: '2025',
    sinopse: 'Essa escrita vai na parte de trás da quarta capa',
    tags: ['teste', 'comprovação', 'javascript'],
    descricao: 'Essa escrita vai na parte interna do livro e vai ser lido pelos leitores de eBook.',
    dimensoes: [275, 205],
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

writeDetails( projeto.nome, projeto.autor, projeto.edicao, projeto.ano, projeto.sinopse, projeto.tags, projeto.descricao, projeto.dimensoes, projeto.relevantes );
writeTask();
runBar(0);

