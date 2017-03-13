ap.controller('firstcontroller',function($scope, sendservice,$location){

	

	$scope.send=function(){
	

		$scope.name2=sendservice.goname($scope.name);
		//console.log($scope.name2)
		$location.path("/secondcont");
	}
});