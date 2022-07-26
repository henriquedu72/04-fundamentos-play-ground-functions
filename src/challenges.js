// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(girafa, elefante));
console.log(compareTrue(girafa, macaco));
console.log(compareTrue(elefante, macaco));

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let strings = string.split(' ');
  return strings;
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
// ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

function concatName(names) {
  let firstName = names[0];
  let lastName = names.pop();
  return lastName + ", " + firstName;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
