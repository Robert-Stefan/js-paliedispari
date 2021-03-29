/**
 * 
 * Palindroma:
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
 * 
 */


var utente = prompt('Inserisci una parola: ').toLowerCase().trim();
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
}