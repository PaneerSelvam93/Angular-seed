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
		//console.log(angular.toJson(userservice.student[n]))  userservice.student.push($scope.obj);
		 userservice.student.splice(n, 1);
	}
	$scope.upd=function(n){
		
		console.log("-------------- > --- > ",n)
			$scope.temp={};
			console.warn("----------service object---- > --- > ",userservice.student[n])
			userservice.newObj=userservice.student[n]


console.warn("---------my -service object---- > --- > ",userservice.newObj)

			/*
			$scope.temp.id=userservice.student[n].sid;
			$scope.temp.age=userservice.student[n].sage;
			$scope.temp.address=userservice.student[n].saddress;
			*/
			
			userservice.getindex(n);
			$location.path('/register')

	}

	
});