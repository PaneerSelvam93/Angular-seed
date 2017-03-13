angular.module('myApp.firtest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/firtest', {
    templateUrl: 'wrk/fir.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', function($scope) {
 // $scope.linkg='This is '+''+'<a href="#">Google</a>';
 $scope.count=0;
 //$scope.linkg ='I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';

    $scope.callchange = function() {
        $scope.count++;
      };
});