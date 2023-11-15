var valorEmDolar = 30;
var cotacaoDoDolar = 4.86;
var valorEmEuro = 2;
var cotacaoDoEuro = 5.27;

var valorEmRealDolar = cotacaoDoDolar * valorEmDolar;
var valorEmRealEuro = cotacaoDoEuro * valorEmEuro;

alert("O dolar estar R$" + valorEmRealDolar.toFixed(2) + "hoje.");

alert("O Euro estar R$" + valorEmRealEuro.toFixed(2) + " hoje.");

//toFixed é para limitar casas decimais
