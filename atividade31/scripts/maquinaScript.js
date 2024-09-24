function main(a){
    let valor = parseInt(a);
    let valorAleatorio = Math.floor(Math.random() * 3) + 1;
    let maquinaDiv = document.getElementById("maquina");
    let valorEscrito = 0;
    let valorAleatorioEscrito = 0;
    
    switch (valorAleatorio){
        case (1):
            valorAleatorioEscrito = "Pedra";
        break;
        case (2):
            valorAleatorioEscrito = "Papel";
        break;
        case (3):
            valorAleatorioEscrito = "Tesoura";
    }

    switch (valor){
        case (1):
            valorEscrito = "Pedra";
        break;
        case (2):
            valorEscrito = "Papel";
        break;
        case (3):
            valorEscrito = "Tesoura";
    }
    
    maquinaDiv.innerHTML = `<br> A maquina esolheu ${valorAleatorioEscrito}<br> Você esolheu ${valorEscrito}`;

    if (valor === 1 && valorAleatorio === 3){
        console.log("Pedra contra tessoura, ganhou");
        maquinaDiv.innerHTML = `<br> A maquina esolheu ${valorAleatorioEscrito}<br> Você esolheu ${valorEscrito}<br>Pedra contra tessoura, Você ganhou`;
        maquinaDiv.style.color = "rgb(1, 90, 1)";
    }else if (valor === 2 && valorAleatorio === 1){
        console.log("Papel contra pedra, Você ganhou");
        maquinaDiv.innerHTML = `<br> A maquina esolheu ${valorAleatorioEscrito}<br> Você esolheu ${valorEscrito}<br>Papel contra pedra, Você ganhou`;
        maquinaDiv.style.color = "rgb(1, 90, 1)";
    }else if (valor === 3 && valorAleatorio === 2){
        console.log("Tesoura contra papel, Você ganhou");
        maquinaDiv.innerHTML = `<br> A maquina esolheu ${valorAleatorioEscrito}<br> Você esolheu ${valorEscrito}<br>Tesoura contra papel, Você ganhou`;
        maquinaDiv.style.color = "rgb(1, 90, 1)";
    }else{
        maquinaDiv.innerHTML = `<br> A maquina esolheu ${valorAleatorioEscrito}<br> Você esolheu ${valorEscrito}<br>Você perdeu...`;
        maquinaDiv.style.color = "red";
    }

    if (valor === valorAleatorio){
        maquinaDiv.innerHTML = `<br> A maquina esolheu ${valorAleatorioEscrito}<br> Você esolheu ${valorEscrito}<br> EMPATE!`;
        maquinaDiv.style.color = "rgb(255, 123, 0)";
    }

}