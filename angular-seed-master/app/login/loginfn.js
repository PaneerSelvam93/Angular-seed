angular.module('myApp.loginfn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loginfn', {
    templateUrl: 'login/login.html',
    controller: 'Home'
  }).when('/killer', {
    templateUrl: 'login/killer.html',
    controller: 'killer'
  });
}])

.controller('Home', function($scope) {

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

 $scope.routechangetokiller=function(){
    console.log($scope.sname);

  }

 $scope.login=function(){
  	
console.log($scope.sname);
var changevar = $scope.loginObj.sname;
console.warn("---chnageval --- > ",changevar)
  	
  }
}).controller('killer', function($scope,$location) {

console.log("-------------------in killer conytrollre ;;")

$scope.val1='From Killer';
console.log($scope.val1)
$location.path("/view2")

});

// ng-repeat    ng-if   