"use strict"

/*------------INSERIMENTO ELEMENTI--------------*/

const myArray = [];

const myArrayB = [];

const lenght = myAddElements(myArray);

console.log('Lunghezza vettore: ' + lenght);
console.log(myArray);

/*------------INSERIMENTO IN TESTA--------------*/

inserisciInTesta(myArray, myArrayB, lenght);

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

/*------------INSERIMENTO IN TESTA--------------*/

function inserisciInTesta(functionMyArray, functionMyArrayB, index){
    const newElement = prompt('Inserisci un valore qualsiasi:');

    functionMyArrayB[0] = newElement;

    for(let i = 1; i <= index; i++){
        functionMyArrayB[i] = functionMyArray[i - 1];
    }
}