
ap.service('sendservice', function(){
 	var user="";
    this.goname = function(a) { user=a; };
    this.getname = function () {return user; };

});