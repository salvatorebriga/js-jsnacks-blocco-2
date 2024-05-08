"use strict"

const myArray = [];

console.log(myAddElements(myArray));

const n = contaElementi(myArray);

console.log('Elementi presenti: ' + n);

console.log(myArray);

function myAddElements(functionMyArray){

    let i = 0;
    let bool =  false;

    do{
        const temp = prompt('Inserisci qualcosa, oppure digita "esci" per uscire');

        if(temp !== 'esci'){
            functionMyArray[i] = temp;
            i++;
        }else{
            bool = true;
        }
    }while(bool == false);

    return 'fine inserimento';
}

function contaElementi(functionMyArray){

    let i = 0;
    let bool =  false;

    while(bool == false){
        if(functionMyArray[i] == undefined){
            bool = true;
        }else{
            i++;
        }
    }

    return i;
}