alert("Gentile cliente, ti invitiamo ad inserire i tuoi dai per poter calcolare il prezzo del tuo biglietto.");

var distanza = parseFloat(prompt('Qui inserisci la distanza da percorrere in Km.'));
console.log(distanza);

var eta = parseInt(prompt('Qui inserisci la tua età.'));
console.log(eta);

var costo = 0.21

var biglietto = distanza * costo;

if (eta < 18) {
  prezzoTot = (biglietto - (biglietto * 0.20)).toFixed(2);
  console.log('Il prezzo del suo biglietto è: ' + (biglietto - (biglietto * 0.20)).toFixed(2) + ' €');

} else if (eta > 65) {
  prezzoTot = (biglietto - (biglietto * 0.40)).toFixed(2)
  console.log('Il prezzo del suo biglietto è: ' + (biglietto - (biglietto * 0.40)).toFixed(2) + ' €');

} else {
  prezzoTot = biglietto.toFixed(2)
  console.log('Il prezzo del suo biglietto è: ' + biglietto.toFixed(2) + '€');
}

document.getElementById('prezzoTotale').innerHTML = 'Totale: ' + prezzoTot + '  €'
