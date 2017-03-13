lapp.controller('logincontroller', function($scope, $location,userservice){
$scope.username="admin";
$scope.password="admin";
$scope.pwdcheck=function(){
	if($scope.uname==$scope.username && $scope.upwd==$scope.password){
		userservice.goname($scope.uname);
		$location.path('/register')
	}
	else{
		alert('Username or password is in correct')
	}
}
$scope.clear=function(){
	$scope.uname="";
	$scope.upwd="";
}

});