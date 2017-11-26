'use strict';

var WIZARDS_NUMBER = 4;

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARDS_COATS_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARDS_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupSimilarList = document.querySelector('.setup-similar-list');
var wizards = [];

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var shuffle = function (numbers, index) {
  var randomIndex = Math.floor(Math.random() * index);
  var temporaryValue = numbers[index];
  numbers[index] = numbers[randomIndex];
  numbers[randomIndex] = temporaryValue;
};

var shuffleArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    shuffle(array, i);
  }

  return array;
};

// Если фрагмент внутрь функции положить, там внизу setupSimilarList.appendChild его не видит
var fragment = document.createDocumentFragment();

var createArray = function (array) {
  var shuffledNames = shuffleArray(WIZARDS_NAMES);
  var shuffledSurnames = shuffleArray(WIZARDS_SURNAMES);
  var shuffledCoats = shuffleArray(WIZARDS_COATS_COLORS);
  var shuffledEyes = shuffleArray(WIZARDS_EYES_COLORS);

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    array[i] = {
      name: shuffledNames[i] + ' ' + shuffledSurnames[i],
      coatColor: shuffledCoats[i],
      eyesColor: shuffledEyes[i]
    };

    fragment.appendChild(getWizard(array[i]));
  }
};

createArray(wizards);

setupSimilarList.appendChild(fragment);
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
