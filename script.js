var nomeUtente = prompt('Come ti chiami?');

document.getElementById("nome").innerHTML = nomeUtente + " nome";

console.log('Variabile primo input:' + nomeUtente);

var cognomeUtente = prompt("Qual'é il tuo cognome?");

document.getElementById("cognome").innerHTML = cognomeUtente + " cognome";

console.log('Variabile secondo input:' + cognomeUtente);

var colorePreferito = prompt("Qual'é il tuo colore preferito?");

document.getElementById("colore").innerHTML = colorePreferito + " colore";

console.log('Variabile terzo input:' + colorePreferito);

var password = nomeUtente + cognomeUtente + colorePreferito + 19;

document.getElementById("password").innerHTML = "La tua password é: " + password;
