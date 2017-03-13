angular.module('myApp.clsjs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clsjs', {
    templateUrl: 'class/cls.html',
    controller: 'csscontroller'
  });
}])

.controller('csscontroller', function($scope) {
 	console.log('work')
});