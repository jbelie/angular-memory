'use strict';

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller:'memoryController',
			templateUrl:'views/card/game.html'
		})
		.when('/level/:level/',{
			controller:'memoryController',
			templateUrl:'views/card/game.html'
		})
		.otherwise({
			redirectTo :'/'
		});
});
