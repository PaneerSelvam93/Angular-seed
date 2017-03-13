lapp.controller('savecontroller', function($scope, $location,userservice){


$scope.name=userservice.getname();
console.log($scope.name)

	$scope.af={
	 
	}

$scope.save=function(){

userservice.student.push($scope.af);


console.log(userservice.student);
$location.path('\listview')

}
$scope.clear=function(){
	$scope.sname="";
	$scope.sid="";
	$scope.sage="";
	$scope.saddress="";
}

});