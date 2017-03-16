

// Declare app level module which depends on views, and components
/*angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.firtest',
  'myApp.loginfn',
  'myApp.firstjs',
  'myApp.adsjs',
  'myApp.if_js',
  'myApp.clsjs'
  ])


.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

var ap = angular.module('app',['ngRoute']);

ap.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/controler', {
    templateUrl: 'service/ser.html',
    controller: 'CalculatorController'
  })
  .when('/firstcont', {
    templateUrl: 'cotoco/first.html',
    controller: 'firstcontroller'
  })
  .when('/secondcont', {
    templateUrl: 'cotoco/second.html',
    controller: 'secondcontroller'
  })
  .when('/factcont',{
    templateUrl:'factory/factory.html',
    controller:'factcontroller'
  })
  .when('/filltercont',{
    templateUrl:'fillters/fillter.html',
    controller:'filltercontroller'
  })
}]);*/

var lapp = angular.module('loginapp',['ngRoute']);

lapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'Login page/loginpage.html',
    controller: 'logincontroller'
  })
  .when('/register', {
    templateUrl: 'Login page/register.html',
    controller: 'savecontroller'
  })
  .when('/listview', {
    templateUrl: 'Login page/listview.html',
    controller: 'viewcontroller'
  })
  

}]);