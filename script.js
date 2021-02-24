// carne            - 400gr por pessoa  + de 6 horas    = 650
// cerveja          - 1200ml por pessoa + 6 horas       = 2000ml
// refrierante/agua - 1000ml por pessoa + 6 horas       = 1500ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");



let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando....");



    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
   



    resultado.innerHTML = 
        `<p><img src="./img/carne.png" width="30" > ${qdtTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += 
        `<p><img src="./img/beer.png" width="30" >${Math.ceil(qdtTotalCerveja / 350)} Latas de Cervejas</p>`

    resultado.innerHTML += 
        `<p> <img src="./img/coke.png" width="30" >${qdtTotalBebidas} ml de Bebidas</p>`


}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function goBack() {
    window.history.back()
}
