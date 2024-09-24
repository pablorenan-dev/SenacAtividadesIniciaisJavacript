function calcularSalarioReajustado(){
    let h1Resultado = document.getElementById("resultado");
    let salarioAtual = parseFloat(document.getElementById("salarioFunconario").value);
    let anosTrabalhados = parseInt(document.getElementById("anosTrabalhadosSalario").value);
    let sexoF = document.getElementById("sexoFuncionarioF").checked;
    let sexoM = document.getElementById("sexoFuncionarioM").checked;
    let salarioReajustado = 0;

    if(sexoF === true){
        if(anosTrabalhados < 15)
        {
            salarioReajustado = (salarioAtual * 0.05) + salarioAtual;
        }
        else if(anosTrabalhados >= 15 && anosTrabalhados <= 20)
        {
            salarioReajustado = (salarioAtual * 0.12) + salarioAtual;
        }
        else
        {
            salarioReajustado = (salarioAtual * 0.23) + salarioAtual;
        }
    }else if (sexoM == true){
        if(anosTrabalhados < 20)
        {
            salarioReajustado = (salarioAtual * 0.03) + salarioAtual;
        }
        else if(anosTrabalhados >= 20 && anosTrabalhados <= 30)
        {
            salarioReajustado = (salarioAtual * 0.13) + salarioAtual;
        }
        else
        {
            salarioReajustado = (salarioAtual * 0.25) + salarioAtual;
        }
    }

    h1Resultado.innerHTML = `O novo salário reajustado será: R$ ${salarioReajustado}`;
}