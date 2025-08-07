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
        { name: 'Acerto do orçamento', categoria: 'Preparativos', dataInicio: '23/07/2025', dataFinal: '24/07/2025', started: true, check: true, used: true },
        { name: 'Preparando o espaço de trabalho', categoria: 'Preparativos', dataInicio: '23/07/2025', dataFinal: '25/07/2025', started: true, check: true, used: true },
        { name: 'Capitando imagens', categoria: 'Preparativos', dataInicio: '24/07/2025', dataFinal: '25/07/2025', started: true, check: true, used: true},
        { name: 'Capitando originais', categoria: 'Preparativos', dataInicio: '17/06/2025', dataFinal: '05/07/2025', started: false, check: false, used: false },
        { name: 'Criando lista de fontes', categoria: 'Pré-diagramação', dataInicio: '15/07/2025', dataFinal: '16/07/2025', started: false, check: false, used: false },
        { name: 'Criando lista de estilos', categoria: 'Pré-diagramação', dataInicio: '15/07/2025', dataFinal: '16/07/2025', started: false, check: false, used: false },
        { name: 'Criando arquivo de formatação (word)', categoria: 'Pré-diagramação', dataInicio: '10/07/2025', dataFinal: '10/07/2025', started: false, check: false, used: false },
        { name: 'Trabalhando no arquivo de formatação (word)', categoria: 'Pré-diagramação', dataInicio: '10/07/2025', dataFinal: '16/07/2025', started: false, check: false, used: false },
        { name: 'Finalizando arquivo de formatação (word)', categoria: 'Pré-diagramação', dataInicio: '16/07/2025', dataFinal: '16/07/2025', started: false, check: false, used: false },
        { name: 'Criando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '14/07/2025', dataFinal: '14/07/2025', started: false, check: false, used: false },
        { name: 'Criando projeto gráfico (InDesign)', categoria: 'Diagramação', dataInicio: '15/07/2025', dataFinal: '18/07/2025', started: false, check: false, used: false },
        { name: 'Trabalhando no arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '17/07/2025', dataFinal: '21/07/2025', started: false, check: false, used: false },
        { name: 'Finalizando arquivo de diagramação (InDesign)', categoria: 'Diagramação', dataInicio: '21/07/2025', dataFinal: '23/07/2025', started: false, check: false, used: false },
        { name: 'Aprovação de projeto gráfico', categoria: 'Aprovações', dataInicio: '18/07/2025', dataFinal: '21/07/2025', started: false, check: false, used: false },
        { name: 'Aprovação de diagramação', categoria: 'Aprovações', dataInicio: '21/07/2025', dataFinal: '25/07/2025', started: false, check: false, used: false },
        { name: 'Revisões de diagramação', categoria: 'Revisão', dataInicio: '25/07/2025', dataFinal: '28/07/2025', started: false, check: false, used: false },
        { name: 'Criação do projeto web', categoria: 'Web', dataInicio: '24/07/2025', dataFinal: '24/07/2025', started: true, check: true, used: true },
        { name: 'Trabalhando no projeto web', categoria: 'Web', dataInicio: '24/07/2025', dataFinal: '31/07/2025', started: true, check: true, used: true },
        { name: 'Finalizando projeto web', categoria: 'Web', dataInicio: '28/07/2025', dataFinal: '08/08/2025', started: true, check: false, used: true},
        { name: 'Revisão de projeto web', categoria: 'Revisão', dataInicio: '31/07/2025', dataFinal: '08/08/2025', started: true, check: false, used: true },
        { name: 'Fechamento de diagramação (InDesign)', categoria: 'Fechamentos', dataInicio: '23/07/2025', dataFinal: '25/07/2025', started: false, check: false, used: false },
        { name: 'Fechamento de projeto web', categoria: 'Fechamentos', dataInicio: '31/07/2025', dataFinal: '09/08/2025', started: true, check: false, used: true },
        { name: 'Período de revisão gratuita', categoria: 'Fechamentos', dataInicio: '09/08/2025', dataFinal: '09/09/2025', started: false, check: false, used: true },
        { name: 'PROJETO FECHADO', categoria: 'Fechamentos', dataInicio: '09/09/2025', dataFinal: '10/09/2025', started: false, check: false, used: true},
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
    nome: 'Meu turbante favorito',
    autor: ['Eliene Leandro de Araújo'],
    edicao: '1',
    ano: '2025',
    sinopse: `Meu turbante favorito é uma obra literária que resgata as tradições culturais quilombolas, trazendo à tona os valores dos povos africanos. A obra conta a história de uma menina que deseja entender porque em sua comunidade quilombola as mulheres usam turbante nos cabelos. Por meio de um instigante diálogo entre mãe e filha, a narrativa aborda a valorização da cultura afro-brasileira exemplificada nos turbantes. A curiosidade da menina oferece ao leitor um passeio pela história, tradições e mitos africanos, à medida que a mãe da personagem lhe explica sobre a simbologia do turbante para o povo quilombola no Brasil.`,
    tags: ['nacional', 'literatura', 'infanto', 'juvenil'],
    descricao: `Trata-se de um livro que conta a história de Zuri, uma menina afrodescendente que relata toda sua cultura e vivência no quilombo Irerê. Por ver mulheres quilombolas usarem turbantes, ela sente curiosidade em aprender sobre isso e sua mãe, Malaika, a ensina a fazer várias amarrações e, juntas, elas fazem uma verdadeira "viagem" cultural na cultura africana e seus tecidos.`,
    dimensoes: [205, 275],
    isbnFisico: '978-65-985012-9-7 (fisico)',
    isbnDigital: '',
    relevantes: 'Felipe Tognoli (ilustrações)'
}

function writeDetails(nome, autor, edicao, ano, sinopse, tags, descricao, dimensoes, isbnfisico, isbndigital, relevantes){
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
            <div class="label">ISBN (físico/digital)</div>
            <div class="detalhe">${isbnfisico}${isbnfisico != '' && isbndigital!= '' ? ` / ` : ` `}${isbndigital}</div>
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
        if( tarefas.tarefasItens[i].used ){
            let somaPesos = 0
            while( somaPesos < tarefas.categorias.length ){
                somaTarefas += ( tarefas.tarefasItens[i].categoria == tarefas.categorias[somaPesos].name ) ? tarefas.categorias[somaPesos].peso : 0;
                somaPesos++;
            }
        }
    }
    tarefas.tarefasItens.forEach( e => {
        let ii = 0;
        if( e.check && e.used && e.started ){
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
writeDetails( projeto.nome, projeto.autor, projeto.edicao, projeto.ano, projeto.sinopse, projeto.tags, projeto.descricao, projeto.dimensoes, projeto.isbnFisico, projeto.isbnDigital, projeto.relevantes );
/* escrevendo as tarefas do projeto... */
writeTask();
/* atualizando barra de progresso... */
const PesoTarefas = calcLoad();

runBar(PesoTarefas);

