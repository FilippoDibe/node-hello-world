const frasi= [
    "La vita è quello che ti accade mentre sei occupato a fare altri progetti. - John Lennon",
    "Il modo migliore per predire il futuro è crearlo. - Peter Drucker",
    "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier",
    "La felicità non è qualcosa che arriva già fatta. Viene dalle azioni che compi. - Dalai Lama",
    "Se vuoi raggiungere il successo, devi essere disposto a attraversare il campo delle critiche. - Amit Ray",
    "Il tuo tempo è limitato, quindi non sprecarlo vivendo la vita di qualcun altro. - Steve Jobs",
    "L'unico modo per fare un grande lavoro è amare quello che fai. - Steve Jobs",
    "Non importa quanti passi fai indietro, fintanto che ne fai più in avanti. - Tim Fargo",
    "Non lasciare che il rumore delle opinioni degli altri offuschi la tua voce interiore. - Steve Jobs",
    "La perseveranza è il segreto di tutte le conquiste. - Victor Hugo"
];

// funzione per ottenere una frase casuale 

function getRandomFrasi(){
    const randomIndex = Math.floor(Math.random() * frasi.length);
    return frasi[randomIndex];
}

module.exports = {
    getRandomFrasi
};