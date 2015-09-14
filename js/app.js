
// modulo principal de la aplicación
var app = angular.module('acamica',['acamica.controllers', 'ngRoute']);

// configuración de las rutas para la aplicación web
app.config(function($routeProvider){

	// defino las rutas de la app
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})

	.when('/home2', {
		templateUrl: 'partials/home2.html',
		controller: 'home2Controller'
	})
	.when('/home3', {
		templateUrl: 'partials/home3.html',
		controller: 'home3Controller'
	})
	.otherwise({
		redirectTo: '/'
	})
});

 