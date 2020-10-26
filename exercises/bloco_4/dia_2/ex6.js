let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador=0;

for(let index=0;index<numbers.length;index++){
    if (numbers[index]%2!=0){
        contador++;
    }
}
if(contador!=0){
    console.log("São",contador, "ímpares");
}else{
    console.log("Não existem números ímpares");
}