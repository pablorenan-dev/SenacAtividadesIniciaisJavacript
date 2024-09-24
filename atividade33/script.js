function verificar(){
    let valor = parseFloat(document.getElementById("valor").value);
    let salario = parseFloat(document.getElementById("salario").value);
    let anos = parseInt(document.getElementById("anos").value);
    let prestacao = (valor / (anos * 12));
    let h1Resultado = document.getElementById("resultado");

    if(prestacao > (salario * 0.3))
    {
        h1Resultado.innerHTML = "O emprestimo foi negado";
    }
    else if(prestacao <= (salario * 0.3))
    {
        h1Resultado.innerHTML = "O emprestimo foi aceito";
    }
}