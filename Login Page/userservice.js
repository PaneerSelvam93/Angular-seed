lapp.service('userservice', function(){
 	var user=" ";var index=" ";

 	this.student = [];
 	this.newObj={};
 	
    this.goname = function(a) { user=a; };
    this.getname = function () {return user; };
    
    this.getindex=function(i){ index=i};
    this.putindex=function(){ return index};

});