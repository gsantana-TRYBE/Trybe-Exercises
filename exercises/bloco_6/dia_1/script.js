let stateList=['Acre','Alagos','Amapás','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo',
'Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco',
'Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina',
'São Paulo','Sergipe','Tocantins'];
let stateInitialsList=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR',
'PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

function createStateOptions(){
    let dropdownMenu=document.querySelector('#state-dropdown');

    for(let index=0;index<stateList.length;index++){
        let stateOption=document.createElement('option');
        stateOption.innerHTML=stateList[index];
        stateOption.value=stateInitialsList[index];
        dropdownMenu.appendChild(stateOption);
    }
}

createStateOptions();