function displayLigaDesliga(elementoHtml){
    let testar = "none"
    
    if (elementoHtml.style.display == testar){
        elementoHtml.style.display = "flex";
    }else{
        elementoHtml.style.display = "none";
    }
}

// Ingressos
const ingressosAgendafilmes = [
    {
        id: "filmeOprotetor",
        img: "img/filmes_o-protetor.png",
        alt: "O Protetor",
        sinopse: `<br>O PROTETOR: CAPÍTULO FINAL<br>
            <br>Desde que desistiu de sua vida como assassino trabalhando para o governo,
            Robert McCall (Denzel Washington) tem dificuldades para se reconciliar com as coisas horríveis que fez em seu
            passado, e encontra um estranho conforto em trazer à justiça aos oprimidos. Após encontrar um lar inesperado no sul da
            Itália, ele descobre que seus novos amigos vivem sob o controle dos chefes do crime organizado do local.
            Assim que os eventos se desdobram para acontecimentos mortais, McCall sabe o que precisa fazer:
            se tornar um protetor para seus amigos e enfrentar a máfia.
        `
    },

    {
        id: "filmeJogosMortaisX",
        img: "img/filmes_jogos-mortais.jpg",
        alt: "Jogos Mortais",
        sinopse: `<br>JOGOS MORTAIS X<br>
            <br>John Kramer sempre lutou contra o câncer implacável que o aflige. Quando descobre
            uma médica (Synnove Macody Lund) como verdadeira chance de sua sobrevivência, ela
            viaja para o México para iniciar o tratamento. Lá, ele conhece a doutora, a equipe
            e uma paciente curada. Para sua surpresa, tudo não passava de um golpe. Agora,
            aqueles que brincaram com sua vida experimentarão o jogo de vingança de um homem
            acostumado a brincar com a morte. Sequência número 10 da série de filmes de sucesso,
            criada por James Wan, iniciada com Jogos Mortais (2004).
        `
    },

    {
        id: "filmeNossoSonho",
        img: "img/filmes_nosso-sonho.jpg",
        alt: "Nosso Sonho",
        sinopse: `<br>NOSSO SONHO<br>
            <br>Desde a infância, Claudinho (Lucas Penteado) alimentava um sonho. Após convencer
            Buchecha (Juan Paiva) a formar uma dupla de MCs, eles iniciaram uma trajetória de
            sucesso movida a esperança e simpatia na busca pelo sucesso. Das inúmeras apresentações
            de começo de carreira em bailes até o primeiro hit na rádio, a vida deles e familiares
            passou por muitas mudanças. Essa é a história de Claudinho e Buchecha, os carismáticos
            cantores que, sem falar de drogas e armas, ou difamar as mulheres, mudaram a relação do Brasil
            com o funk carioca e figuram até hoje entre os maiores vendedores de CDs do gênero.
        `
    },

    {
        id: "filmeBarbie",
        img: "img/filmes_barbie.jpg",
        alt: "Barbie",
        sinopse: `<br>Barbie<br>
            <br>A jovem Barbie (Margot Robbie) vive no mundo perfeito das bonecas, chamado Barbielândia,
            onde todo dia é incrível. No entanto, quando ela entra em uma crise existencial, acaba sendo
            exilada devido às suas imperfeições. Agora a boneca precisa optar por viver uma aventura no mundo
            real dos humanos, onde aprenderá uma importante lição sobre a vida e o que realmente importa.
        `
    },

    {
        id: "filmeBesouroAzul",
        img: "img/filmes_besouro-azul.jpg",
        alt: "Besouro Azul",
        sinopse: `<br>Besouro Azul<br>
            <br>Recém-formado, Jaime Reyes volta para casa cheio de expectativas para o futuro, mas logo descobre que
            seu lar não é mais o mesmo. Enquanto tenta encontrar seu propósito no mundo, o destino intervém e faz chegar
            às mãos de Jaime uma antiga relíquia da biotecnologia alienígena – o Escaravelho. Quando o Escaravelho escolhe
            Jaime como seu hospedeiro simbiótico, sua vida muda para sempre. Ele ganha uma incrível armadura que lhe dá
            poderes extraordinários e se torna o Super-herói BESOURO AZUL
        `
    },

    {
        id: "filmeSomDaLiberdade",
        img: "img/filmes_som-da-liberdade.png",
        alt: "Som da Liberdade",
        sinopse: `<br>Som da Liberdade<br>
            <br>Tim (Kim Caviezel) trabalhava como agente federal americano e estava satisfeito com o próprio desempenho e o
            de sua equipe no combate a pedofilia. Certo dia, Tim é confrontado com uma realidade diferente. Após salvar um menino
            das mãos de traficantes sexuais, a criança pede que ele salve sua irmã em poder dos criminosos. Ao descobrir ela viva, na
            Colômbia, ele se desliga do governo com o apoio de sua esposa (Mira Sorvino). É quando Tim parte para uma perigosa missão
            de resgate, não somente dela, mas de outros inocentes das garras dessa absurda indústria. Baseado em uma história real.
            `
    }
]

