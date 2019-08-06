myApp.service('cityService',function(){
	this.city = "Altstadt,DE";
	
});

myApp.service('weatherService',['$resource',function($resource){
	/*this.GetWeather  = function(city,days){
		var weatherAPI 	= $resource("https://samples.openweathermap.org/data/2.5/forecast/daily",{
		callback:"JSON_CALLBACK"},{  get: { method: "JSONP" } });
		return weatherAPI.get({ q:city , cnt:days})
	}*/
}]);