// Un alert espone 5 numeri casuali diversi.
var numeriCasuali = [];
for (i = 0; i < 3; i++) {
  var numeroRandom = Math.floor(Math.random() * 10) + 1;
  numeriCasuali.push(numeroRandom);
};
var messaggio = alert(numeriCasuali);
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
// i numeri che ha visto precedentemente.
var timer = 5;
var listaUtente = [];
var numeroUtente;

var intervallo = setInterval(function(){
  document.getElementById("timer").innerHTML = timer;
  if (timer === 0) {
  } else {
    timer--;
    clearInterval(intervallo);
    for (i = 0; i < 3; i++) {
      var numeroUtente = Number(prompt("Inserisci un numero"))
      listaUtente.push(numeroUtente);
    }
  }
}, 1000);
console.log(listaUtente);

// Una volta inseriti i 5 numeri, il software dice quanti
// e quali numeri sono stati ricordati.
// for (i = 0; i < numeriCasuali.length; i++) {
//   if (numeroUtente === numeriCasuali[i])
// };
