const entrada3 = require("readline-sync");

let arroz = parseInt(entrada3.question("digite um numero: "));
for(let i=arroz-1;i>0;i--){
    arroz=arroz*i;
}
console.log(arroz);