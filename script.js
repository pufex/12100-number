'use strict'

function generateNumber(){
    return Math.floor(Math.random()*99) + 1;
};

do{
    var number = generateNumber();
    alert(`Your generated number is: ${number}`);
}while(confirm("Try again?") === true);