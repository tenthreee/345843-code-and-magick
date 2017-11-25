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

var getRandomIndex = function (stat) {
  return Math.floor(Math.random() * (stat.length));
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.content.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  var wizardObj = {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomIndex(WIZARD_SURNAMES)],
    coatColor: WIZARD_COATS[getRandomIndex(WIZARD_COATS)],
    eyesColor: WIZARD_EYES[getRandomIndex(WIZARD_EYES)]
  };

  wizards[i] = wizardObj;
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