const salaExibicao = [
    {
      id_filme: 0,
      sala: "05"
    },
    {
      id_filme: 1,
      sala: "02"
    },
    {
      id_filme: 2,
      sala: "03"
    },
    {
      id_filme: 3,
      sala: "04"
    },
    {
      id_filme: 4,
      sala: "01"
    },
    {
      id_filme: 5,
      sala: "06"
    }
]


let idSalaHorario = [];
for (let i = 1; i <= 126; i++) {
    idSalaHorario.push(i);
}


const ingressosAgendamento = document.querySelector("#ingressos-agendamento");

let body = document.querySelector("body");

if (body.id == "ingressos"){
    for (let i = 1; i < ingressosAgendafilmes.length; i++){

        const ingressosAgendamentoBloco = document.createElement("div");
    
        ingressosAgendamentoBloco.innerHTML = `
            <div class="ingressos-agendamento-bloco" id="${ingressosAgendafilmes[i].id}">                        
                <div class="ingressos-agendamento-bloco-filmes">
                    <img src="${ingressosAgendafilmes[i].img}" alt="${ingressosAgendafilmes[i].alt}">
                    <p>${ingressosAgendafilmes[i].sinopse}</p>
                </div>
    
                <div id="ingressos-agendamento-bloco-agenda">
                    <div class="ingressos-Agenda-tab">
                        <button class="tab-dia" onclick="dia(event, 'SEG${salaExibicao[i].id_filme}')">13/11<br> SEG</button>
                        <button class="tab-dia" onclick="dia(event, 'TER${salaExibicao[i].id_filme}')">14/11<br> TER</button>
                        <button class="tab-dia" onclick="dia(event, 'QUA${salaExibicao[i].id_filme}')">15/11<br> QUA</button>
                        <button class="tab-dia" onclick="dia(event, 'QUI${salaExibicao[i].id_filme}')">16/11<br> QUI</button>
                        <button class="tab-dia" onclick="dia(event, 'SEX${salaExibicao[i].id_filme}')">17/11<br> SEX</button>
                        <button class="tab-dia" onclick="dia(event, 'SAB${salaExibicao[i].id_filme}')">18/11<br> SAB</button>
                        <button class="tab-dia" onclick="dia(event, 'DOM${salaExibicao[i].id_filme}')">19/11<br> DOM</button>
                    </div>
                    <form id="SEG${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i]}" name="horario${salaExibicao[i].id_filme}SEG" value="${ingressosAgendafilmes[i].alt} SEG 13:30 13/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+1]}" name="horario${salaExibicao[i].id_filme}SEG" value="${ingressosAgendafilmes[i].alt} SEG 16:50 13/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+1]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+2]}" name="horario${salaExibicao[i].id_filme}SEG" value=" ${ingressosAgendafilmes[i].alt}SEG 20:10 13/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+2]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                    <form id="TER${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i+3]}" name="horario${salaExibicao[i].id_filme}TER" value="${ingressosAgendafilmes[i].alt} TER 13:30 14/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+3]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+4]}" name="horario${salaExibicao[i].id_filme}TER" value="${ingressosAgendafilmes[i].alt} TER 16:50 14/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+4]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+5]}" name="horario${salaExibicao[i].id_filme}TER" value="${ingressosAgendafilmes[i].alt} TER 20:10 14/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+5]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                    <form id="QUA${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i+6]}" name="horario${salaExibicao[i].id_filme}QUA" value="${ingressosAgendafilmes[i].alt} TER 13:30 14/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+6]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+7]}" name="horario${salaExibicao[i].id_filme}QUA" value="${ingressosAgendafilmes[i].alt} TER 16:50 14/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+7]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+8]}" name="horario${salaExibicao[i].id_filme}QUA" value="${ingressosAgendafilmes[i].alt} TER 20:10 14/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+8]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                    <form id="QUI${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i+9]}" name="horario${salaExibicao[i].id_filme}QUI" value="${ingressosAgendafilmes[i].alt} QUI 13:30 16/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+9]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+10]}" name="horario${salaExibicao[i].id_filme}QUI" value="${ingressosAgendafilmes[i].alt} QUI 16:50 16/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+10]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+11]}" name="horario${salaExibicao[i].id_filme}QUI" value="${ingressosAgendafilmes[i].alt} QUI 20:10 16/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+11]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                    <form id="SEX${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i+12]}" name="horario${salaExibicao[i].id_filme}SEX" value="${ingressosAgendafilmes[i].alt} SEX 13:30 17/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+12]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+13]}" name="horario${salaExibicao[i].id_filme}SEX" value="${ingressosAgendafilmes[i].alt} SEX 16:50 17/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+13]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+14]}" name="horario${salaExibicao[i].id_filme}SEX" value="${ingressosAgendafilmes[i].alt} SEX 20:10 17/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+14]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                    <form id="SAB${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i+15]}" name="horario${salaExibicao[i].id_filme}SAB" value="${ingressosAgendafilmes[i].alt} SAB 13:30 18/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+15]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+16]}" name="horario${salaExibicao[i].id_filme}SAB" value="${ingressosAgendafilmes[i].alt} SAB 16:50 18/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+16]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+17]}" name="horario${salaExibicao[i].id_filme}SAB" value="${ingressosAgendafilmes[i].alt} SAB 20:10 18/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+17]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                    <form id="DOM${salaExibicao[i].id_filme}" class="ingressos-Agenda-tabconteudo" action="">
                        <span>Sala ${salaExibicao[i].sala}</span>
                        <input type="radio" id="${idSalaHorario[20*i+i+18]}" name="horario${salaExibicao[i].id_filme}DOM" value="${ingressosAgendafilmes[i].alt} DOM 13:30 19/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+18]}">13:30</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+19]}" name="horario${salaExibicao[i].id_filme}DOM" value="${ingressosAgendafilmes[i].alt} DOM 16:50 19/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+19]}">16:50</label>
                        <input type="radio" id="${idSalaHorario[20*i+i+20]}" name="horario${salaExibicao[i].id_filme}DOM" value="${ingressosAgendafilmes[i].alt} DOM 20:10 19/11 sala ${salaExibicao[i].sala}">
                        <label for="${idSalaHorario[20*i+i+20]}">20:10</label><br>
                        <input type="submit" value="Agendar">
                    </form>
                </div>
            </div>
            `
    
        ingressosAgendamento.appendChild(ingressosAgendamentoBloco);
    
        let ingressosAgendamentoBlocoId = document.querySelector("#" + ingressosAgendafilmes[i].id);
        displayLigaDesliga(ingressosAgendamentoBlocoId);
    }

    let botaoIngressosOprotetor = document.querySelector("#ingressos-cartaz-oProtetor");
    let botaoIngressosjogosMortais = document.querySelector("#ingressos-cartaz-jogosMortais");
    let botaoIngressosNossoSonho = document.querySelector("#ingressos-cartaz-nossoSonho");
    let botaoIngressosBarbie = document.querySelector("#ingressos-cartaz-barbie");
    let botaoIngressosBesouroAzul = document.querySelector("#ingressos-cartaz-besouroAzul");
    let botaoIngressosSomDaLiberdade = document.querySelector("#ingressos-cartaz-somDaLiberdade");

    let ingressosAgendamentoBlocoVisivel = document.querySelector("#filmeOprotetor");


    botaoIngressosOprotetor.addEventListener("click", (e)=> {
        displayLigaDesliga(ingressosAgendamentoBlocoVisivel);
        let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[0].id);
        displayLigaDesliga(visualizarAgendar);
        ingressosAgendamentoBlocoVisivel = visualizarAgendar;
    });

    botaoIngressosjogosMortais.addEventListener("click", (e)=> {
        displayLigaDesliga(ingressosAgendamentoBlocoVisivel);
        let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[1].id);
        displayLigaDesliga(visualizarAgendar);
        ingressosAgendamentoBlocoVisivel = visualizarAgendar;
    });

    botaoIngressosNossoSonho.addEventListener("click", (e)=> {
        displayLigaDesliga(ingressosAgendamentoBlocoVisivel);
        let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[2].id);
        displayLigaDesliga(visualizarAgendar);
        ingressosAgendamentoBlocoVisivel = visualizarAgendar;
    });

    botaoIngressosBarbie.addEventListener("click", (e)=> {
        displayLigaDesliga(ingressosAgendamentoBlocoVisivel);
        let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[3].id);
        displayLigaDesliga(visualizarAgendar);
        ingressosAgendamentoBlocoVisivel = visualizarAgendar;
    });

    botaoIngressosBesouroAzul.addEventListener("click", (e)=> {
        displayLigaDesliga(ingressosAgendamentoBlocoVisivel);
        let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[4].id);
        displayLigaDesliga(visualizarAgendar);
        ingressosAgendamentoBlocoVisivel = visualizarAgendar;
    });

    botaoIngressosSomDaLiberdade.addEventListener("click", (e)=> {
        displayLigaDesliga(ingressosAgendamentoBlocoVisivel);
        let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[5].id);
        displayLigaDesliga(visualizarAgendar);
        ingressosAgendamentoBlocoVisivel = visualizarAgendar;
    });

    let i, tabconteudo, tabDia;
      
    tabconteudo = document.getElementsByClassName("ingressos-Agenda-tabconteudo");
    for (i = 0; i < tabconteudo.length; i++) {
            tabconteudo[i].style.display = "none";
    }
    
    function dia(evt, dia) {

        let i, tabconteudo, tabDia;
      
        tabconteudo = document.getElementsByClassName("ingressos-Agenda-tabconteudo");
        for (i = 0; i < tabconteudo.length; i++) {
            tabconteudo[i].style.display = "none";
        }

        tabDia = document.getElementsByClassName("tab-dia");
        for (i = 0; i < tabDia.length; i++) {
            tabDia[i].className = tabDia[i].className.replace(" active", "");
        }
      
        document.getElementById(dia).style.display = "block";
        evt.currentTarget.className += " active";

        let removeRadio = document.querySelectorAll('input[type="radio"]');
        removeRadio.forEach(function(removeRadio) {
            removeRadio.checked = false;
        });

    }

    let btnSubmit = document.querySelectorAll('input[type="submit"][value="Agendar"]');

    btnSubmit.forEach(function(btnSubmit) {
        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            let opcaoSelecionada = document.querySelectorAll('input[type="radio"]:checked');
            
            // Verificar se pelo menos uma opção foi selecionada
            if (opcaoSelecionada.length > 0) {
                opcaoSelecionada.forEach(function(opcaoSelecionada) {
                    let valorSelecionado = opcaoSelecionada.value;
                    alert('Agendado', valorSelecionado);
                    // Pode fazer algo mais com o valor, como enviar para o servidor
                });
            } else {
                alert('Nenhuma opção foi selecionada.');
            }
        });
    });
    
}

// Cadastro

const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/

function setError(index){
    campos[index].style.border = '4px solid #e63636'
    spans[index].style.display='block'
}

function removeError(index){
    campos[index].style.border = '4px solid #4ba375'
    spans[index].style.display='none'
}
function nameValidate(){
    if(campos[0].value.length<3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function senhaValidate(){
    if(campos[2].value.length<6)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        senhaValidate2();
    }
}

function senhaValidate2(){
    if(campos[2].value == campos[3].value && campos[3].value.length>=6)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}