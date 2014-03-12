'use strict';

var BTC_dashboard = angular.module('BTC_dashboard', []);
 
BTC_dashboard.controller('BTCctrl', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
  $scope.refresh = function() {
    $scope.running = true;
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api'
    })
    .success(function (data) {
      $scope.running = false;
      $scope.time = data.time;
      $scope.CAD = data.CAD;
      $scope.BRL = data.BRL;
    })
    .error(function (data) {
      $scope.running = false;
      $scope.CAD = 'Error';
      $scope.BRL = 'Error';
      $scope.time = 'Error';
    })
  };
  $scope.refresh();
  $scope.count = 15;
  $interval(function() {
    $scope.refresh();
  }, 15000);
  $interval(function() {
    if($scope.count == 0){
      $scope.count = 15;
    }
    else
      $scope.count--;
  }, 1000);
}]);