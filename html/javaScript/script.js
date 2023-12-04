function adicionaElemento(elementoPai, elementofilho){
    elementoPai.appendChild(elementofilho);
}

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

const ingressosAgendamento = document.querySelector("#ingressos-agendamento");


for (let i = 1; i < ingressosAgendafilmes.length; i++){

    const ingressosAgendamentoBloco = document.createElement("div");

    ingressosAgendamentoBloco.innerHTML = `
        <div class="ingressos-agendamento-bloco" id="${ingressosAgendafilmes[i].id}">                        
            <div class="ingressos-agendamento-bloco-filmes">
                <img src="${ingressosAgendafilmes[i].img}" alt="${ingressosAgendafilmes[i].alt}">
                <p>${ingressosAgendafilmes[i].sinopse}</p>
            </div>

            <div id="ingressos-agendamento-bloco-agenda">
                <div>
                    <a href="#ingressos-agendamento">
                        <button>13/11<br> SEG</button>
                    </a>
                    <a href="#ingressos-agendamento">
                        <button>14/11<br> TER</button>
                    </a>
                    <a href="#ingressos-agendamento">
                        <button>15/11<br> QUA</button>
                    </a>
                    <a href="#ingressos-agendamento">
                        <button>16/11<br> QUI</button>
                    </a>
                    <a href="#ingressos-agendamento">
                        <button>17/11<br> SEX</button>
                    </a>
                    <a href="#ingressos-agendamento">
                        <button>118/11<br> SAB</button>
                    </a>
                    <a href="#ingressos-agendamento">
                        <button>19/11<br> DOM</button>
                    </a>
                </div>
                <div>
                    <span>Sala 05</span>
                    <span>13:30</span>
                    <span>16:50</span>
                    <span>20:10</span>
                </div>
            </div>
        </div>
        `
    adicionaElemento(ingressosAgendamento, ingressosAgendamentoBloco);

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
    let visualizarAgendar = document.querySelector("#" + ingressosAgendafilmes[1].id);
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

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}