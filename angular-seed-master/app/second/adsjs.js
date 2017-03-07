
angular.module("myApp.adsjs", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adsjs', {
    templateUrl: 'second/ads.html',
    controller: 'recont'
  });
}])

.controller('recont', function($scope) {
	 $scope.records = [ "Alfreds Futterkiste", "Berglunds snabbköp", "Centro comercial Moctezuma", "Ernst Handel" ]
 
  
});