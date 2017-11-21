'use strict';

// Пишу функцию поиска масксимального элемента в массиве
var getMaxElem = function (elems) {
  var maxElem = elems[0];

  for (var i = 1; i < elems.length; i++) {
    var elem = elems[i];
    if (elem > maxElem) {
      maxElem = elem;
    }
  }
  return maxElem;
};

// Пишу функцию рандомизации цвета
var getRandomColor = function (min, max) {
  var opacity = (Math.random() * (max - min) + min).toFixed(1);
  return 'rgba(0, 0, 255, ' + opacity + ')';
};

// Пишу функцию рисования облачка
var drawCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(x - 10, y, x - 10, y - 10);
  ctx.quadraticCurveTo(x - 10, y - 170, x + 40, y - 170);
  ctx.quadraticCurveTo(x - 10, y - 170, x + 40, y - 170);
  ctx.quadraticCurveTo(x + 40, y - 245, x + 90, y - 245);
  ctx.quadraticCurveTo(x + 240, y - 250, x + 390, y - 245);
  ctx.quadraticCurveTo(x + 440, y - 245, x + 440, y - 170);
  ctx.quadraticCurveTo(x + 490, y - 170, x + 490, y - 10);
  ctx.quadraticCurveTo(x + 490, y, x + 480, y);
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  // Рисую облачко с тенью
  drawCloud(ctx, 120, 280, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, 110, 270, 'white');

  // Пишу словечки
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 270, 50);
  ctx.fillText('Список результатов:', 255, 70);

  // Вычисляю слоупока
  var maxTime = getMaxElem(times);

  // Рисую графики
  var startX = 190;
  var startY = 230;
  var histoHeight = 100;
  var histoWidth = 40;
  var histoMargin = histoWidth + 50;
  var histoIndex = histoHeight / maxTime;

  for (var i = 0; i < times.length; i++) {
    var CURRENT_PLAYER = 'Вы';
    var score = Math.round(times[i]);
    var histoLevel = times[i] * histoIndex;
    var pointX = startX + histoMargin * i;
    var namesPointY = startY + 20;
    var timesPointY = startY - histoLevel - 10;

    ctx.fillStyle = 'black';
    ctx.fillText(score, pointX, timesPointY);
    ctx.fillText(names[i], pointX, namesPointY);
    ctx.fillStyle = names[i] === CURRENT_PLAYER ? 'rgba(255, 0, 0, 1)' : getRandomColor(0.1, 1);
    ctx.fillRect(pointX, startY, histoWidth, -histoLevel);
  }
};
