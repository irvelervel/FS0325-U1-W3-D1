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
  console.log(schifo) // <-- schifo esiste! :(
  let x = 'stefano'
  var schifo = 100
}

// console.log(x) // <-- non è definita!

// var crea variabili con visibilità di FUNZIONE

// -------

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

// -------

// SPREAD OPERATOR (...)
const objA = {
  name: 'Stefano',
}

const objB = objA // NON È UNA "VERA" COPIA
objB.name = 'Mario' // avete cambiato anche la proprietà "name" di objA
// (l'oggetto non è stato "clonato", è sempre lo stesso con due nomi diversi)

// quindi come si crea una vera copia ("deep copy") di objA?
// METODO A) utilizzando Object.assign()
const objC = Object.assign({}, objA) // in un guscio nuovo vuoto copio dentro le proprietà
// di objA
// METODO B) utilizzando lo SPREAD OPERATOR
const objD = { ...objA } // ...objA vuol dire: faccio una copia di TUTTE le coppie
// chiave:valore di objA e lo trasporto dentro questo nuovo paio di {  }

const developer = {
  languages: ['HTML', 'CSS', 'JS'],
}

const person = { ...objA, ...developer } // ha le proprietà "name" e "languages"
// quindi viene anche comodo per "fondere" diversi oggetti in nuove entità

const pets1 = ['hamster', 'cat', 'dog']
const pets2 = [...pets1] // ho creato una vera copia di arr1

const bugs = ['spider', 'cockroach']
const animals = [...pets1, ...bugs]
// animale è un array fatto così: ['cat', 'dog', 'hamster', 'spider', 'cockroach']

// REST PARAMETERS ("i parametri rimanenti")
const f1 = function (s1, s2, s3, s4, s5, s6) {
  console.log(s1)
  console.log(s2)
  console.log(s3)
  console.log(s4)
  console.log(s5)
  console.log(s6)
}

f1('stefano', 'gerardo', 'alessandro', 'cristina', 'anna', 'amin')

const f2 = function (num, ...stringa) {
  // stringa è un array di TUTTI i parametri ricevuti dalla funzione
  console.log('il numero è', num)
  for (let i = 0; i < stringa.length; i++) {
    console.log(stringa[i])
  }
}

f2(10, 'stefano', 'gerardo', 'alessandro', 'cristina', 'anna', 'amin')
f2(3, 'stefano', 'gerardo', 'alessandro')
f2(4, 'stefano', 'gerardo', 'alessandro', 'cristina', 'anna', 'amin', 'stefano')

// -------

// DESTRUTTURAZIONE DI OGGETTI ("destructuring")

const person1 = {
  age: 20,
  eyeColor: 'blue',
  firstName: 'Gino',
  country: 'Estonia',
}

const { age, country, eyeColor, firstName } = person1
// ho dichiarato in un colpo solo DUE costanti: const age e const country
// const age = person1.age
// const country = person1.country

console.log(age) // 20

// -------

// TERZO DELIMITATORE DI STRINGA IN JS: I BACKTICKS ``
const st1 = `Ciaone! lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum 
lorem ipsum 
lorem ipsum lorem ipsum lorem ipsum 
`

const st2 =
  'Io mi chiamo ' +
  firstName +
  ', ho ' +
  age +
  " anni, vengo dall'" +
  country +
  '.'

const st3 = `Io mi chiamo ${firstName}, ho ${age} anni, vengo dall'${country}.`

// -------
