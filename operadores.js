//Exercício1
nomeFulano = "Gabriela";
nomeBeltrano = "Gabriela";

mesmoNome = nomeFulano == nomeBeltrano;

console.log(mesmoNome);

//Exercício2
idade = 21;

maiorDeIdade = idade >= 18;

console.log(maiorDeIdade);


//Exercício3
valorBoleto = 240;

valorComJuros = valorBoleto + valorBoleto/10;

console.log(valorComJuros);

//Exercício 4
item1 = 4;
item2 = 5;
item3 = 3;
item4 = 7;
item5 = 8;

mediaAritmetica = (item1 + item2 + item3 + item4 + item5) /5;

console.log(mediaAritmetica);

//Exercício 5
receitaLiquida = 3200;
custoProdutos = 2100;

lucroBruto = receitaLiquida - custoProdutos;

margemBruta = (lucroBruto / receitaLiquida) * 100;

console.log(margemBruta)

//Exercício 6
saldoInicial = 1000;
saldoParcial1 = saldoInicial - 99.90 + 2500 - 0.10;

arCondicionado = saldoParcial1 / 4;

saldoParcial2 = saldoParcial1 - arCondicionado;

saldoFinal = saldoParcial2 - (saldoParcial2 / 2);

console.log(saldoFinal);

//Solução 6 corrigida
saldo = 1000;
saldo = saldo - 99.90;
saldo = saldo + 2500;
saldo = saldo - 0.10;
saldo = saldo - (saldo / 4);
saldo = saldo / 2;
console.log(saldo);