function calcularAluguel()
{
    let dias       = parseInt(document.getElementById("dias").value);
    let km         = parseFloat(document.getElementById("km").value);
    let selectCarro = document.getElementById("opcaoCarro");
    let h1Resultado = document.getElementById("resultado");
    //depois de selecionar o select, seleciona o valor da opcao selecionada
    let opcaoCarro = parseInt(selectCarro.options[selectCarro.selectedIndex].value);
    let valorAluguel = 0;

    if(isNaN(opcaoCarro) === false)
    {
        if(opcaoCarro === 1)
        {
            if(km <= 100.00){
                valorAluguel = (dias * 90) + (km * 0.20);
            }else if(km > 100.00){
                valorAluguel = (dias * 90) + (km * 0.10);
            }
            
        }
        else if(opcaoCarro === 2)
        {
            if(km <= 200.00){
                valorAluguel = (dias * 150) + (km * 0.30);
            }else if(km > 200.00){
                valorAluguel = (dias * 150) + (km * 0.24);
            }
        }

        h1Resultado.innerHTML = `O aluguel sera de: R$ ${valorAluguel}`;
    }else{
        alert("SELECIONE UMA OPCAO DE CARRO");
    }
}



