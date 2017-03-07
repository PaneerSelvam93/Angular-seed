angular.module('myApp.firtest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/firtest', {
    templateUrl: 'wrk/fir.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});