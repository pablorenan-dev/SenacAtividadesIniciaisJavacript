
function disabilitarBotoes(){
    let botao = document.getElementsByClassName('opcoesJogoBotao');

    for(let i=0; i< botao.length; i++){
        botao[i].disabled = true;
    }
}

function main(c, d){
    let mostrarResultado = document.getElementById("subtitulo");

    let valor1 = document.getElementById("escreverOpcaoJogador");
    let valor2 = document.getElementById("escreverOpcaoMaquina");
    valor1 = valor1.innerHTML;
    valor2 = valor2.innerHTML;

    if(valor1 === "Pedra" && valor2 === "Tesoura"){
        mostrarResultado.innerHTML = "Pedra quebra tesoura, Jogador 1 ganhou!";
    }else if(valor1 === "Papel" && valor2 === "Pedra"){
        mostrarResultado.innerHTML = "Papel envelopa pedra, Jogador 1 ganhou!";
    }else if(valor1 === "Tesoura" && valor2 === "Papel"){
        mostrarResultado.innerHTML = "Tesoura corta papel, Jogador 1 ganhou!";
    }

    if(valor2 === "Pedra" && valor1 === "Tesoura"){
        mostrarResultado.innerHTML = "Pedra quebra tesoura, Jogador 2 ganhou!";
    }else if(valor2 === "Papel" && valor1 === "Pedra"){
        mostrarResultado.innerHTML = "Papel envelopa pedra, Jogador 2 ganhou!";
    }else if(valor2 === "Tesoura" && valor1 === "Papel"){
        mostrarResultado.innerHTML = "Tesoura corta papel, Jogador 2 ganhou!";
    }

    if(valor1 === valor2){
        mostrarResultado.innerHTML = "Empate!";
    }

    disabilitarBotoes();
}

function start(a,b){
    let valor = parseInt(a);
    let valorDescricao = "";
    let type = parseInt(b);
    let valor1;
    let valor2;
    let escreverOpcaoJogador = document.getElementById("escreverOpcaoJogador");
    let escreverOpcaoMaquina = document.getElementById("escreverOpcaoMaquina");
    let tituloJogadores = document.querySelectorAll(".tituloJogadores"); //puxa todos as classes com o valor ".tituloJogadores", o ponto é usado para sinaiza que pixa classes, e depois acessa eles de forma de array

    if(valor === 1){
        valorDescricao = "Pedra";
    }else if(valor === 2){
        valorDescricao = "Papel";
    }else if(valor === 3){
        valorDescricao = "Tesoura";
        
    }

    if(type === 1){
        valor1 = valor;
        escreverOpcaoJogador.innerHTML = valorDescricao;
        tituloJogadores[0].innerHTML = `Jogador 1 ☑`;
    }else if(type === 2){
        valor2 = valor;
        escreverOpcaoMaquina.innerHTML = valorDescricao;
        tituloJogadores[1].innerHTML = `Jogador 2 ☑`;
    }

    if(escreverOpcaoMaquina.innerHTML !== "" && escreverOpcaoJogador.innerHTML !== ""){
        main();
    }
    
}

function recomeca(){
    let mostrarResultado = document.getElementById("subtitulo");
    let escreverOpcaoJogador = document.getElementById("escreverOpcaoJogador");
    let escreverOpcaoMaquina = document.getElementById("escreverOpcaoMaquina");
    let botao = document.getElementsByClassName('opcoesJogoBotao');
    let tituloJogadores = document.querySelectorAll(".tituloJogadores");

    for(let i=0; i< botao.length; i++){
        botao[i].disabled = false;
    }

    tituloJogadores[0].innerHTML = `Jogador 1`;
    tituloJogadores[1].innerHTML = `Jogador 2`;
    escreverOpcaoJogador.innerHTML = "";
    escreverOpcaoMaquina.innerHTML = "";
    mostrarResultado.innerHTML = "&nbsp;";
}

