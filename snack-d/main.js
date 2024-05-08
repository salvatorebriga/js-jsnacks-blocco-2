"use strict"

/*------------INSERIMENTO ELEMENTI--------------*/

const myArray = [];

const myArrayB = [];

const lenght = myAddElements(myArray);

console.log('Lunghezza vettore: ' + lenght);
console.log(myArray);

/*-----------RIMOZIONE DALLA CODA------------*/

rimuoviDallaCoda(myArray, myArrayB, lenght);

console.log('Lunghezza vettore: ' + (lenght - 1));
console.log(myArrayB);

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

    return i;
}

/*-----------RIMOZIONE DALLA CODA------------*/

function  rimuoviDallaCoda(functionMyArray, functionMyArrayB, indexMax){
    for(let i = 0; i < indexMax - 1; i++){
        functionMyArrayB[i] = functionMyArray[i];
    }
}