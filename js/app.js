var myApp = angular.module('myApp',['ngRoute','ngResource']);
//Routes
myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
 $locationProvider.hashPrefix('');
    $routeProvider
	.when('/',{
		templateUrl:'pages/home.html',
		controller:'homeController'
	})
	.when('/forecast',{
		templateUrl:'pages/forecast.html',
		controller:'forecastController'
	})
}]);

/*  myApp.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });*/

//Services
myApp.service('cityService',function(){
	this.city = "München,DE";
	
})
//Controllers
myApp.controller('homeController',['$scope','cityService',function($scope,cityService){
	$scope.city = cityService.city;
	$scope.$watch('city',function(){  cityService.city = $scope.city; });
}]);

myApp.controller('forecastController',['$scope','$resource','cityService',function($scope,$resource,cityService){
	$scope.city 		= cityService.city;
	$scope.weatherAPI 	= $resource("https://samples.openweathermap.org/data/2.5/forecast/daily",{
		callback:"JSON_CALLBACK"},{  get: { method: "JSONP" } });
	$scope.weatherRes 	= $scope.weatherAPI.get({q:$scope.city ,cnt:2});
	console.log($scope.weatherRes);
}]);

