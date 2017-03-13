ap.controller('secondcontroller',function($scope, sendservice){

	$scope.init = function () {
		$scope.name=sendservice.getname();
	}
	$scope.init();
});