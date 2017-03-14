lapp.controller('savecontroller', function($scope, $location,userservice){


$scope.name=userservice.getname();

	$scope.obj={}

$scope.save=function(){

userservice.student.push($scope.obj);


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