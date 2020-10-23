document.getElementById("genera").addEventListener("click", function(){
  //succede tutto quando schiacci il button genera, quindi ragiono qui dentro

  var name = document.getElementById("nome").value;
  var km = parseInt(document.getElementById("km").value);
  var age = document.getElementById("eta").value;
  // ho definito le 3 variabili d'input relative ai dati che vengono inseriti dall'utente

  var costoUnitario = 0.21;
  var scontoMinore = 0.2;
  var scontoOver = 0.4;
  // variabili fisse

  document.getElementById("cardName").innerHTML = name; // schiacciando genera, il nome inserito dall'utente viene riportato nel biglietto
  document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1; // schiacciando genera, viene inserito nel biglietto il numero della carrozza, casuale, intero, randomico, compreso fra 1 e 10
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
  }
  document.getElementById("cp").innerHTML = getRndInteger(90000, 100000); // ho sfruttato questa funzione precostruita per generare un numero intero randomico da assegnare al codice CP

  if (isNaN(km)) {
    document.getElementById("offerta").innerHTML = "errore";
    document.getElementById("carrozza").innerHTML = "errore";
    document.getElementById("cp").innerHTML = "errore";
    document.getElementById("costo").innerHTML = "errore";
  } else if (age == "minorenne") {
    document.getElementById("offerta").innerHTML = "Sconto Minorenne";
    document.getElementById("costo").innerHTML = ((km * costoUnitario) - (km * costoUnitario * scontoMinore)).toFixed(2) + "€";
  } else if (age == "over") {
    document.getElementById("offerta").innerHTML = "Sconto Over 65";
    document.getElementById("costo").innerHTML = ((km * costoUnitario) - (km * costoUnitario * scontoOver)).toFixed(2) + "€";
  } else {
    document.getElementById("offerta").innerHTML = "Nessuna";
    document.getElementById("costo").innerHTML = (km * costoUnitario).toFixed(2) + "€";
  }
});

document.getElementById("annulla").addEventListener("click", function(){
  var name = document.getElementById("nome");
  name.value = "";
  var km = document.getElementById("km");
  km.value = "";
  document.getElementById("cardName").innerHTML = "";
  document.getElementById("offerta").innerHTML = "";
  document.getElementById("carrozza").innerHTML = "";
  document.getElementById("cp").innerHTML = "";
  document.getElementById("costo").innerHTML = "";
});
