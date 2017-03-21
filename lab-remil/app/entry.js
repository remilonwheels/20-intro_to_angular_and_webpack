'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const swaggycowApp = angular.module('swaggycowApp', []);

swaggycowApp.controller('SwaggycowController', ['$log', '$scope', SwaggycowController]);

function SwaggycowController($log, $scope){
  $log.debug('SwaggycowController');

  let swaggycowCtrl = $scope.swaggycowCtrl = {};

  swaggycowCtrl.title = 'Yo, I be the Swaggiest Cow in da land';

  swaggycowCtrl.speak = function(input) {
    $log.debug('swaggycowCtrl.speak()');

    return cowsay.say({ text: input || 'AYOOOOOOOOOOOOO'});
  };

  swaggycowCtrl.logger = function(input) {
    $log.debug('swaggycowCtrl.logger()');

    $log.log(input);
  };
}
