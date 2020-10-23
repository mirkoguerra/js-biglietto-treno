document.getElementById("genera").addEventListener("click", function(){
  //succede tutto quando schiacci il button genera, quindi ragiono qui dentro
  var name = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var age = document.getElementById("eta").value;
  // ho definito le 3 variabili d'input relative ai dati che vengono inseriti dall'utente

  document.getElementById("cardName").innerHTML = name; // schiacciando genera, il nome inserito dall'utente viene riportato nel biglietto
  document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1; // schiacciando genera, viene inserito nel biglietto il numero della carrozza, casuale, intero, randomico, compreso fra 1 e 10
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }
  document.getElementById("cp").innerHTML = getRndInteger(90000, 100000) // ho sfruttato questa funzione precostruita per generare un numero intero randomico da assegnare al codice CP
});
