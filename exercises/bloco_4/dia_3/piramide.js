let n = 5;
let espaço, caracter, piramide;

for ( index=0; index<n;index= index+2){
    espaço=n-Math.floor(index/2);
    caracter=index+1;
    piramide=" ".repeat(espaço)+"*".repeat(caracter);
    console.log(piramide);
}