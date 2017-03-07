
angular.module("myApp.if_js", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/if_js', {
    templateUrl: 'cont/if.html',
    controller: 'rept'
  });
}])

.controller('rept', function($scope) {
 
  
});