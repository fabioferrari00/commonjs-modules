//importo le funzioni dai vari file
const name = require('./modules/names');
const hobbies = require('./modules/hobbies');

//creo una funzione che restituisce un oggetto che contiene sia fullName che gli hobbies
const getPerson = () => {
  return {
    fullName: name('Fabio', 'Ferrari'),
    hobbies: hobbies('Palestra', 'Gaming', 'Studio'),
  }

}

console.log(getPerson());