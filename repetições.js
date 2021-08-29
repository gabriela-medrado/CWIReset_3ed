//Exercício 1
//Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição para exibir todos os valores do array;

var sapatos = ["bota", "salto", "sandália", "rasteira", "chinelo"]

var num = 0

do{
  var sapatoEscolhido = num++
  var listaSapatos = sapatos[sapatoEscolhido]

  console.log(listaSapatos)
}
while(num < sapatos.length)

 

//Exercício 2
//Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;

var listaNumeros = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

var somatoria = 0;
var num = 0
for (num=0; num < listaNumeros.length; num++){
 somatoria += listaNumeros[num]
}

var mediaAritmetica = (somatoria)/listaNumeros.length
 console.log(mediaAritmetica)

 // Exercício 3
 //Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.


var nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

var meuNome = "Gabriela"

nomeComum = false

var num = 0

while (num < nomesComuns.length){
 
  if (meuNome === nomesComuns[num]){
    nomeComum = true
    break;
  }
  num++
}

if (nomeComum) {
  console.log("É, nome comum :P")
}

else {
  console.log("Diferentão, hein? XD")
}