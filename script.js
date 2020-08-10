window.addEventListener('load', start);

// Variaveis para o range Red
var inputRedCurrentFrequencies = document.querySelector(
  '#inputRedCurrentFrequencies'
);
var rangeRedFrequencies = document.querySelector('#rangeRedFrequencies');

// Variaveis para o range Green
var inputGreenCurrentFrequencies = document.querySelector(
  '#inputGreenCurrentFrequencies'
);
var rangeGreenFrequencies = document.querySelector('#rangeGreenFrequencies');

// Variaveis para o range Blue
var inputBlueCurrentFrequencies = document.querySelector(
  '#inputBlueCurrentFrequencies'
);
var rangeBlueFrequencies = document.querySelector('#rangeBlueFrequencies');

var square = document.querySelector('#square');

// Alterar valor do range
rangeRedFrequencies.addEventListener('input', changeColor);
rangeGreenFrequencies.addEventListener('input', changeColor);
rangeBlueFrequencies.addEventListener('input', changeColor);

function start() {
  console.log('Olá!');
  // Mudar a cor
  changeColor();
}

function changeColor() {
  inputRedCurrentFrequencies.value = rangeRedFrequencies.value;
  inputGreenCurrentFrequencies.value = rangeGreenFrequencies.value;
  inputBlueCurrentFrequencies.value = rangeBlueFrequencies.value;
  square.style.backgroundColor = `rgb(${inputRedCurrentFrequencies.value},${inputGreenCurrentFrequencies.value},${inputBlueCurrentFrequencies.value})`;
}
