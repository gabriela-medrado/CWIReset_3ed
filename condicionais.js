peso = 80;
altura = 1.67;
//Atenção! A altura precisa estar em metros para este cálculo

imc = peso / (altura ** 2);

classificacao = "";
grauObesidade = 0;

if (imc < 18.50) {
 classificacao = "magro"
 grauObesidade = 0
}

else if (imc <= 24.99){
  classificacao = "normal"
  grauObesidade = 0
}

else if (imc <= 29.99){
  classificacao = "com sobrepeso"
  grauObesidade = 1
}

else if (imc <= 39.99){
  classificacao = "obeso"
  grauObesidade = 2
}

else if (imc >= 40){
  classificacao = "obeso mórbido"
  grauObesidade = 3
}

console.log("O seu IMC é " + imc);
console.log("A sua classificação é " + classificacao);

switch(grauObesidade){
 case 1:
 console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
 break;

 case 2:
 console.log("Cuidado! Você está acima do peso recomendado pela OMS.");
 break;

 case 3:
 console.log("Cuidado! Você está acima do peso recomendado pela OMS. É importante procurar um médico para avaliar a sua saúde.")
 break;
}

//A resolução do Reset, que vi após este exercício, usava a expressão if (grau > 0) para colocar a frase "Cuidado! Você está acima do peso recomendado pela OMS." nos graus 1, 2 e 3. Na opção que eu escolhi, o switch, só consegui fazer isso manualmente incluindo em cada caso. Num problema com mais casos possíveis, a minha opção seria inviável.