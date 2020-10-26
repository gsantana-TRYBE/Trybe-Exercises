let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma =0;
let media_aritm;

for(let index=0;index<numbers.length;index++){
    soma+= numbers[index];
}
media_aritm=soma/numbers.length;
console.log(media_aritm);
if (media_aritm>20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual que 20");
}