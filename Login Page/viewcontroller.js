lapp.controller('viewcontroller', function($scope, userservice,$location,$location){
	

	$scope.students = userservice.student;

	$scope.back=function(){

		$location.path('/register')
	}

	$scope.del=function(n){
		//console.log(angular.toJson(userservice.student[n]))  userservice.student.push($scope.obj);
		 userservice.student.splice(n, 1);
	}
	$scope.upd=function(n){
			$scope.temp={};
			userservice.newObj=userservice.student[n];
			
			userservice.getindex(n);
			$location.path('/register')

	}

	
});