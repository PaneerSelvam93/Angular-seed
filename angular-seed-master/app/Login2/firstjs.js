angular.module('myApp.firstjs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/firstjs', {
    templateUrl: 'login2/first.html',
    controller: 'locont'
  });
}])

.controller('locont', function($scope) {
  $scope.view=false;
  $scope.topview=true;
  $scope.lst=false;
  
  $scope.open=function(){
  		$scope.view=true;
  		$scope.topview=false;
  }
  $scope.back=function(){
  		$scope.view=false;
      $scope.topview=true;
  }
  $scope.send=function(){
  		$scope.view=false;
  		$scope.lst=true;
  }
});