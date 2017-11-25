'use strict';

var WIZARDS_QUANTITY = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizards = [];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.content.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var shuffle = function (array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

var shuffleNames = shuffle(WIZARD_NAMES);
var shuffleSurnames = shuffle(WIZARD_SURNAMES);
var shuffleCoats = shuffle(WIZARD_COATS);
var shuffleEyes = shuffle(WIZARD_EYES);

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  var wizardObj = {
    name: shuffleNames[i] + ' ' + shuffleSurnames[i],
    coatColor: shuffleCoats[i],
    eyesColor: shuffleEyes[i]
  };

  wizards[i] = wizardObj;
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
