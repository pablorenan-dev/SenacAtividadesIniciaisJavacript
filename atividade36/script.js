function calcularPontos(){
    let horas = parseInt(document.getElementById("horas").value);
    let h1Resultado = document.getElementById("resultado");
    let pontos = 0;
    let calculo = 0;

    if(horas < 10)
    {
        pontos = horas * 2;
    }
    else if(horas >= 10 && horas <= 20)
    {
        pontos = horas * 5;
    }
    else if(horas > 20){
        pontos = horas * 10;
    }

    calculo = pontos * 0.05;

    h1Resultado.innerHTML = `Voce recebra R$ ${calculo.toFixed(2)} pelas suas horas.`
}