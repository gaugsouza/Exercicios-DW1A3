function calcular(){
	var altura = Number(document.getElementById('altura').value);
    var peso = Number(document.getElementById('peso').value);
    if(altura != '' && peso != ''){  
        var imc = (peso/Math.pow(altura,2)).toFixed(2);
        defineCondicao(imc, peso, altura);
    }
}

function defineCondicao(imc, peso, altura){
    var difMenor = ((18.5 * (Math.pow(altura,2))) - peso).toFixed(2);
    var difMaior = (peso - (24.9 * (Math.pow(altura,2)))).toFixed(2);

    var condicao = imc <= 16.9 ? "Sinto muito, mas seu IMC é de " + imc + ", por isso você está muito abaixo do peso e deveria engordar no mínimo " + difMenor + "kg." :
                   imc >= 17 && imc <=18.4 ? "Seu IMC é de " + imc + ". Isso significa que você está abaixo do peso, recomenda-se que você engorde no mínimo" + difMenor + " kg." :
                   imc >= 18.5 && imc <= 24.9 ? "Seu IMC é de " + imc + ". Isso significa que você está com o peso normal." :
                   imc >= 25 && imc <= 29.9 ? "Seu IMC é de " + imc + ". Isso significa que você está acima do peso, recomenda-se que você perca no mínimo " + difMaior + "kg." :
                   imc >= 30 && imc <= 34.9 ? "Sinto muito, mas seu IMC é de " + imc + ". Sendo assim você possui obesidade grau I, é necessário que você perca no mínimo " + difMaior + "kg." :
                   imc >= 35 && imc <= 40 ? "Sinto muito, mas seu IMC é de " + imc + ". Sendo assim você possui obesidade grau II, é extremamente necessário que você perca no mínimo " + difMaior + "kg." :
                   "Sinto muito, mas seu IMC é de " + imc + ". Sendo assim você possui obesidade grau III, você DEVE perder no mínimo " + difMaior + "kg o mais rápido possível!";

    document.getElementById('infoLateral').value = condicao;
}