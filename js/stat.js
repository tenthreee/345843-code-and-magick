'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Рисую тень облачку

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(120, 280);
  ctx.quadraticCurveTo(110, 280, 110, 270);
  ctx.quadraticCurveTo(110, 110, 160, 110);
  ctx.quadraticCurveTo(110, 110, 160, 110);
  ctx.quadraticCurveTo(160, 35, 210, 35);
  ctx.quadraticCurveTo(360, 30, 510, 35);
  ctx.quadraticCurveTo(560, 35, 560, 110);
  ctx.quadraticCurveTo(610, 110, 610, 270);
  ctx.quadraticCurveTo(610, 280, 600, 280);
  ctx.closePath();
  ctx.fill();

  // Рисую облачко

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(110, 270);
  ctx.quadraticCurveTo(100, 270, 100, 260);
  ctx.quadraticCurveTo(100, 100, 150, 100);
  ctx.quadraticCurveTo(100, 100, 150, 100);
  ctx.quadraticCurveTo(150, 25, 200, 25);
  ctx.quadraticCurveTo(350, 20, 500, 25);
  ctx.quadraticCurveTo(550, 25, 550, 100);
  ctx.quadraticCurveTo(600, 100, 600, 260);
  ctx.quadraticCurveTo(600, 270, 590, 270);
  ctx.closePath();
  ctx.fill();

  // Пишу словечки

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 270, 50);
  ctx.fillText('Список результатов:', 255, 70);

  // Вычисляю слоупока

  var maxTime = -1; // Почему -1, а не 0?

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  // Рандомизирую цвет

  var randomColor = function () {
    var opacity = Math.random().toFixed(1);
    return 'rgba(0, 0, 255, ' + opacity + ')';
  };

  // Рисую графики

  var histoHeight = 100;
  var histoIndex = histoHeight / maxTime;
  var histoWidth = 40;
  var histoMargin = histoWidth + 50;
  var startX = 190;
  var startY = 230;

  for (var j = 0; j < times.length; j++) {
    var score = Math.round(times[j]);
    var histoLevel = times[j] * histoIndex;
    var pointX = startX + histoMargin * j;
    var namesPointY = startY + 20;
    var timesPointY = startY - histoLevel - 10;

    ctx.fillStyle = 'black';
    ctx.fillText(score, pointX, timesPointY);
    ctx.fillText(names[j], pointX, namesPointY);

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(pointX, startY, histoWidth, -histoLevel);
    } else {
      ctx.fillStyle = randomColor();
      ctx.fillRect(pointX, startY, histoWidth, -histoLevel);
    }
  }
};
