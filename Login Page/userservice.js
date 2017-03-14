lapp.service('userservice', function(){
 	var user="";
 	this.student = [];
    this.goname = function(a) { user=a; };
    this.getname = function () {return user; };

});