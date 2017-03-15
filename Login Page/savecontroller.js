lapp.controller('savecontroller', function($scope, $location,userservice){


//console.log(userservice.new[$scope.arrayindex]);

$scope.init = function () {
	 
	 console.log("in init function")

	 if(!angular.equals(userservice.newObj,{})){

	 	$scope.val="true";
		console.log("inside if loop function")
		$scope.obj = userservice.newObj;
	 	console.warn("inside if loop function",angular.toJson($scope.obj));
	 }
}

$scope.name=userservice.getname();

	$scope.obj={};

$scope.save=function(){
		userservice.student.push($scope.obj);
		$scope.obj={};	
}



$scope.clear=function(){
	$scope.obj.sname=" ";
	$scope.obj.sid=" ";
	$scope.obj.sage=" ";
	$scope.obj.saddress=" ";
}
$scope.viewlist=function(){
	$location.path('/listview')

}



});