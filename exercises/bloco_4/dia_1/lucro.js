var custo = 400;
var venda = 2000;
var imposto=20;
var custoTotal = custo + custo*0.2
var lucro = (venda -custoTotal)*1000

if (custo ==0 || venda ==0 ){
    console.log("Erro")
}else{
    console.log(lucro);
}