"use strict"

/*------------INSERIMENTO ELEMENTI--------------*/

const myArray = [];

console.log(myAddElements(myArray));

console.log(myArray);

/*-----------STAMPA-----------------*/

const newString = stampa(myArray);

console.log('Array unito con la virgola fra indici: ' + newString);

/*------------INSERIMENTO ELEMENTI--------------*/

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

/*-----------STAMPA-----------------*/

function stampa(functionMyArray){
    let newString = '';
    let i = 0;

    while(functionMyArray[i] != undefined){
        if(i == 0){
            newString += `${functionMyArray[i]}`;
            i++;
        }else{
            newString += `,${functionMyArray[i]}`;
            i++;
        }
    }

    return newString;
}