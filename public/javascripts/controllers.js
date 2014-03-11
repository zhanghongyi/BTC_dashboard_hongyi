'use strict';

var BTC_dashboard = angular.module('BTC_dashboard', []);
 
BTC_dashboard.controller('BTCctrl', ['$scope', '$http', '$interval', '$timeout', function ($scope, $http, $interval, $timeout) {
  $scope.refresh = function() {
    $timeout(function () {
      $scope.running = true;
    }, 2000);
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api'
    })
    .success(function (data) {
      $scope.time = data.time;
      $scope.CAD = data.CAD;
      $scope.BRL = data.BRL;
    })
    .error(function (data) {
      $scope.CAD = 'Error';
      $scope.BRL = 'Error';
      $scope.time = 'Error';
    })
  };
  $scope.refresh();
  $scope.running = false;
  $interval(function(){
    $scope.refresh();
    $scope.running = false;
  }, 15000);
}]);