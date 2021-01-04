function max(list){
    let maior=0;
    for (index in list){
        if(maior >=list[index]){
            maior=maior;
        }else{
            maior=index;
        }
    }
    return maior;
}

console.log(max([2, 3, 6, 7, 10, 1]));