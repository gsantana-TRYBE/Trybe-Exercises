function palindrome(palavra){
    let normal =palavra;
    let invertida;
    let resultados;

    invertida = palavra.split('').reverse().join('');
    
    if(invertida == normal){
        return true;
    }else{
        return false;
    }
}

console.log(palindrome("arara"));
console.log(palindrome("desenvolvimento"));