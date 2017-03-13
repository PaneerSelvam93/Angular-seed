ap.controller('factcontroller',['$scope','factfunction',function($scope, factfunction){
	
	$scope.goname=function(){

	$scope.returnname=factfunction.getname($scope.field);

	}
}]);