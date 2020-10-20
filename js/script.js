var distanza = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var anni = parseInt(prompt("Quanti anni hai?"));
// i dati che mi fornisce l'utente
var prezzoIntero = distanza * 0.21;
// questa variabile rappresenta il prezzo del biglietto, senza tenere conto dell'eventuale sconto
var scontoMinore = prezzoIntero * 0.2;
// questa variabile rappresenta lo sconto sul prezzo del biglietto se l'acquirente è minorenne
var scontoAnziani = prezzoIntero * 0.4;
// questa variabile rappresenta lo sconto sul prezzo del biglietto se l'acquirente è anziano
var prezzoFinaleMinore = (prezzoIntero - scontoMinore);
// questa variabile rappresenta il prezzo finale per i minori
var prezzoFinaleAnziani = (prezzoIntero - scontoAnziani);
// questa variabile rappresenta il prezzo finale per gli over 65

if (isNaN(distanza) || isNaN(anni)) {
  document.getElementById("km").innerHTML = "Si prega di inserire solo valori numerici";
  // per non far inserire all'acquirente valori non numerici
} else if ((distanza<0) || (distanza>1000) || (anni<0) || (anni>120)) {
  // per far inserire all'acquirente valori credibili
  document.getElementById("km").innerHTML = "Si prega di inserire valori, rispettivamente, compresi fra 0 e 1000 per la distanza e fra 0 e 120 per l'età";
} else {
  document.getElementById("km").innerHTML = "I chilometri che intendi percorrere sono: " + distanza + " km";
  document.getElementById("age").innerHTML = "La tua età è: " + anni + " anni";
  document.getElementById("full-price").innerHTML = "Il prezzo intero del biglietto è: " + prezzoIntero.toFixed(2) + " £";
  // questa parte resta fissa a prescindere dall'età del cliente
    if (anni<18) {
      document.getElementById("discount").innerHTML = "Lo sconto applicato in base alla tua età è di: " + scontoMinore.toFixed(2) + " £";
      document.getElementById("final-price").innerHTML = "Il prezzo finale del biglietto è: " + prezzoFinaleMinore.toFixed(2) + " £";
      // qui ho gestito la scontistica per un acquirente minorenne
    }
    else if (anni>65) {
      document.getElementById("discount").innerHTML = "Lo sconto applicato in base alla tua età è di: " + scontoAnziani.toFixed(2) + " £";
      document.getElementById("final-price").innerHTML = "Il prezzo finale del biglietto è: " + prezzoFinaleAnziani.toFixed(2) + " £";
      // qui ho gestito la scontistica per un acquirente over 65
    }
    else {
      document.getElementById("discount").innerHTML = "Lo sconto applicato in base alla tua età è di: 00.00 £";
      document.getElementById("final-price").innerHTML = "Il prezzo finale del biglietto è: " + prezzoIntero.toFixed(2) + " £";
      // infine, la parte dedicata agli sfortunati che non beneficiano di alcuno sconto
    }
}
