"use strict"

const vett1 = [];
const vett2 = [];

let n1 = Math.floor(Math.random() * 20);
let n2 = Math.floor(Math.random() * 20);

console.log('pre:');

for (let i = 0; i < n1;  i++){
    vett1[i] = i; 
}

console.log(vett1);


for (let i = 0; i < n2;  i++){
    vett2[i] = i; 
}

console.log(vett2);

console.log('SOLUZIONE 1:');

/* SOLUZIONE 1 */

while(n1 !== n2){
    if(n1 <= n2){
        vett1[n1] = 'Add: ' + n1;
        n1++
    }else if(n2 <= n1){
        vett2[n2] = 'Add: ' + n2;
        n2++;
    }
}

/*
console.log('SOLUZIONE 2:');*/

 /* SOLUZIONE 2 */

 /*
if(n1 < n2){
    vett1 = vett2;
}else if(n2 < n1){
    vett2 = vett1;
}*/

console.log(vett1);
console.log(vett2);



