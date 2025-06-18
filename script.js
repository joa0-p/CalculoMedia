//função para calcular a média das notas//
function calcularMedia() {
 
    // pega os valores dos campos
    var n1 = parseFloat(document.getElementById('nota1').value);
    var n2 = parseFloat(document.getElementById('nota2').value);
 
         // verifica se são números validos
    if (isNaN(n1) || isNaN(n2)){
        alert("Por Favor, insira notas válidas");
        return;
    }
 
    // calcula a média//
    var media= (n1 + n2) / 2;
 
    //mostra o resultado//
    document.getElementById('resultado').innerText= "A média é: " + media.toFixed(2);
   
 }
