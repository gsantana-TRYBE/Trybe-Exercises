function min(list){
    let menor=0;
    for (index in list){
        if(menor <=list[index]){
            menor=menor;
        }else{
            menor=index;
        }
    }
    return menor;
}

console.log(min([2, 4, 6, 7, 10, 0, -3]));