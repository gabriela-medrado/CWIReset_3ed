/*Exercício 1
Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela*/

function imprimir(i){
  console.log(i)
}

/*Exercício 2
Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
Crie uma função para cada algoritmo proposto lá, exceto o número 6;
Todas as funções devem retornar o valor final;
Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
Procure utilizar comentários para documentar cada método;
Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.*/

//Essa função é para veririfcar se um nome é igual a outro:

function mesmoNome(nomeFulano, nomeCiclano){
  return(nomeFulano == nomeCiclano)
}

//Essa função é para verificar se uma idade é maior que 18 anos:

function maiorDeIdade(idade){
  return(idade >= 18)
}

//Essa função é para calcular o valor de um boleto com acréscimo de 10%:

function valorComJuros(valorBoleto){
  return(valorBoleto * 1.1)
}

//Essa função é para calcular a média aritmética:

function mediaAritmetica(valores){
  var num = 0
  var somatoria = 0
  for (num=0; num < valores.length; num++){
 somatoria += valores[num]
}
  return((somatoria)/valores.length)
}

//Essa função é para calcular a margem bruta:

function margemBruta(receitaLiquida, custoProdutos){
  var lucroBruto = receitaLiquida - custoProdutos
  
  return((lucroBruto / receitaLiquida) * 100)
}

var cwi = "CWI"
var reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]