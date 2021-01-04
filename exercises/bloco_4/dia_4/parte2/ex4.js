function maiorNome(nome){
    let maior=0;
    let nomeMaior;
    for (index in nome){
        if(maior>=nome[index].length){
            maior=maior;
        }else{
            maior=nome[index].length;
            nomeMaior=nome[index];
        }
    }
    return nomeMaior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))