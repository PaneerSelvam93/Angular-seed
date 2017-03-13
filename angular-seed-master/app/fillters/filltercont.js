
ap.controller('filltercontroller',function($scope){

	$scope.names = [
        				{name:'Jani',country:'Norway'},
        				{name:'Carl',country:'Sweden'},
        				{name:'Margareth',country:'England'},
       					{name:'Hege',country:'Norway'},
        				{name:'Joe',country:'Denmark'},
        				{name:'Gustav',country:'Sweden'},
        				{name:'Birgit',country:'Denmark'},
        				{name:'Mary',country:'England'},
        				{name:'Kai',country:'Norway'},
        				{name:'Panner',country:'India'}
    ];
    $scope.namess = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    if (typeof(Storage)!== "undefined") {
    localStorage.setItem("lastname", "panner");
    $scope.am=localStorage.getItem("lastname");
    console.log($scope.am)
    localStorage.removeItem("lastname");
    $scope.am=localStorage.getItem("lastname");
    console.log($scope.am)
    	} else {
	    console.log('no')
	}
     
  

});

ap.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";

        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
};


});