lapp.controller('viewcontroller', function($scope, userservice,$location,$location){

	/*$scope.name=userservice.student[0].sname;
	$scope.id=userservice.student[0].sid;
	$scope.age=userservice.student[0].sage;
	$scope.address=userservice.student[0].saddress;*/
	

	$scope.students = userservice.student;

	$scope.back=function(){
		$location.path('/register')
	}

	$scope.del=function(n){
		console.log(n)
		userservice.student[0].splice(0,4);
				//$location.path('/list')
				console.log('finish')
				

	}

	
});