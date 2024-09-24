function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = (peso / (altura ** 2));
    let h1Resultado = document.getElementById("resultado");

    if(imc < 18.5){
        h1Resultado.innerHTML = "Você esta abaixo do peso";
    }else if(imc >= 18.5 && imc <= 25.0){
        h1Resultado.innerHTML = "Você esta no peso ideal";
    }else if(imc > 25.0 && imc <= 30.0){
        h1Resultado.innerHTML = "Você esta acima do peso";
    }else if(imc > 30.0 && imc <= 40.0){
        h1Resultado.innerHTML = "Você esta obeso(a)";
    }else if(imc > 40.0){
        h1Resultado.innerHTML = "Você esta morbidamente obeso(a)";
    }
}