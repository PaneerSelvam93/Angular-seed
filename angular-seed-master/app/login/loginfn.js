angular.module('myApp.loginfn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginfn', {
    templateUrl: 'login/login.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', function($scope) {

$scope.showformValue = false;
$scope.sname ='pannenr';
$scope.password= '';

$scope.loginObj = {

	sname :'',
	password :''
}
  $scope.fnget=function(){
  	console.log($scope.sname);

  }

  $scope.formShow=function(){
  	//console.log($scope.sname);
$scope.showformValue = true;
  	
  };

 $scope.login=function(){
  	
console.log($scope.sname);
var changevar = $scope.loginObj.sname;
console.warn("---chnageval --- > ",changevar)
  	
  }
});


// ng-repeat    ng-if   