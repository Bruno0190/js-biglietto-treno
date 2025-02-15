//Il programma dovrà chiedere all'utente il numero di chilometri (numero interno) che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// Il programma dovrà chiedere all'utente il numero di chilometri (numero interno) che vuole percorrere e l'età del passeggero.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//  Bonus:
// Controllare che gli input di utenti siano numeri


const km  = parseInt((prompt('Buongiorno, quanti km deve coprire?:')));
console.log(km);

const eta = parseInt((prompt('Pregasi specificare età:')));

if ( !isNaN(km) && !isNaN(eta) ) {

    const initialPrice = km * 0.21;
    let sconto;

    if (eta < 18){
        sconto = (initialPrice*20)/100;
    } else if (eta > 65){
        sconto = (initialPrice*40)/100;
    } else {
        sconto = 0;
    }

    const price = initialPrice - sconto;
    const priceFormaUmana = price.toFixed(2);

    alert('Grazie per la sua pazienza, il costo totale del biglietto è '+ priceFormaUmana);

} else if ( isNaN(km) || isNaN(eta) ){
    alert('Si prega di ricaricare la pagina e reinserire le informazioni richieste come numeri');
}
