'use strict';

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

var setupDialog = document.querySelector('.setup');
setupDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

var getRandomIndex = function (stat) {
  return Math.floor(Math.random() * (stat.length));
};

var getRandomStat = function (stat) {
  return stat[getRandomIndex(stat)];
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  var wizardObj = {
    name: getRandomStat(WIZARD_NAMES) + ' ' + getRandomStat(WIZARD_SURNAMES),
    coatColor: getRandomStat(WIZARD_COATS),
    eyesColor: getRandomStat(WIZARD_EYES)
  };

  wizards[i] = wizardObj;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.content.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
