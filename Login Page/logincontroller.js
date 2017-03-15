lapp.controller('logincontroller', function($scope, $location,userservice){

$scope.pwdcheck=function(){
	if($scope.uname==$scope.upwd){
		userservice.goname($scope.uname);
		$location.path('/register')
	}
	else{
		alert('Username or password is incorrect')
	}
}
$scope.clear=function(){
	$scope.uname="";
	$scope.upwd="";
}

});