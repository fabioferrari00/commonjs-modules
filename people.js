//importo le funzioni dai vari file
const name = require('./modules/names.js');
const hobbies = require('./modules/hobbies.js');

console.log(name('Fabio', 'Antonio'));
console.log(hobbies('Palestra', 'Gaming', 'Studio'));

//creo una funzione che restituisce sia nome e cognome che gli hobby
const getPerson = () => {
  return {
    fullName: name('Fabio', 'Ferrari'),
    hobbies: hobbies('Palestra', 'Gaming', 'Studio'),
  }

}

console.log(getPerson());