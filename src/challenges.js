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
  return lastName + [', '] + firstName;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
let points = 0;
function footballPoints(wins, ties) {
  points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(numbers) {
  let bigNumber = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (bigNumber < numbers[index]) {
      bigNumber = numbers[index];
    }
  }
  let totalOfReptitions = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (bigNumber === numbers[index]) {
      totalOfReptitions += 1;
    }
  }
  return totalOfReptitions;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 1, 1));

// Desafio 8
function fizzBuzz(numbers) {
  const result = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));



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
