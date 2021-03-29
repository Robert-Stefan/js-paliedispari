/**
 * 
 * Palindroma:
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
 * 
 */


/*var utente = prompt('Inserisci una parola: ').toLowerCase().trim();
console.log(utente);

var wordReverted = reverseChars(utente);
console.log(wordReverted);

//VERIFICO ATTRAVERSO LA FUNCTION DATA SE LA PAROLA è PALINDROMA
if (utente === wordReverted) {
    console.log('La parola è Palindroma!')
} else {
    console.log('La parola non è Palindroma!');
}

//FUNCTION per i caratteri al contrario
function reverseChars(word) {
    var reverse = '';

    for(var i = word.length -1; i >= 0; i--) {
        //console.log( word.charAt(i) );

        reverse += word[i];

    }

    return reverse;
}*/


/**
 * 
    Pari e Dispari:
        -L’utente sceglie pari o dispari
        -e inserisce un numero da 1 a 5.
        -Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        -Sommiamo i due numeri
        -Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        -Dichiariamo chi ha vinto.
 
 */
//VARIABLES
var utente = prompt('Scegli pari o dispari: ').toLowerCase().trim();
console.log('La tua scelta è: ' + utente);
var scelta = parseInt( prompt('Inserisci un numero tra 1 e 5: ') );
console.log('Il tuo numero è: ' + scelta);
var numberpc = numeropc(1, 5);
console.log('Il numero del PC è: ' + numberpc);
var somma = scelta + numberpc;
console.log('La somma è la seguente: ' + somma);
console.log('Il numero della somma è: ' + pariDispari());


//ISTRUZIONI
//DICHIARO IL VINCITORE
if (pariDispari() === utente ) {
    console.log('Bravo hai vinto!');
} else {
    console.log('Niente da fare, il PC ha vinto!');
}


//FUNCTION GENERA RANDOM PER PC
function numeropc(min, max) {
    var computer = Math.floor(Math.random() * max - min + 1) + min;

    return computer;
};

//FUNCTION VERIFICA PARI O DISPARI
function pariDispari () {

    var somma = scelta + numberpc;

    if(somma % 2 === 0) {
        return 'pari';
    } 
        return 'dispari';
}
