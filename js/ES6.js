// Nelle lezioni precedenti abbiamo già imparato molte delle buone pratiche
// per la stesura di JS moderno, pulito e sintatticamente corretto.

// Abbiamo ad es. imparato che per creare una variabile esistono 2 modi:
// - let, che dichiara una variabile il cui valore è riassegnabile
let x1 = 100
x1 = 200
// - const, che dichiara una variabile il cui valore iniziale risulta "permanente"
const x2 = 100
// x2 = 200 <-- questa riga dà errore a runtime!

// ...ma prima di ES6, c'era UN UNICO modo per dichiarare una variabile, con una ulteriore
// parola chiave: "var"
// var crea una variabile il cui contenuto è ri-assegnabile.
console.log(x3)
var x3 = 100
// come il costrutto "function", anche la parola "var" soffre del meccanismo di HOISTING,
// ovvero il "sollevamentio". Questo tecnicamente ci permette di utilizzare le variabili
// definite con "var" anche prima della loro dichiarazione: un abominio che funziona
// solamente in JS.

// let e const, inoltre, sono variabili con visibilità ("scope") di BLOCCO.
for (let i = 0; i < 10; i++) {
  // i esiste solo qui dentro!
}

const a = function () {
  let x = 'stefano'
  var schifo = 100
}

// console.log(x) // <-- non è definita!
console.log(schifo) // <-- schifo esiste! :(

// var crea variabili con visibilità di FUNZIONE

// FUNZIONI
// le funzioni in JS normalmente si dichiarano con il costrutto "function"

// il modo corretto di utilizzare function (ed evitare il procedimento dell'hoisting)
// è creare una funzione "anonima" ed assegnarla ad una costante
const f = function () {
  // qui dentro ci va il codice della funzione
}
// il modo SCORRETTO è utilizzare function per creare delle funzioni "non anonime"
function no() {
  // qui dentro ci va il codice della funzione
}
// la funzione "no" soffre di hoisting, ed è possibile invocarla prima della riga 46

// un terzo modo (sempre corretto) di creare funzioni in JS è utilizzando la dicitura
// "a freccia" (arrow function)
const fr = () => {
  // qui dentro ci va il codice della funzione
}
// le funzioni freccia hanno qualche vantaggio rispetto alle funzioni tradizionali:
// a) sono più concise da scrivere
// b) se la vostra funzione fa UNA SOLA COSA e deve ritornarne il risultato,
// la loro sintassi risulta ANCORA più semplificata: potete TOGLIERE le graffe
// e TOGLIERE la parola "return" (contemporaneamente!)

const dado1 = function () {
  return Math.ceil(Math.random() * 6) // un numero a caso da 1 a 6
}

const dado2 = () => Math.ceil(Math.random() * 6) // un numero a caso da 1 a 6

// dado1 e dado2 fanno la STESSA COSA!
