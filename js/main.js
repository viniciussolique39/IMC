window.onload = () => {
    "use strict";
    
    if("serviceWorker" in navigator){
       navigator.serviceWorker.register("./sw.js");
    }
};

const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const idade = parseInt(document.getElementById('idade').value);
    const Selecione = document.getElementById('Selecione').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    const imc = calculateIMC(peso, altura);
    const classification = getIMCClassification(imc);
    
    resultDiv.innerHTML = `${name}, ${idade} anos, ${Selecione === 'male' ? 'masculino' : 'feminino'}, com IMC: ${imc.toFixed(2)} - ${classification}`;
});

function calculateIMC(peso, altura) {
    return peso / ((altura / 100) ** 2);
}

function getIMCClassification(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade', 'Abaixo do peso', 'Peso normal', 'Sobrepeso';
}

