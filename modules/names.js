//creo una funzione che accetta due parametri di cui mi restituirà un oggetto

const fullName = (firstName, lastName) => {
  return {
    firstName,
    lastName
  }
}

//esporto la funzione
module.exports = fullName;