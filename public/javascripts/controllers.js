'use strict';

var BTC_dashboard = angular.module('BTC_dashboard', []);
 
BTC_dashboard.controller('BTCctrl', ['$scope', '$http', '$interval', '$timeout', function ($scope, $http, $interval, $timeout) {

  $scope.CAD = '';
  $scope.BRL = '';
  $scope.text='Welcome to the Bitcoin world';

  $scope.refresh = function() {
  $timeout(function (argument) {
      $scope.running = true;
  }, 2000);
  $http({
    method: 'GET',
    url: 'http://localhost:3000/api'
  })
  .success(function (data, status, headers, config) {
    $scope.data=data;
    $scope.CAD = data.CAD;
    $scope.BRL = data.BRL;
    $scope.time = data.time;
  })
  .error(function (data, status, headers, config) {
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