function wordComparison(word,ending){
    let tamanhoEnding=ending.length;
    let tamanhoWord=word.length;
    let aval;

    for(let index = 0; index<tamanhoEnding;index++){
        if(word[tamanhoWord-index]!=ending[tamanhoEnding-index]){
            aval=false;
            break
        }else{
            aval=true;
        }
    }
    return aval;
}

console.log(wordComparison("trybe","be"));
console.log(wordComparison("joaofernando","fernan"));