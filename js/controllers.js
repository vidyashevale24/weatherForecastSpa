myApp.controller('homeController',['$scope','cityService','$location',function($scope,cityService,$location){
	$scope.city = cityService.city;
	$scope.$watch('city',function(){  cityService.city = $scope.city; });
	
	$scope.submit = function(){
		$location.path("/forecast")
	}
}]);

myApp.controller('forecastController',['$scope','cityService','weatherService','$http','$routeParams',function($scope,cityService,weatherService,$http,$routeParams){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || 2;
	
	
	//Tutorial solution
	//Trial 1
	/*$scope.weatherAPI 	= $resource("https://samples.openweathermap.org/data/2.5/forecast/daily",{
		callback:"JSON_CALLBACK"},{  get: { method: "JSONP" } });
	$scope.weatherRes 	= $scope.weatherAPI.get({q:$scope.city ,cnt:2});
	console.log($scope.weatherRes);*/
	
	//Trial 2
	/*$scope.weatherAPI 	= $resource("http://localhost:81/VS/angularJS/forecastApi.php",{
	callback:"JSON_CALLBACK"},{  get: { method: "JSONP" } });
	$scope.weatherRes 	= $scope.weatherAPI.get({q:$scope.city ,cnt:2});
	console.log($scope.weatherRes);*/
	
	
	//$scope.weatherRes 	= weatherService.getWeather($scope.city,$scope.days);
	
	$http({
		method: 'GET',
		url: 'http://localhost:81/VS/angularJS/forecastApi.php',
	}).then(function (result){
		console.log(result.data);
		$scope.weatherRes = result.data;
		
		$scope.convertToFahrenheit = function(degK){
			return Math.round((1.8 * (degK - 273))+32);
		};
		
		$scope.convertToDate = function(dt){
			return new Date(dt * 1000 );
		};
		
	},function (error){

	});
}]);