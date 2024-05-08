"use strict"

/*------------INSERIMENTO ELEMENTI--------------*/

const myArray = [];

console.log(myAddElements(myArray));

/*-----------CONTROLLO DEL DATO------------*/

const valoreRicercato = prompt('inserisci il valore ricercato');

console.log('Valore ricercato: ' + valoreRicercato);

let i = trovaIndice(valoreRicercato, myArray);

console.log(myArray);

console.log("posizione nell'array, index: " + i);



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


/*-----------CONTROLLO DEL DATO------------*/

function trovaIndice(search, functionMyArray){

    let i = 0;

    while(i >= 0){
        if(search != functionMyArray[i]){
            i++;
        }else if(search == functionMyArray[i]){
            return i;
        }else if(search == undefined){
            return -1;
        }
    }
}