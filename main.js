// Un alert espone 5 numeri casuali diversi.
var numeriCasuali = [];
for (i = 0; i < 3; i++) {
  var numeroRandom = Math.floor(Math.random() * 10) + 1;
  numeriCasuali.push(numeroRandom);
};
var messaggio = alert(numeriCasuali);
console.log(numeriCasuali);

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
var listaUtente = [];

var intervallo = setInterval(function(){
  clearInterval(intervallo);
  for (i = 0; i < 3; i++) {
      var numeroUtente = Number(prompt("Inserisci un numero"));
      listaUtente.push(numeroUtente);
    }
  console.log(listaUtente);

  // Una volta inseriti i 5 numeri, il software dice quanti
  // e quali numeri sono stati ricordati.
  var numeriGiusti = [];
  for (i = 0; i < listaUtente.length; i++) {
    if (numeriCasuali.includes(listaUtente[i])) {
      numeriGiusti.push(listaUtente[i]);
    };
  };
  console.log("hai inserito " + numeriGiusti.length + " numeri giusti");
  console.log("questi numeri sono: " + numeriGiusti);
}, 2000);
