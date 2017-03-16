lapp.controller('savecontroller', function($scope, $location,userservice){
var index=null;
$scope.init = function () {

	 if(!angular.equals(userservice.newObj,{})){
	 	var index=userservice.putindex();
	 	$scope.val="true";
		$scope.obj = userservice.newObj;
	 }
}

$scope.name=userservice.getname();

	$scope.obj={};

$scope.save=function(){
		userservice.student.push($scope.obj);
		$scope.obj={};	
}
$scope.update=function(){
		//userservice.student.push($scope.obj);
		userservice.student[index]=($scope.obj);
		$scope.obj={};
		$scope.val=null;
		userservice.newObj={};
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