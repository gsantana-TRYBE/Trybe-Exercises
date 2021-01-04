let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers=[];

for(let contador=0; contador<numbers.length;contador++){
    if(contador!=9){
        let aux=numbers[contador]*numbers[contador+1];
        multipliedNumbers.push(aux);
    }else{
        let aux=numbers[contador]*2;
        multipliedNumbers.push(aux);
    }
}
console.log(multipliedNumbers);
