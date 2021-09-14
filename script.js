function calcular() {
    //Procura no HTML os ids "nota", seleciona os valores deles e transforma de uma String para um Float

    var nota1 = parseFloat(document.getElementById('nota1').value)
    var nota2 = parseFloat(document.getElementById('nota2').value)
    var nota3 = parseFloat(document.getElementById('nota3').value)
    var nota4 = parseFloat(document.getElementById('nota4').value)
    
    //Realiza o calculo da média das quatro notas

    if (!nota1 || !nota2 || !nota3 || !nota4){
        alert("Você precisa digitar todas as notas.")
        return
    }


    var notaFinal = parseFloat((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)
    
    //Caso a nota seja menor que 5, altera a class no HTML para "reprovado" e adiciona o texto, caso contrário, altera a class para "aprovado"
    var elNotaFinal = document.getElementById('notaFinal')

    elNotaFinal.classList.remove("reprovado","aprovado")
    
    if (notaFinal > 6) {
        elNotaFinal.classList.add("aprovado");
        elNotaFinal.innerHTML = "Parabéns, você foi aprovado! Nota final: " + notaFinal

    } else {
        elNotaFinal.classList.add("reprovado");
        elNotaFinal.innerHTML = "Reprovado! Nota final: " + notaFinal
    }
}