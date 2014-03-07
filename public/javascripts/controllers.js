'use strict';

var BTC_dashboard = angular.module('BTC_dashboard', []);
 
BTC_dashboard.controller('BTCctrl', function ($scope, $http) {

  $scope.CAD = '';

  $scope.BRL = '';
  $scope.text='Welcome to the Bitcoin world';

  $http({
    method: 'GET',
    url: '/api'
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
  });
});

BTC_dashboard.controller('TestCtrl', ['$scope', function ($scope) {
    
    $scope.text = 'Hello, Angular fanatic.';
    
}]);